"use client"
import { Button, Dropdown, Form } from "react-bootstrap"
import "./markdown.sass"
import { Fragment } from "react";
import Eye from "@/assets/icons/eye.svg"
import ImgIco from "@/assets/icons/image.svg"
import LinkIco from "@/assets/icons/link.svg"
import ListBull from "@/assets/icons/list_bulleted.svg"
import ListNumb from "@/assets/icons/list_numbered.svg"
import TableIco from "@/assets/icons/table.svg"

export default function ParsedMarkdown({markdown}) {
    return <div className="parsed-markdown" dangerouslySetInnerHTML={{__html: markdown}}></div>
}

export function InputMarkdown({form}) {
    return  <div className="input-markdown">
                <div className="input-markdown-panel">
                    <Dropdown>
                        <Button variant="link">H1</Button>
                        <Dropdown.Toggle split variant="link" />
                        <Dropdown.Menu align={"end"}>
                            {(() => {
                                let title_tags = []
                                for (let i = 2; i < 7; i++) {
                                    title_tags.push(<Dropdown.Item as={Button} variant="link">H{i}</Dropdown.Item>)
                                }
                                return title_tags
                            })()}
                            
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown>
                        <Button variant="link"><b>Bold</b></Button>
                        <Dropdown.Toggle split variant="link" />
                        <Dropdown.Menu align={"end"}>
                            <Dropdown.Item as={Button} variant="link"><i>Italic</i></Dropdown.Item>
                            <Dropdown.Item as={Button} variant="link"><s>Strikethrough</s></Dropdown.Item>
                            <Dropdown.Item as={Button} variant="link">Blockquote</Dropdown.Item>
                            <Dropdown.Item as={Button} variant="link">Inline code</Dropdown.Item>
                            <Dropdown.Item as={Button} variant="link">Code block</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Button variant="link"><ListBull /></Button>
                    <Button variant="link"><ListNumb /></Button>
                    <Button variant="link"><LinkIco /></Button>
                    <Button variant="link"><ImgIco /></Button>
                    <Button variant="link"><TableIco /></Button>
                    <Button variant="link"><Eye /></Button>
                </div>
                <Form.Control className="admin-form-control" as="textarea" {...form}/>
            </div>
}