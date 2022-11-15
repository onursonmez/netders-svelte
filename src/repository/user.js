import { get } from 'svelte/store'
import { teacherSearchParamsStore, teacherItemsStore, teacherTotalStore } from '/src/stores/userStore'

export async function getUsers()
{
    const searchParams = get(teacherSearchParamsStore)

    const result = await fetch(import.meta.env.VITE_API_URL + 'user/teachers',
        {
            headers:{
                'Content-Type': 'application/json',
            },
            method: 'POST',
            body: JSON.stringify({
                'page' : searchParams.page,
                'pageSize' : searchParams.pageSize,
                'keyword' : searchParams.keyword,
                'budget' : searchParams.budget,
                'cityId' : searchParams.cityObject?.id,
                'countyId' : searchParams.countyObject?.id,
                'subjectId' : searchParams.subjectObject?.id,
                'levelId' : searchParams.levelObject?.id,
                'lessonTypeId' : searchParams.lessonTypeObject?.id,
                'genderId' : searchParams.genderObject?.id,
            })
        },
    );

    const body = await result.json()

    teacherItemsStore.set(body.result.items)
    teacherTotalStore.set(body.result.total)

    return body.result
}

export async function login(email, password)
{
    const response = await fetch(import.meta.env.VITE_API_URL + 'user/login',
        {
            headers:{
                'Content-Type': 'application/json',
            },
            method: 'POST',
            body: JSON.stringify({
                'email' : email,
                'password' : password,
            })
        },
    );

    const body = await response.json()

    return body.result
}

export async function photo(username)
{
    const response = await fetch(import.meta.env.VITE_API_URL + 'user/photo/' + username,
        {
            headers:{
                'Content-Type': 'application/json',
            },
            method: 'GET',
        },
    );

    const body = await response.json()

    return body.result
}
