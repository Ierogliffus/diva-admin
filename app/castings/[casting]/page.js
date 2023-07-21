"use client"
import { Button, Container, Form, Pagination, Table } from "react-bootstrap"
import "@/components/table/table.sass"
import "../castings.sass"
import "./casting.sass"
import Update from "@/assets/icons/update.svg"
import Prof from "@/assets/blog-image.jpg"
import Trash from "@/assets/icons/trash.svg"
import Edit from "@/assets/icons/edit.svg"
import View from "@/assets/icons/eye.svg"
import Send from "@/assets/icons/send.svg"
import Check from "@/assets/icons/check.svg"
import Cross from "@/assets/icons/cross.svg"
import Admin from "@/components/admin/admin"
import Link from "next/link"
import Image from "next/image"
import { Fragment, useState } from "react"
import { SortAdminTable } from "@/components/table/table"

export default function Casting() {
    const [sortedBy, setSortedBy] = useState({
        sortedBy: "key",
        sortOrder: "asc"
    })
    const [demoData, setDemoData] = useState([
        {
            id: 3227798,
            key: 1,
            category: "Models",
            casting: "CASTING CALL! || PHOTOSHOOT- FEMALE MODELS FOR JEWELRY SHOOT",
            name: "Anita",
            mobile: "+49176263734990",
            email: "ani12ta@gmail.com",
            viewed: true,
        }, {
            id: 3212338,
            key: 2,
            category: "Cast",
            casting: "0CASTING CALL! || PHOTOSHOOT- FEMALE MODELS FOR JEWELRY SHOOT",
            name: "Jhon",
            mobile: "+49176263734990",
            email: "anitagga@gmail.com",
            viewed: false,
        }, {
            id: 3455798,
            key: 3,
            category: "Model",
            casting: "1CASTING CALL! || PHOTOSHOOT- FEMALE MODELS FOR JEWELRY SHOOT",
            name: "Anna",
            mobile: "+49176263734990",
            email: "aniadwata@gmail.com",
            viewed: true,
        }, {
            id: 1227798,
            key: 4,
            category: "Entertainers",
            casting: "2CASTING CALL! || PHOTOSHOOT- FEMALE MODELS FOR JEWELRY SHOOT",
            name: "Dave",
            mobile: "+49176263734990",
            email: "a123nita@gmail.com",
            viewed: true,
        }, {
            id: 31227798,
            key: 5,
            category: "Production",
            casting: "CASTING CALL! || PHOTOSHOOT- FEMALE MODELS FOR JEWELRY SHOOT",
            name: "Dave",
            mobile: "+49176263734990",
            email: "a1123nita@gmail.com",
            viewed: true,
        },
    ])
    const sortTable = (sortBy, sortOrder) => {
        setDemoData(SortAdminTable(sortBy, sortOrder, demoData))
        setSortedBy({sortedBy: sortBy, sortOrder})
    }
    const setViewed = (key) => {
        let tmp = demoData
        let index = demoData.findIndex(item => {
            return item.key == key
        })
        tmp[index].viewed = !tmp[index].viewed
        setDemoData(tmp)
        console.log(demoData)
    }
    return  <div className="castings" layout="md">
                <Container fluid>
                    <Admin/>
                    <h1 className="castings-title">Casting Users</h1>
                    <div className="castings-button">
                        <Button className="castings-button-update"><Send/></Button>
                        <Button className="castings-button-update">
                            <Update />
                        </Button>
                    </div>
                    <Table className="admin-table table-borderless" width={"100%"}>
                        <thead className="admin-table-thead">
                            <tr>
                                <th className="admin-table-checkbox" width="max-content">
                                    <Form.Check className="admin-table-checkbox-first" aria-label="option 1" />
                                </th>
                                <th className="admin-table-title" width="max-content">#
                                    <div className="admin-table-sort-container">
                                        <Button className={`admin-table-sort admin-table-sort-asc ${sortedBy.sortOrder == "asc" && sortedBy.sortedBy == "key" ? "active" : ""}`} variant="link" onClick={() => sortTable("key", "asc")}></Button>
                                        <Button className={`admin-table-sort admin-table-sort-desc ${sortedBy.sortOrder == "desc" && sortedBy.sortedBy == "key" ? "active" : ""}`} variant="link" onClick={() => sortTable("key", "desc")}></Button>
                                    </div>
                                </th>
                                <th className="admin-table-title" width="10%">Image</th>
                                <th className="admin-table-title" width="5%">Category
                                    <div className="admin-table-sort-container">
                                        <Button className={`admin-table-sort admin-table-sort-asc ${sortedBy.sortOrder == "asc" && sortedBy.sortedBy == "category" ? "active" : ""}`} variant="link" onClick={() => sortTable("category", "asc")}></Button>
                                        <Button className={`admin-table-sort admin-table-sort-desc ${sortedBy.sortOrder == "desc" && sortedBy.sortedBy == "category" ? "active" : ""}`} variant="link" onClick={() => sortTable("category", "desc")}></Button>
                                    </div>
                                </th>
                                <th className="admin-table-title" width="15%">ID
                                    <div className="admin-table-sort-container">
                                        <Button className={`admin-table-sort admin-table-sort-asc ${sortedBy.sortOrder == "asc" && sortedBy.sortedBy == "id" ? "active" : ""}`} variant="link" onClick={() => sortTable("id", "asc")}></Button>
                                        <Button className={`admin-table-sort admin-table-sort-desc ${sortedBy.sortOrder == "desc" && sortedBy.sortedBy == "id" ? "active" : ""}`} variant="link" onClick={() => sortTable("id", "desc")}></Button>
                                    </div>
                                </th>
                                <th className="admin-table-title" width="12.5%">Casting
                                    <div className="admin-table-sort-container">
                                        <Button className={`admin-table-sort admin-table-sort-asc ${sortedBy.sortOrder == "asc" && sortedBy.sortedBy == "casting" ? "active" : ""}`} variant="link" onClick={() => sortTable("casting", "asc")}></Button>
                                        <Button className={`admin-table-sort admin-table-sort-desc ${sortedBy.sortOrder == "desc" && sortedBy.sortedBy == "casting" ? "active" : ""}`} variant="link" onClick={() => sortTable("casting", "desc")}></Button>
                                    </div>
                                </th>
                                <th className="admin-table-title" width="10%">First Name (s)
                                    <div className="admin-table-sort-container">
                                        <Button className={`admin-table-sort admin-table-sort-asc ${sortedBy.sortOrder == "asc" && sortedBy.sortedBy == "name" ? "active" : ""}`} variant="link" onClick={() => sortTable("name", "asc")}></Button>
                                        <Button className={`admin-table-sort admin-table-sort-desc ${sortedBy.sortOrder == "desc" && sortedBy.sortedBy == "name" ? "active" : ""}`} variant="link" onClick={() => sortTable("name", "desc")}></Button>
                                    </div>
                                </th>
                                <th className="admin-table-title" width="10%">Mobile number</th>
                                <th className="admin-table-title" width="10%">Email
                                    <div className="admin-table-sort-container">
                                        <Button className={`admin-table-sort admin-table-sort-asc ${sortedBy.sortOrder == "asc" && sortedBy.sortedBy == "email" ? "active" : ""}`} variant="link" onClick={() => sortTable("email", "asc")}></Button>
                                        <Button className={`admin-table-sort admin-table-sort-desc ${sortedBy.sortOrder == "desc" && sortedBy.sortedBy == "email" ? "active" : ""}`} variant="link" onClick={() => sortTable("email", "desc")}></Button>
                                    </div>
                                </th>
                                <th className="admin-table-title" width="90px">Viewed</th>
                                <th className="admin-table-title" width="180px">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {demoData.length > 0 && demoData.map(item => {
                                return  <tr>
                                            <th className="admin-table-checkbox">
                                                <Form.Check aria-label="option 1" />
                                            </th>
                                            <td className="admin-table-col">{item.key}</td>
                                            <td className="admin-table-col"><Image src={Prof}/></td>
                                            <td className="admin-table-col">
                                                {item.category}
                                            </td>
                                            <td className="admin-table-col">
                                                {item.id}
                                            </td>
                                            <td className="admin-table-col">
                                                <Link href={"/"}>{item.casting}</Link>
                                            </td>
                                            <td className="admin-table-col">
                                                {item.name}
                                            </td>
                                            <td className="admin-table-col">{item.mobile}</td>
                                            <td className="admin-table-col">
                                                <Link href={"/"}>{item.email}</Link>
                                            </td>
                                            <td className="admin-table-col">
                                                <Form.Check id={`viewed-${item.key}`} className="casting-table-viewed" defaultChecked={item.viewed} onChange={() => setViewed(item.key)} type="checkbox" label={item.viewed ? <Check/> : <Cross/>} />
                                            </td>
                                            <td>
                                                <div className="castings-table-actions">
                                                    <Button variant="link"><Trash /></Button>
                                                    <Button variant="link"><Edit /></Button>
                                                    <Button variant="link"><View /></Button>
                                                    <Button variant="link"><Send /></Button>
                                                </div>
                                            </td>
                                        </tr>
                            })}
                        </tbody>
                    </Table>
                    <div className="castings-table-nav">
                        <p className="castings-table-nav-showing">Showing 1 to 10 of 50 entries</p>
                        <p className="castings-table-nav-display">Display</p>
                        <input className="castings-table-nav-counter" type="number" min={0} max={1000} step={5} placeholder="0"></input>
                        <Pagination style={{marginLeft: "30px"}}>
                            <Pagination.Prev className="castings-table-nav-pag"/>
                            <Pagination.Item className="castings-table-nav-pag-link">{1}</Pagination.Item>
                            <Pagination.Item>{2}</Pagination.Item>
                            <Pagination.Item>{3}</Pagination.Item>
                            <Pagination.Item>{4}</Pagination.Item>
                            <Pagination.Next className="castings-table-nav-pag" />
                        </Pagination>
                        </div>
                </Container>
            </div>
}
