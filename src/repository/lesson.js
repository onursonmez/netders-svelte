import { env } from '$env/dynamic/public'
import { subjectsStore, lessonSearchParamsStore } from '/src/stores/lessonStore'
import { get } from 'svelte/store'
import { responseService } from "/src/utils/responseService"

export async function getSubjects()
{
    const response = await fetch(import.meta.env.VITE_API_URL + '/lesson/subjects',
        {
            headers:{
                'Content-Type': 'application/json',
            },
            method: 'GET',
        },
    );

    const result = await response.json()

    return responseService(result)
}

export async function getLevels(params = [])
{
    const response = await fetch(import.meta.env.VITE_API_URL + '/lesson/levels/' + params.subjectId,
        {
            headers:{
                'Content-Type': 'application/json',
            },
            method: 'GET',
        },
    );

    const result = await response.json()

    return responseService(result)
}

export async function getCategories()
{
    const response = await fetch(import.meta.env.VITE_API_URL + '/category/list',
        {
            headers:{
                'Content-Type': 'application/json',
            },
            method: 'GET',
        },
    );

    const result = await response.json()

    return responseService(result)
}

export async function getLevelsByCategory(params = [])
{
    const response = await fetch(import.meta.env.VITE_API_URL + '/category/levels/' + params.categoryId,
        {
            headers:{
                'Content-Type': 'application/json',
            },
            method: 'GET',
        },
    );

    const result = await response.json()

    return responseService(result)
}

export async function searchLesson(params = {})
{
    const searchParams = Object.entries(params).length > 0 ? params : get(lessonSearchParamsStore)

    const result = await fetch(import.meta.env.VITE_API_URL + '/lesson/search',
        {
            headers:{
                'Content-Type': 'application/json',
            },
            method: 'POST',
            body: JSON.stringify({
                'page' : searchParams?.page,
                'pageSize' : searchParams?.pageSize,
                'keyword' : searchParams?.keyword,
            })
        },
    );

    const body = await result.json()

    return body.result
}
