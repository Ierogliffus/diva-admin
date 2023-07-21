"use client"
import Image from "next/image"
import Profile from "@/assets/faq-profile.jpg"
import "./admin.sass"
export default function Admin() {
    return  <div className="admin-profile">
                <div className="admin-profile-circle"></div>
                <h6 className="admin-profile-type">Superadmin</h6>
                <h6 className="admin-profile-name">Super User</h6>
                <Image className="admin-profile-photo" src={Profile} />
            </div>
}