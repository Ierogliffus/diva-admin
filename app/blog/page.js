'use client'
import "@/components/table/table.sass"
import { Button, Container, Form, Pagination, Table } from "react-bootstrap"
import "./blog.sass"
import Image from "next/image"
import Update from "@/assets/icons/update.svg"
import Trash from "@/assets/icons/trash.svg"
import Edit from "@/assets/icons/edit.svg"
import Eye from "@/assets/icons/eye.svg"
import Stats from "@/assets/icons/stats.svg"
import BlogImage from "@/assets/blog-image.jpg"
import Link from "next/link"
import Admin from "@/components/admin/admin"
import { getData } from "@/api/blog"
import { useEffect, useState } from "react"

export default function Blog() {
    const [data, setData] = useState([]);
    useEffect(() => {
        getData().then(data => setData(data))
    }, [])
    return  <div className="blog">
                <Container fluid>
                    <Admin/>
                    <h1 className="blog-title">Post Blog</h1>
                    <div className="blog-button">
                        <Link href={"/blog/create"} className="btn blog-button-add">+ Post new blog</Link>
                        <Button className="blog-button-update">
                            <Update />
                        </Button>
                    </div>
                    <Table className="admin-table" width="100%">
                        <thead className="admin-table-thead">
                            <tr>
                                <th className="admin-table-title">
                                    <Form.Check className="admin-table-checkbox" aria-label="option 1" />
                                </th>
                                <th className="admin-table-title" width="5%">#</th>
                                <th className="admin-table-title" width="10%">Image</th>
                                <th className="admin-table-title" width="25%">Blog link</th>
                                <th className="admin-table-title" width="20%">Date posted</th>
                                <th className="admin-table-title" width="20%">Posted by</th>
                                <th className="admin-table-title" width="20%">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.length > 0 && data.map(item => {
                                return  <tr className="admin-table-col">
                                            <td className="blog-table-checkbox">
                                                <Form.Check aria-label="option 1" />
                                            </td>
                                            <td className="admin-table-col">{item.id}</td>
                                            <td className="admin-table-col">
                                                {item.banner != "" && <Image src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${item.banner.photo_path}`} height={100} width={100} onError={(event) => event.target.src = BlogImage}/>}
                                                {item.banner == "" && <Image src={BlogImage}/>}
                                            </td>
                                            <td className="admin-table-col">
                                                <Link className="blog-table-link" href={`${process.env.NEXT_PUBLIC_CLIENT_URL}blog/${item.title}`}>{item.title}</Link>
                                            </td>
                                            <td className="admin-table-col">{item.created_at}</td>
                                            <td className="admin-table-col">{item.created_by}</td>
                                            <td className="admin-table-col">
                                                <div className="admin-table-actions">
                                                    <Button variant="link"><Trash /></Button>
                                                    <Link href={`/blog/${item.id}`} className="btn btn-link" variant="link"><Edit /></Link>
                                                    <Link href={`/blog/${item.id}`} className="btn btn-link" variant="link"><Eye /></Link>
                                                    <Button variant="link"><Stats /></Button>
                                                </div>
                                            </td>
                                        </tr>
                            })}
                            
                        </tbody>
                    </Table>
                    <div className="blog-table-nav">
                        <p className="blog-table-nav-showing">Showing 1 to 10 of 50 entries</p>
                        <p className="blog-table-nav-display">Display</p>
                        <input className="blog-table-nav-counter" type="number" min={0} max={1000} step={5} placeholder="0"></input>
                        <Pagination style={{marginLeft: "30px"}}>
                            <Pagination.Prev className="blog-table-nav-pag"/>
                            <Pagination.Item className="blog-table-nav-pag-link">{1}</Pagination.Item>
                            <Pagination.Item>{2}</Pagination.Item>
                            <Pagination.Item>{3}</Pagination.Item>
                            <Pagination.Item>{4}</Pagination.Item>
                            <Pagination.Next className="blog-table-nav-pag" />
                        </Pagination>
                    </div>
                </Container>
            </div>
}