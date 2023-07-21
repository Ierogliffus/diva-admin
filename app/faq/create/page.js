"use client";

import { Fragment, useEffect, useState } from "react";
import "@/components/form/form.sass"
import { Button, Container, Form } from "react-bootstrap";
import Link from "next/link";
import PageTitle from "@/components/page-title/page-title";
import { InputMarkdown } from "@/components/markdown/markdown";
import { createItem } from "@/api/faq";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

export default function FaqItem({params}) {

    const router = useRouter()
    
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const save = (data) => {
        createItem(data).then(res => {
            if (res.id) {
                router.push(`/faq/${res.id}`)
            }
        })
    }

    return  <div className="faq-item">
                <Container fluid>
                    <PageTitle title={`Create new FAQ`}/>
                    <Form className="admin-form" onSubmit={handleSubmit(save)}>
                        <Form.Group className="admin-form-group" controlId="faq-title">
                            <Form.Label className="admin-form-label">Title</Form.Label>
                            <Form.Control {...register("title", {required: true})} className="admin-form-control" type="text" placeholder="Add FAQ title" />
                        </Form.Group>
                        <Form.Group className="admin-form-group" controlId="faq-content">
                            <Form.Label className="admin-form-label">Content</Form.Label>
                            {/* <Form.Control className="admin-form-control" as="textarea"/> */}
                            <InputMarkdown form={{...register("description", {required: true})}}/>
                        </Form.Group>
                        <Button variant="link" type="submit" className="admin-form-submit">
                            Post blog
                        </Button>
                        <Link href="/faq" variant="link" className="admin-form-back btn btn-link">
                            Go back
                        </Link>
                    </Form>
                </Container>
            </div>
}
