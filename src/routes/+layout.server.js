/** @type {import('./$types').LayoutServerLoad} */
export const load = ({ locals }) => {
    return {
        user: locals.user
    }
}
