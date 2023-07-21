"use client"
import Table from "react-bootstrap/Table"
import "@/components/table/table.sass"
import { Button, Container, Form, Pagination } from "react-bootstrap"
import "./faq.sass"
import Update from "@/assets/icons/update.svg"
import Trash from "@/assets/icons/trash.svg"
import Edit from "@/assets/icons/edit.svg"
import Admin from "@/components/admin/admin"
import { useEffect, useState } from "react"
import { getData, removeItem } from "@/api/faq"
import { parseMarkdown } from "@/api/global"
import { SortAdminTable } from "@/components/table/table"
import { ParsedMarkdown } from "@/components/markdown/markdown"
import Link from "next/link"

export default function Faq() {
    const [data, setData] = useState([])
    const [sortedBy, setSortedBy] = useState({
        sortedBy: "key",
        sortOrder: "asc"
    })
    const sortTable = (sortBy, sortOrder) => {
        setData(SortAdminTable(sortBy, sortOrder, data))
        setSortedBy({sortedBy: sortBy, sortOrder})
    }
    const remove = (id) => {
        removeItem(id).then(success => {
            if (success) {
                getData().then(data => setData(data))        
            }
        })
    }
    useEffect(() => {
        getData().then(data => setData(data))
    }, [])
    return  <div className="faq" layout="md">
                <Container fluid>
                    <Admin/>
                    <h1 className="faq-title">FAQ</h1>
                    <div className="faq-button">
                        <Link href={"/faq/create"} className="faq-button-add btn btn-link">+ Add FAQ</Link>
                        <Button className="faq-button-update">
                            <Update />
                        </Button>
                        </div>
                    <Table className="admin-table table-borderless" width={"100%"}>
                        <thead className="admin-table-thead">
                            <tr>
                                <th className="faq-table-checkbox">
                                    <Form.Check className="admin-table-checkbox-first" aria-label="option 1" />
                                </th>
                                <th className="admin-table-title">#
                                    <div className="admin-table-sort-container">
                                        <Button className={`admin-table-sort admin-table-sort-asc ${sortedBy.sortOrder == "asc" && sortedBy.sortedBy == "id" ? "active" : ""}`} variant="link" onClick={() => sortTable("id", "asc")}></Button>
                                        <Button className={`admin-table-sort admin-table-sort-desc ${sortedBy.sortOrder == "desc" && sortedBy.sortedBy == "id" ? "active" : ""}`} variant="link" onClick={() => sortTable("id", "desc")}></Button>
                                    </div>
                                </th>
                                <th className="admin-table-title">Content</th>
                                <th className="faq-table-action title">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.length > 0 && data.map(item => {
                                return  <tr>
                                            <td className="faq-table-checkbox">
                                                <Form.Check aria-label="option 1" />
                                            </td>
                                            <td className="faq-table-num">{item.id}</td>
                                            <td className="faq-table-text">
                                                <h3 className="faq-table-text-title">{item.title}</h3>
                                                <div className="faq-table-text-desc">
                                                    <ParsedMarkdown markdown={parseMarkdown(item.description)}/>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="admin-table-actions">
                                                    <Button variant="link" onClick={() => remove(item.id)}><Trash /></Button>
                                                    <Link href={`/faq/${item.id}`} className="btn btn-link" variant="link"><Edit /></Link>
                                                </div>
                                            </td>
                                        </tr>
                            })}
                        </tbody>
                    </Table>
                    <div className="faq-table-nav">
                        <p className="faq-table-nav-showing">Showing 1 to 10 of 50 entries</p>
                        <p className="faq-table-nav-display">Display</p>
                        <input className="faq-table-nav-counter" type="number" min={0} max={1000} step={5} placeholder="0"></input>
                        <Pagination style={{marginLeft: "30px"}}>
                            <Pagination.Prev className="faq-table-nav-pag"/>
                            <Pagination.Item className="faq-table-nav-pag-link">{1}</Pagination.Item>
                            <Pagination.Item>{2}</Pagination.Item>
                            <Pagination.Item>{3}</Pagination.Item>
                            <Pagination.Item>{4}</Pagination.Item>
                            <Pagination.Next className="faq-table-nav-pag" />
                        </Pagination>
                        </div>
                </Container>
            </div>
}
