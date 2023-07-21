"use client";

import { Fragment, useEffect, useState } from "react";
import "@/components/form/form.sass"
import { Button, Container, Form } from "react-bootstrap";
import Link from "next/link";
import PageTitle from "@/components/page-title/page-title";
import { InputMarkdown } from "@/components/markdown/markdown";
import { getItemData, updateItem } from "@/api/faq";
import { useForm } from "react-hook-form";

export default function FaqItem({params}) {
    const [data, setData] = useState({})

    useEffect(() => {
        getItemData(params["faq-item"]).then(data => setData(data))
    }, [])

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const save = (data) => {
        console.log(data)
        updateItem(params["faq-item"], data).then(res => console.log(res))
    }

    return  <div className="faq-item">
                <Container fluid>
                    <PageTitle title={`Edit FAQ item #${params["faq-item"]}`}/>
                    <Form className="admin-form" onSubmit={handleSubmit(save)}>
                        <Form.Group className="admin-form-group" controlId="faq-title">
                            <Form.Label className="admin-form-label">Title</Form.Label>
                            <Form.Control {...register("title", {required: true})} className="admin-form-control" type="text" placeholder="Add FAQ title" defaultValue={data.title} />
                        </Form.Group>
                        <Form.Group className="admin-form-group" controlId="faq-content">
                            <Form.Label className="admin-form-label">Content</Form.Label>
                            {/* <Form.Control className="admin-form-control" as="textarea"/> */}
                            <InputMarkdown form={{defaultValue: data.description, ...register("description", {required: true})}}/>
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
