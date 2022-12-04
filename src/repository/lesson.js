import { env } from '$env/dynamic/public'
import { subjectsStore, lessonSearchParamsStore } from '/src/stores/lessonStore'
import { get } from 'svelte/store'

export async function getSubjects()
{
    const result = await fetch(import.meta.env.VITE_API_URL + 'lesson/subjects',
        {
            headers:{
                'Content-Type': 'application/json',
            },
            method: 'GET',
        },
    );

    const body = await result.json()

    subjectsStore.set(body.result.items)

    return body.result
}

export async function getLevels(params = [])
{
    const result = await fetch(import.meta.env.VITE_API_URL + 'lesson/levels/' + params.subjectId,
        {
            headers:{
                'Content-Type': 'application/json',
            },
            method: 'GET',
        },
    );

    const body = await result.json()
    return body.result
}

export async function searchLesson(params = {})
{
    const searchParams = Object.entries(params).length > 0 ? params : get(lessonSearchParamsStore)

    const result = await fetch(import.meta.env.VITE_API_URL + 'lesson/search',
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
