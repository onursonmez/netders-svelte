import { writable } from "svelte/store";

export const teacherSearchParamsStore = writable({
    'page' : 1,
    'pageSize': 12,
    'keyword' : '',
    'budget': '',
    'cityObject': undefined,
    'countyObject': undefined,
    'subjectObject': undefined,
    'levelObject': undefined,
    'lessonTypeObject': undefined,
    'genderObject': undefined,
})
export const teacherItemsStore = writable([])
export const teacherTotalStore = writable(0)
export const teacherGendersStore = writable([
    {id: 1, title: "Erkek"},
    {id: 2, title: "Kadın"},
])
