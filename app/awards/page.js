'use client'
import "@/components/table/table.sass"
import { Button, Container, Form, Pagination, Table } from "react-bootstrap"
import "./awards.sass"
import Image from "next/image"
import Update from "@/assets/icons/update.svg"
import Trash from "@/assets/icons/trash.svg"
import Edit from "@/assets/icons/edit.svg"
import Eye from "@/assets/icons/eye.svg"
import Stats from "@/assets/icons/stats.svg"
import BlogImage from "@/assets/blog-image.jpg"
import Link from "next/link"
import Admin from "@/components/admin/admin"
import { getData } from "@/api/awards"
import { useEffect, useState } from "react"

export default function awards() {
    const [data, setData] = useState([]);
    useEffect(() => {
        getData().then(data => setData(data))
    }, [])
    return  <div className="awards">
                <Container fluid>
                    <Admin/>
                    <h1 className="awards-title">Post awards</h1>
                    <div className="awards-button">
                        <Link href={"/awards/create"} className="btn awards-button-add">+ Create new award</Link>
                        <Button className="awards-button-update">
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
                                <th className="admin-table-title" width="25%">Award name</th>
                                <th className="admin-table-title" width="40%">Award URL</th>
                                <th className="admin-table-title" width="20%">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.length > 0 && data.map(item => {
                                return  <tr className="admin-table-col">
                                            <td className="awards-table-checkbox">
                                                <Form.Check aria-label="option 1" />
                                            </td>
                                            <td className="admin-table-col">{item.id}</td>
                                            <td className="admin-table-col">
                                                {item.image != "" && <Image src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${item.image.photo_path}`} height={100} width={100} onError={(event) => event.target.src = BlogImage}/>}
                                                {item.image == "" && <Image src={BlogImage}/>}
                                            </td>
                                            <td className="admin-table-col">
                                                {item.name}
                                            </td>
                                            <td className="admin-table-col">
                                                <Link className="awards-table-link" href={item.url}>{item.url}</Link>
                                            </td>
                                            <td className="admin-table-col">
                                                <div className="admin-table-actions">
                                                    <Button variant="link"><Trash /></Button>
                                                    <Link href={`/awards/${item.id}`} className="btn btn-link" variant="link"><Edit /></Link>
                                                    <Link href={`/awards/${item.id}`} className="btn btn-link" variant="link"><Eye /></Link>
                                                </div>
                                            </td>
                                        </tr>
                            })}
                            
                        </tbody>
                    </Table>
                    <div className="admin-table-nav">
                        <p className="admin-table-nav-showing">Showing 1 to 10 of 50 entries</p>
                        <p className="admin-table-nav-display">Display</p>
                        <input className="admin-table-nav-counter" type="number" min={0} max={1000} step={5} placeholder="0"></input>
                        <Pagination style={{marginLeft: "30px"}}>
                            <Pagination.Prev className="admin-table-nav-pag"/>
                            <Pagination.Item className="admin-table-nav-pag-link">{1}</Pagination.Item>
                            <Pagination.Item>{2}</Pagination.Item>
                            <Pagination.Item>{3}</Pagination.Item>
                            <Pagination.Item>{4}</Pagination.Item>
                            <Pagination.Next className="admin-table-nav-pag" />
                        </Pagination>
                    </div>
                </Container>
            </div>
}