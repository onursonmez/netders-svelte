// @ts-nocheck
/** @param {Parameters<import('./$types').LayoutServerLoad>[0]} event */
export const load = ({ locals }) => {
    return {
        user: locals.user
    }
}
