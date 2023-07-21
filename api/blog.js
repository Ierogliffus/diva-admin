import { getCookie } from "./global"

export async function getData() {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACK_URL}admin-blog`, {
        method: "GET",
        headers: new Headers({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${getCookie('diva-admin')}`
        }),
    }).then(res => res.json()).then(data => {
        return data
    }).catch(error => error)
    if (response.success)
        return response.data 
    else 
        return []
}
export async function createItem(data) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACK_URL}admin-blog/create`, {
        method: "POST",
        headers: new Headers({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${getCookie('diva-admin')}`
        }),
        body: JSON.stringify(data)
    }).then(res => res.json()).then(data => {
        return data
    }).catch(error => error)
    if (response.success)
        return response.data
    else 
        return {}
}
export async function getItemData(id) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACK_URL}admin-blog/${id}`, {
        method: "GET",
        headers: new Headers({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${getCookie('diva-admin')}`
        }),
    }).then(res => res.json()).then(data => {
        return data
    }).catch(error => error)
    if (response.success)
        return response.data 
    else 
        return {}
}
export async function updateItem(data) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACK_URL}admin-blog/update`, {
        method: "PUT",
        headers: new Headers({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${getCookie('diva-admin')}`
        }),
        body: JSON.stringify(data)
    }).then(res => res.json()).then(data => {
        return data
    }).catch(error => error)
    if (response.success)
        return response.data
    else 
        return {}
}
export async function removeItem(id) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACK_URL}admin-blog/${id}`, {
        method: "DELETE",
        headers: new Headers({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${getCookie('diva-admin')}`
        }),
    }).then(res => res.json()).then(data => {
        return data
    }).catch(error => error)

    return response.success
}