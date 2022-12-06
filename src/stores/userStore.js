import { writable } from "svelte/store";
import { userModel, gendersModel } from '/src/models/userModel'
import { searchParamsModel } from '/src/models/searchModel'

export const userStore = writable(userModel)
export const teacherSearchParamsStore = writable(searchParamsModel)
export const teacherItemsStore = writable([])
export const teacherTotalStore = writable(0)
export const viewedTeacherStore = writable([])
export const gendersStore = writable(gendersModel)
