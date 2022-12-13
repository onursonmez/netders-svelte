import { userStore } from '/src/stores/userStore'
import { get } from 'svelte/store'

export function isAuthenticated() {
    return !!get(userStore)
}

export function hasRole(role) {
    return get(userStore) && (get(userStore).roles).includes(role)
}
