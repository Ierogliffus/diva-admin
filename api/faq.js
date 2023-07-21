import { getCookie } from "./global"

export async function getData() {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACK_URL}admin-faq/`, {
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
export async function getItemData(id) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACK_URL}admin-faq/${id}`, {
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
export async function updateItem(id, data) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACK_URL}admin-faq/faq/update`, {
        method: "PUT",
        headers: new Headers({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${getCookie('diva-admin')}`
        }),
        body: JSON.stringify({
            ...data,
            id
        })
    }).then(res => res.json()).then(data => {
        return data
    }).catch(error => error)

    return response.success
}
export async function createItem(data) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACK_URL}admin-faq/faq/create`, {
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
export async function removeItem(id) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACK_URL}admin-faq/${id}`, {
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