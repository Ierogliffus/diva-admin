"use client";

import { Fragment, useEffect, useState } from "react"
import "@/components/form/form.sass"
import { Button, Container, Form } from "react-bootstrap"
import Link from "next/link"
import PageTitle from "@/components/page-title/page-title"
import { InputMarkdown } from "@/components/markdown/markdown"
import { createItem } from "@/api/blog"
import { useFieldArray, useForm } from "react-hook-form"
import { useRouter } from "next/navigation"
import Upload from "@/assets/icons/upload.svg"
import Trash from "@/assets/icons/trash.svg"
import Edit from "@/assets/icons/edit.svg"

export default function BlogItem({params}) {

    const router = useRouter()
    
    const { register, reset, handleSubmit, watch, formState: { errors } } = useForm()

    const [photo, setPhoto] = useState("")
    const attachPhoto = (event) => {
        try {
            setPhoto(URL.createObjectURL(event.target.files[0]))
        } catch {

        }
    }
    const resetPhoto = (event) => {
        reset({ banner: "" }, { keepErrors: true, keepDirty: true })
        setPhoto("")
    }

    const save = (data) => {
        createItem(data).then(res => {
            if (res.id) {
                router.push(`/blog/${res.id}`)
            }
        })
    }

    return  <div className="blog-item">
                <Container fluid>
                    <PageTitle title={`Post blog`}/>
                    <Form className="admin-form" onSubmit={handleSubmit(save)}>
                        <Form.Group className="admin-form-group" controlId="blog-title">
                            <Form.Label className="admin-form-label">Title</Form.Label>
                            <Form.Control {...register("title", {required: true})} className="admin-form-control" type="text" placeholder="Add blog title" />
                        </Form.Group>
                        <Form.Group className="admin-form-group" controlId="blog-banner">
                            <p className="admin-form-label">Banner</p>
                            <Form.Control type="file" {...register("banner", {required: true})} onChange={attachPhoto} className="admin-form-control-image" accept="image/png, image/jpeg" />
                            <Form.Label className="admin-form-label-image" style={{backgroundImage: `url(${photo})`}}>
                                {photo != "" &&
                                    <div className="admin-form-label-image-panel">
                                        <Button variant="link" onClick={resetPhoto}><Trash /></Button>
                                    </div>
                                }
                                <Upload/>
                            </Form.Label>
                        </Form.Group>
                        <Form.Group className="admin-form-group" controlId="blog-content">
                            <Form.Label className="admin-form-label">Content</Form.Label>
                            {/* <Form.Control className="admin-form-control" as="textarea"/> */}
                            <InputMarkdown form={{...register("description", {required: false})}}/>
                        </Form.Group>
                        <Form.Group className="admin-form-group" controlId="blog-video">
                            <Form.Label className="admin-form-label">Link video</Form.Label>
                            <Form.Control {...register(`video`, {required: false, pattern: /^http[s]?:\/\/[\S]+$/i})} className="admin-form-control" type="text" placeholder="https://www.youtube.com/V00000000" />
                        </Form.Group>
                        <Button variant="link" type="submit" className="admin-form-submit">
                            Post blog
                        </Button>
                        <Link href="/blog" variant="link" className="admin-form-back btn btn-link">
                            Go back
                        </Link>
                    </Form>
                </Container>
            </div>
}
