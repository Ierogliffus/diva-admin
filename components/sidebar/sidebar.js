"use client";

import { Fragment } from "react";
import "./sidebar.sass";
import Logo from "../../assets/icons/logo-diva.png";
import Link from "next/link";
import Register from "../../assets/icons/register.svg";
import Talents from "../../assets/icons/talents.svg";
import Clients from "../../assets/icons/clients.svg";
import Search from "../../assets/icons/search.svg";
import Booking from "../../assets/icons/booking.svg";
import Content from "../../assets/icons/content.svg";
import Post from "../../assets/icons/post-blog.svg";
import Faq from "../../assets/icons/faq.svg";
import Awards from "../../assets/icons/awards.svg";
import Dashboard from "../../assets/icons/dashboard.svg";
import It from "../../assets/icons/it-users.svg";
import Image from "next/image";
import { Accordion } from "react-bootstrap";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <Image src={Logo} />
      </div>
      <div className="sidebar-booking">
        <h6 className="sidebar-booking-title">Booking management</h6>
        <Link className="sidebar-booking-item" href={"/"}>
          <Register />
          Register
        </Link>
        <Link className="sidebar-booking-item" href={"/"}>
          <Talents />
          Talents
        </Link>
        <Accordion
          className="sidebar-accordion"
          defaultActiveKey={["0"]}
          alwaysOpen
        >
          <Accordion.Item className="sidebar-accordion-item" eventKey="0">
            <Accordion.Header className="sidebar-accordion-header">
              {" "}
              <Link href={"/"}>
                <Search />
                Casting Call
              </Link>
            </Accordion.Header>
            <Accordion.Body className="sidebar-accordion-body">
              <ul>
                <li>
                  <Link href={"/"}>View Job Casting</Link>
                </li>
                <li>
                  <Link href={"/"}>Casting User</Link>
                </li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item className="sidebar-accordion-item" eventKey="1">
            <Accordion.Header className="sidebar-accordion-header">
              <Link href={"/"}>
                <Booking />
                Booking
              </Link>
            </Accordion.Header>
            <Accordion.Body className="sidebar-accordion-body">
              <ul>
                <li>
                  <Link href={"/"}>Booking Form</Link>
                </li>
                <li>
                  <Link href={"/"}>Booking Status</Link>
                </li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <Link className="sidebar-booking-item" href={"/"}>
          <Clients />
          Clients
        </Link>
      </div>
      <div className="sidebar-booking sidebar-booking-second">
        <h6 className="sidebar-booking-title">Website Management</h6>
        <Link className="sidebar-booking-item" href={"/"}>
          <Content />
          Content
        </Link>
        <Link className="sidebar-booking-item" href={"/blog"}>
          <Post />
          Post Blog
        </Link>
        <Link className="sidebar-booking-item" href={"/faq"}>
          <Faq />
          FAQ
        </Link>
        <Link className="sidebar-booking-item" href={"/faq/a"}>
          <Awards />
          Awards
        </Link>
      </div>
      <div className="sidebar-booking sidebar-booking-third">
        <h6 className="sidebar-booking-title">IT</h6>
        <Link className="sidebar-booking-item" href={"/"}>
          <Dashboard />
          Dashboard
        </Link>
        <Link className="sidebar-booking-item" href={"/"}>
          <It />
          IT Users
        </Link>
      </div>
    </div>
  );
}
