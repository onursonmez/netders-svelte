import { writable } from "svelte/store";

export const subjectsStore = writable([])
export const levelsStore = writable([])
export const lessonTypesStore = writable([
    {id: 1, title: "Yüz Yüze"},
    {id: 2, title: "Uzaktan (Webcam)"},
])
