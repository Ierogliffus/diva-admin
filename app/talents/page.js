"use client"
import { Button, Container, Form, Pagination, Table } from "react-bootstrap"
import "@/components/table/table.sass"
import "./talents.sass"
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

export default function Talents() {
    const [sortedBy, setSortedBy] = useState({
        sortedBy: "key",
        sortOrder: "asc"
    })
    const [demoData, setDemoData] = useState([
        {
            key: 1,
            category: "Models",
            id: 3227798,
            gender: "Female",
            age: 25,
            height: 180,
            waist: 60,
            hips: 90,
            shoe: 40,
            first_name: "Anita",
            last_name: "Zaman",
            subcategory: "Model 1",
            mobile: "+49176263734990",
            email: "ani12ta@gmail.com",
            nationality: "Ukrainian",
            date_registered: "24.05.2022",
            approved_by: "Amir Shaheer",
            date_edited: "24.05.2022",
            edited_by: "Amir Shaheer",
            status: 0,
            availability: "-1",
        },
        {
            key: 1,
            category: "Models",
            id: 3227798,
            gender: "Female",
            age: 25,
            height: 180,
            waist: 60,
            hips: 90,
            shoe: 40,
            first_name: "Anita",
            last_name: "Zaman",
            subcategory: "Model 1",
            mobile: "+49176263734990",
            email: "ani12ta@gmail.com",
            nationality: "Ukrainian",
            date_registered: "24.05.2022",
            approved_by: "Amir Shaheer",
            date_edited: "24.05.2022",
            edited_by: "Amir Shaheer",
            status: 1,
            availability: "0",
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
    return  <div className="talents" layout="md">
                <Container fluid>
                    <Admin/>
                    <h1 className="talents-title">Talents</h1>
                    <div className="talents-button">
                        <Button className="talents-button-add">+ Create new talent</Button>
                        <Button className="talents-button-add">Export talents</Button>
                        <Button className="talents-button-update"><Send/></Button>
                        <Button className="talents-button-update">
                            <Update />
                        </Button>
                    </div>
                    <div className="admin-table-container">
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
                                    <th className="admin-table-title" width="12.5%">Gender
                                        <div className="admin-table-sort-container">
                                            <Button className={`admin-table-sort admin-table-sort-asc ${sortedBy.sortOrder == "asc" && sortedBy.sortedBy == "gender" ? "active" : ""}`} variant="link" onClick={() => sortTable("gender", "asc")}></Button>
                                            <Button className={`admin-table-sort admin-table-sort-desc ${sortedBy.sortOrder == "desc" && sortedBy.sortedBy == "gender" ? "active" : ""}`} variant="link" onClick={() => sortTable("gender", "desc")}></Button>
                                        </div>
                                    </th>
                                    <th className="admin-table-title" width="10%">Age
                                        <div className="admin-table-sort-container">
                                            <Button className={`admin-table-sort admin-table-sort-asc ${sortedBy.sortOrder == "asc" && sortedBy.sortedBy == "age" ? "active" : ""}`} variant="link" onClick={() => sortTable("age", "asc")}></Button>
                                            <Button className={`admin-table-sort admin-table-sort-desc ${sortedBy.sortOrder == "desc" && sortedBy.sortedBy == "age" ? "active" : ""}`} variant="link" onClick={() => sortTable("age", "desc")}></Button>
                                        </div>
                                    </th>
                                    <th className="admin-table-title" width="10%">Height
                                        <div className="admin-table-sort-container">
                                            <Button className={`admin-table-sort admin-table-sort-asc ${sortedBy.sortOrder == "asc" && sortedBy.sortedBy == "height" ? "active" : ""}`} variant="link" onClick={() => sortTable("height", "asc")}></Button>
                                            <Button className={`admin-table-sort admin-table-sort-desc ${sortedBy.sortOrder == "desc" && sortedBy.sortedBy == "height" ? "active" : ""}`} variant="link" onClick={() => sortTable("height", "desc")}></Button>
                                        </div>
                                    </th>
                                    <th className="admin-table-title" width="10%">Waist
                                        <div className="admin-table-sort-container">
                                            <Button className={`admin-table-sort admin-table-sort-asc ${sortedBy.sortOrder == "asc" && sortedBy.sortedBy == "waist" ? "active" : ""}`} variant="link" onClick={() => sortTable("waist", "asc")}></Button>
                                            <Button className={`admin-table-sort admin-table-sort-desc ${sortedBy.sortOrder == "desc" && sortedBy.sortedBy == "waist" ? "active" : ""}`} variant="link" onClick={() => sortTable("waist", "desc")}></Button>
                                        </div>
                                    </th>
                                    <th className="admin-table-title" width="10%">Hips
                                        <div className="admin-table-sort-container">
                                            <Button className={`admin-table-sort admin-table-sort-asc ${sortedBy.sortOrder == "asc" && sortedBy.sortedBy == "hips" ? "active" : ""}`} variant="link" onClick={() => sortTable("hips", "asc")}></Button>
                                            <Button className={`admin-table-sort admin-table-sort-desc ${sortedBy.sortOrder == "desc" && sortedBy.sortedBy == "hips" ? "active" : ""}`} variant="link" onClick={() => sortTable("hips", "desc")}></Button>
                                        </div>
                                    </th>
                                    <th className="admin-table-title" width="10%">Shoe
                                        <div className="admin-table-sort-container">
                                            <Button className={`admin-table-sort admin-table-sort-asc ${sortedBy.sortOrder == "asc" && sortedBy.sortedBy == "shoe" ? "active" : ""}`} variant="link" onClick={() => sortTable("shoe", "asc")}></Button>
                                            <Button className={`admin-table-sort admin-table-sort-desc ${sortedBy.sortOrder == "desc" && sortedBy.sortedBy == "shoe" ? "active" : ""}`} variant="link" onClick={() => sortTable("shoe", "desc")}></Button>
                                        </div>
                                    </th>
                                    <th className="admin-table-title" width="10%">First Name (s)
                                        <div className="admin-table-sort-container">
                                            <Button className={`admin-table-sort admin-table-sort-asc ${sortedBy.sortOrder == "asc" && sortedBy.sortedBy == "first_name" ? "active" : ""}`} variant="link" onClick={() => sortTable("first_name", "asc")}></Button>
                                            <Button className={`admin-table-sort admin-table-sort-desc ${sortedBy.sortOrder == "desc" && sortedBy.sortedBy == "first_name" ? "active" : ""}`} variant="link" onClick={() => sortTable("first_name", "desc")}></Button>
                                        </div>
                                    </th>
                                    <th className="admin-table-title" width="10%">Last Name (s)
                                        <div className="admin-table-sort-container">
                                            <Button className={`admin-table-sort admin-table-sort-asc ${sortedBy.sortOrder == "asc" && sortedBy.sortedBy == "last_name" ? "active" : ""}`} variant="link" onClick={() => sortTable("last_name", "asc")}></Button>
                                            <Button className={`admin-table-sort admin-table-sort-desc ${sortedBy.sortOrder == "desc" && sortedBy.sortedBy == "last_name" ? "active" : ""}`} variant="link" onClick={() => sortTable("last_name", "desc")}></Button>
                                        </div>
                                    </th>
                                    <th className="admin-table-title" width="5%">Subcategory
                                        <div className="admin-table-sort-container">
                                            <Button className={`admin-table-sort admin-table-sort-asc ${sortedBy.sortOrder == "asc" && sortedBy.sortedBy == "subcategory" ? "active" : ""}`} variant="link" onClick={() => sortTable("subcategory", "asc")}></Button>
                                            <Button className={`admin-table-sort admin-table-sort-desc ${sortedBy.sortOrder == "desc" && sortedBy.sortedBy == "subcategory" ? "active" : ""}`} variant="link" onClick={() => sortTable("subcategory", "desc")}></Button>
                                        </div>
                                    </th>
                                    <th className="admin-table-title" width="10%">Mobile number</th>
                                    <th className="admin-table-title" width="10%">Email
                                        <div className="admin-table-sort-container">
                                            <Button className={`admin-table-sort admin-table-sort-asc ${sortedBy.sortOrder == "asc" && sortedBy.sortedBy == "email" ? "active" : ""}`} variant="link" onClick={() => sortTable("email", "asc")}></Button>
                                            <Button className={`admin-table-sort admin-table-sort-desc ${sortedBy.sortOrder == "desc" && sortedBy.sortedBy == "email" ? "active" : ""}`} variant="link" onClick={() => sortTable("email", "desc")}></Button>
                                        </div>
                                    </th>
                                    <th className="admin-table-title" width="10%">Nationality
                                        <div className="admin-table-sort-container">
                                            <Button className={`admin-table-sort admin-table-sort-asc ${sortedBy.sortOrder == "asc" && sortedBy.sortedBy == "nationality" ? "active" : ""}`} variant="link" onClick={() => sortTable("nationality", "asc")}></Button>
                                            <Button className={`admin-table-sort admin-table-sort-desc ${sortedBy.sortOrder == "desc" && sortedBy.sortedBy == "nationality" ? "active" : ""}`} variant="link" onClick={() => sortTable("nationality", "desc")}></Button>
                                        </div>
                                    </th>
                                    <th className="admin-table-title" width="10%">Date registered
                                        <div className="admin-table-sort-container">
                                            <Button className={`admin-table-sort admin-table-sort-asc ${sortedBy.sortOrder == "asc" && sortedBy.sortedBy == "date_registered" ? "active" : ""}`} variant="link" onClick={() => sortTable("date_registered", "asc")}></Button>
                                            <Button className={`admin-table-sort admin-table-sort-desc ${sortedBy.sortOrder == "desc" && sortedBy.sortedBy == "date_registered" ? "active" : ""}`} variant="link" onClick={() => sortTable("date_registered", "desc")}></Button>
                                        </div>
                                    </th>
                                    <th className="admin-table-title" width="10%">Approved by
                                        <div className="admin-table-sort-container">
                                            <Button className={`admin-table-sort admin-table-sort-asc ${sortedBy.sortOrder == "asc" && sortedBy.sortedBy == "approved_by" ? "active" : ""}`} variant="link" onClick={() => sortTable("approved_by", "asc")}></Button>
                                            <Button className={`admin-table-sort admin-table-sort-desc ${sortedBy.sortOrder == "desc" && sortedBy.sortedBy == "approved_by" ? "active" : ""}`} variant="link" onClick={() => sortTable("approved_by", "desc")}></Button>
                                        </div>
                                    </th>
                                    <th className="admin-table-title" width="10%">Date edited
                                        <div className="admin-table-sort-container">
                                            <Button className={`admin-table-sort admin-table-sort-asc ${sortedBy.sortOrder == "asc" && sortedBy.sortedBy == "date_edited" ? "active" : ""}`} variant="link" onClick={() => sortTable("date_edited", "asc")}></Button>
                                            <Button className={`admin-table-sort admin-table-sort-desc ${sortedBy.sortOrder == "desc" && sortedBy.sortedBy == "date_edited" ? "active" : ""}`} variant="link" onClick={() => sortTable("date_edited", "desc")}></Button>
                                        </div>
                                    </th>
                                    <th className="admin-table-title" width="10%">Edited by
                                        <div className="admin-table-sort-container">
                                            <Button className={`admin-table-sort admin-table-sort-asc ${sortedBy.sortOrder == "asc" && sortedBy.sortedBy == "edited_by" ? "active" : ""}`} variant="link" onClick={() => sortTable("edited_by", "asc")}></Button>
                                            <Button className={`admin-table-sort admin-table-sort-desc ${sortedBy.sortOrder == "desc" && sortedBy.sortedBy == "edited_by" ? "active" : ""}`} variant="link" onClick={() => sortTable("edited_by", "desc")}></Button>
                                        </div>
                                    </th>
                                    <th className="admin-table-title" width="5%">Status
                                        <div className="admin-table-sort-container">
                                            <Button className={`admin-table-sort admin-table-sort-asc ${sortedBy.sortOrder == "asc" && sortedBy.sortedBy == "status" ? "active" : ""}`} variant="link" onClick={() => sortTable("status", "asc")}></Button>
                                            <Button className={`admin-table-sort admin-table-sort-desc ${sortedBy.sortOrder == "desc" && sortedBy.sortedBy == "status" ? "active" : ""}`} variant="link" onClick={() => sortTable("status", "desc")}></Button>
                                        </div>
                                    </th>
                                    <th className="admin-table-title" width="5%">Availability
                                        <div className="admin-table-sort-container">
                                            <Button className={`admin-table-sort admin-table-sort-asc ${sortedBy.sortOrder == "asc" && sortedBy.sortedBy == "availability" ? "active" : ""}`} variant="link" onClick={() => sortTable("availability", "asc")}></Button>
                                            <Button className={`admin-table-sort admin-table-sort-desc ${sortedBy.sortOrder == "desc" && sortedBy.sortedBy == "availability" ? "active" : ""}`} variant="link" onClick={() => sortTable("availability", "desc")}></Button>
                                        </div>
                                    </th>
                                    <th className="admin-table-title" width="180px">Action</th>
                                    <th className="admin-table-title" width="180px">Send message</th>
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
                                                    {item.gender}
                                                </td>
                                                <td className="admin-table-col">
                                                    {item.age}
                                                </td>
                                                <td className="admin-table-col">
                                                    {item.height}
                                                </td>
                                                <td className="admin-table-col">
                                                    {item.waist}
                                                </td>
                                                <td className="admin-table-col">
                                                    {item.hips}
                                                </td>
                                                <td className="admin-table-col">
                                                    {item.shoe}
                                                </td>
                                                <td className="admin-table-col">
                                                    {item.first_name}
                                                </td>
                                                <td className="admin-table-col">
                                                    {item.last_name}
                                                </td>
                                                <td className="admin-table-col">
                                                    {item.subcategory}
                                                </td>
                                                <td className="admin-table-col">{item.mobile}</td>
                                                <td className="admin-table-col">
                                                    <Link href={"/"}>{item.email}</Link>
                                                </td>
                                                <td className="admin-table-col">
                                                    {item.nationality}
                                                </td>
                                                <td className="admin-table-col">
                                                    {item.date_registered}
                                                </td>
                                                <td className="admin-table-col">
                                                    {item.approved_by}
                                                </td>
                                                <td className="admin-table-col">
                                                    {item.date_edited}
                                                </td>
                                                <td className="admin-table-col">
                                                    {item.edited_by}
                                                </td>
                                                <td className="admin-table-col">
                                                    <Form.Check id={`viewed-${item.key}`} className="casting-table-viewed" defaultChecked={item.status == "1"} onChange={() => setViewed(item.key)} type="checkbox" label={item.status == "1" ? <Check/> : <Cross/>} />
                                                </td>
                                                <td className="admin-table-col">
                                                    <div className="talents-table-availability">
                                                        <span className={`talents-table-availability-item talents-table-availability-item-1 ${item.availability == 1 ? "active" : ""}`}><Check/></span>
                                                        <span className={`talents-table-availability-item talents-table-availability-item-0 ${item.availability == 0 ? "active" : ""}`}><Check/></span>
                                                        <span className={`talents-table-availability-item talents-table-availability-item--1 ${item.availability == -1 ? "active" : ""}`}><Check/></span>
                                                    </div>
                                                </td>
                                                <td className="admin-table-col">
                                                    <div className="talents-table-actions">
                                                        <Button variant="link"><Trash /></Button>
                                                        <Button variant="link"><Edit /></Button>
                                                    </div>
                                                </td>
                                                <td className="admin-table-col">
                                                    <div className="talents-table-actions">
                                                        <Button variant="link"><Send /></Button>
                                                    </div>
                                                </td>
                                            </tr>
                                })}
                            </tbody>
                        </Table>
                    </div>
                    <div className="talents-table-nav">
                        <p className="talents-table-nav-showing">Showing 1 to 10 of 50 entries</p>
                        <p className="talents-table-nav-display">Display</p>
                        <input className="talents-table-nav-counter" type="number" min={0} max={1000} step={5} placeholder="0"></input>
                        <Pagination style={{marginLeft: "30px"}}>
                            <Pagination.Prev className="talents-table-nav-pag"/>
                            <Pagination.Item className="talents-table-nav-pag-link">{1}</Pagination.Item>
                            <Pagination.Item>{2}</Pagination.Item>
                            <Pagination.Item>{3}</Pagination.Item>
                            <Pagination.Item>{4}</Pagination.Item>
                            <Pagination.Next className="talents-table-nav-pag" />
                        </Pagination>
                        </div>
                </Container>
            </div>
}
