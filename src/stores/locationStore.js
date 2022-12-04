import { writable } from "svelte/store";

export const countriesStore = writable([]);
export const citiesStore = writable([]);
export const countiesStore = writable([]);
export const locationSearchParamsStore = writable({
    'page' : 1,
    'pageSize': 24,
    'keyword' : '',
    'outsideTurkey': false,
})
