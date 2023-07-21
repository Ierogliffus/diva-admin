"use client"
import { Button, Container, Form, Pagination, Table } from "react-bootstrap"
import "@/components/table/table.sass"
import "./castings.sass"
import Update from "@/assets/icons/update.svg"
import Prof from "@/assets/blog-image.jpg"
import Trash from "@/assets/icons/trash.svg"
import Edit from "@/assets/icons/edit.svg"
import View from "@/assets/icons/eye.svg"
import Send from "@/assets/icons/send.svg"
import Admin from "@/components/admin/admin"
import Link from "next/link"
import Image from "next/image"
import { Fragment, useState } from "react"
import { SortAdminTable } from "@/components/table/table"

export default function Castings() {
    const [sortedBy, setSortedBy] = useState({
        sortedBy: "id",
        sortOrder: "asc"
    })
    const [demoData, setDemoData] = useState([
        {
            id: 1,
            categories: ["Model Management", "Cast", "Influencers", "Activation & Promotion", "Entertainers", "Production"],
            casting: "CASTING CALL! || PHOTOSHOOT- FEMALE MODELS FOR JEWELRY SHOOT",
            description: "We are looking for models and talent for a jewelery photoshoot taking place in Dubai. Please apply...",
            applied: ["FM*6236728", "FM*6736233", "FM*992002", "NB78678", "TL6544", "LJ*67556", "HH*6666557", "FM*6236728", "FM*6736233", "FM*992002", "NB78678", "TL6544", "LJ*67556", "HH*6666557"],
            gender: "Female",
            fee: "TBD",
            casting_date: "2023-05-19"
        }, {
            id: 2,
            categories: ["Cast", "Influencers", "Activation & Promotion", "Production"],
            casting: "0CASTING CALL! || PHOTOSHOOT- FEMALE MODELS FOR JEWELRY SHOOT",
            description: "We are looking for models and talent for a jewelery photoshoot taking place in Dubai. Please apply...",
            applied: ["FM*6236728", "FM*6736233", "FM*992002", "NB78678", "TL6544", "LJ*67556", "HH*6666557", "FM*6236728", "FM*6736233", "FM*992002", "NB78678", "TL6544", "LJ*67556", "HH*6666557"],
            gender: "Female",
            fee: "TBD",
            casting_date: "2023-05-04"
        }, {
            id: 3,
            categories: ["Model Management", "Entertainers", "Production"],
            casting: "1CASTING CALL! || PHOTOSHOOT- FEMALE MODELS FOR JEWELRY SHOOT",
            description: "We are looking for models and talent for a jewelery photoshoot taking place in Dubai. Please apply...",
            applied: ["FM*6236728", "FM*6736233", "FM*992002", "NB78678", "TL6544", "LJ*67556", "HH*6666557", "FM*6236728", "FM*6736233", "FM*992002", "NB78678", "TL6544", "LJ*67556", "HH*6666557"],
            gender: "Female",
            fee: "TBD",
            casting_date: "2023-05-19"
        }, {
            id: 4,
            categories: ["Activation & Promotion", "Entertainers", "Production"],
            casting: "2CASTING CALL! || PHOTOSHOOT- FEMALE MODELS FOR JEWELRY SHOOT",
            description: "We are looking for models and talent for a jewelery photoshoot taking place in Dubai. Please apply...",
            applied: ["FM*6236728", "FM*6736233", "FM*992002", "NB78678", "TL6544", "LJ*67556", "HH*6666557", "FM*6236728", "FM*6736233", "FM*992002", "NB78678", "TL6544", "LJ*67556", "HH*6666557"],
            gender: "Female",
            fee: "TBD",
            casting_date: "2023-06-19"
        }, {
            id: 5,
            categories: ["Model Management", "Cast", "Entertainers", "Production"],
            casting: "CASTING CALL! || PHOTOSHOOT- FEMALE MODELS FOR JEWELRY SHOOT",
            description: "We are looking for models and talent for a jewelery photoshoot taking place in Dubai. Please apply...",
            applied: ["FM*6236728", "FM*6736233", "FM*992002", "NB78678", "TL6544", "LJ*67556", "HH*6666557", "FM*6236728", "FM*6736233", "FM*992002", "NB78678", "TL6544", "LJ*67556", "HH*6666557"],
            gender: "Female",
            fee: "TBD",
            casting_date: "2023-05-20"
        },
    ])
    const sortTable = (sortBy, sortOrder) => {
        setDemoData(SortAdminTable(sortBy, sortOrder, demoData))
        setSortedBy({sortedBy: sortBy, sortOrder})
    }
    return  <div className="castings" layout="md">
                <Container fluid>
                    <Admin/>
                    <h1 className="castings-title">View Job Castings</h1>
                    <div className="castings-button">
                        <Button className="castings-button-add">+ Create new castings</Button>
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
                                        <Button className={`admin-table-sort admin-table-sort-asc ${sortedBy.sortOrder == "asc" && sortedBy.sortedBy == "id" ? "active" : ""}`} variant="link" onClick={() => sortTable("id", "asc")}></Button>
                                        <Button className={`admin-table-sort admin-table-sort-desc ${sortedBy.sortOrder == "desc" && sortedBy.sortedBy == "id" ? "active" : ""}`} variant="link" onClick={() => sortTable("id", "desc")}></Button>
                                    </div>
                                </th>
                                <th className="admin-table-title" width="10%">Image</th>
                                <th className="admin-table-title" width="20%">Category</th>
                                <th className="admin-table-title" width="12.5%">Casting
                                    <div className="admin-table-sort-container">
                                        <Button className={`admin-table-sort admin-table-sort-asc ${sortedBy.sortOrder == "asc" && sortedBy.sortedBy == "casting" ? "active" : ""}`} variant="link" onClick={() => sortTable("casting", "asc")}></Button>
                                        <Button className={`admin-table-sort admin-table-sort-desc ${sortedBy.sortOrder == "desc" && sortedBy.sortedBy == "casting" ? "active" : ""}`} variant="link" onClick={() => sortTable("casting", "desc")}></Button>
                                    </div>
                                </th>
                                <th className="admin-table-title" width="15%">Description
                                    <div className="admin-table-sort-container">
                                        <Button className={`admin-table-sort admin-table-sort-asc ${sortedBy.sortOrder == "asc" && sortedBy.sortedBy == "description" ? "active" : ""}`} variant="link" onClick={() => sortTable("description", "asc")}></Button>
                                        <Button className={`admin-table-sort admin-table-sort-desc ${sortedBy.sortOrder == "desc" && sortedBy.sortedBy == "description" ? "active" : ""}`} variant="link" onClick={() => sortTable("description", "desc")}></Button>
                                    </div>
                                </th>
                                <th className="admin-table-title" width="15%">Applied</th>
                                <th className="admin-table-title" width="110px">Gender
                                    <div className="admin-table-sort-container">
                                        <Button className={`admin-table-sort admin-table-sort-asc ${sortedBy.sortOrder == "asc" && sortedBy.sortedBy == "gender" ? "active" : ""}`} variant="link" onClick={() => sortTable("gender", "asc")}></Button>
                                        <Button className={`admin-table-sort admin-table-sort-desc ${sortedBy.sortOrder == "desc" && sortedBy.sortedBy == "gender" ? "active" : ""}`} variant="link" onClick={() => sortTable("gender", "desc")}></Button>
                                    </div>
                                </th>
                                <th className="admin-table-title" width="90px">Fee
                                    <div className="admin-table-sort-container">
                                        <Button className={`admin-table-sort admin-table-sort-asc ${sortedBy.sortOrder == "asc" && sortedBy.sortedBy == "fee" ? "active" : ""}`} variant="link" onClick={() => sortTable("fee", "asc")}></Button>
                                        <Button className={`admin-table-sort admin-table-sort-desc ${sortedBy.sortOrder == "desc" && sortedBy.sortedBy == "fee" ? "active" : ""}`} variant="link" onClick={() => sortTable("fee", "desc")}></Button>
                                    </div>
                                </th>
                                <th className="admin-table-title" width="140px">Casting date
                                    <div className="admin-table-sort-container">
                                        <Button className={`admin-table-sort admin-table-sort-asc ${sortedBy.sortOrder == "asc" && sortedBy.sortedBy == "casting_date" ? "active" : ""}`} variant="link" onClick={() => sortTable("casting_date", "asc")}></Button>
                                        <Button className={`admin-table-sort admin-table-sort-desc ${sortedBy.sortOrder == "desc" && sortedBy.sortedBy == "casting_date" ? "active" : ""}`} variant="link" onClick={() => sortTable("casting_date", "desc")}></Button>
                                    </div>
                                </th>
                                <th className="admin-table-title" width="180px">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {demoData.length > 0 && demoData.map(item => {
                                return  <tr>
                                            <th className="admin-table-checkbox">
                                                <Form.Check aria-label="option 1" />
                                            </th>
                                            <td className="admin-table-col">{item.id}</td>
                                            <td className="admin-table-col"><Image src={Prof}/></td>
                                            <td className="admin-table-col">
                                                <div className="castings-table-categories">
                                                    {item.categories.length > 0 && item.categories.map(category => {
                                                        return <span className="castings-table-category">{category}</span>
                                                    })}
                                                </div>
                                            </td>
                                            <td className="admin-table-col">
                                                <Link href={"/"}>{item.casting}</Link>
                                            </td>
                                            <td className="admin-table-col">
                                                {item.description}
                                            </td>
                                            <td className="admin-table-col">
                                                <div className="castings-table-applied">
                                                    {item.applied.length > 0 && item.applied.map((apply, key) => {
                                                        return <Fragment><Link href={"/"}>{apply}</Link>{key != item.applied.length - 1 ? "," : ""}</Fragment>
                                                    })}
                                                </div> 
                                            </td>
                                            <td className="admin-table-col">{item.gender}</td>
                                            <td className="admin-table-col">{item.fee}</td>
                                            <td className="admin-table-col">
                                                <span className="castings-table-date">{item.casting_date}</span>
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
