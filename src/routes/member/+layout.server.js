import { fail, redirect } from '@sveltejs/kit';
import * as api from '$lib/api';

export async function load({ locals }) {
    if (!locals.auth) throw redirect(302, '/auth/login');

    let photoApprovalResponse, userApprovalResponse, approvalUser, approvalUserPrices, approvalUserLocations

    if(locals.auth.roles.includes('ROLE_SUPER_ADMIN')){
        photoApprovalResponse = await api.get('member/photo/approval', locals.auth?.token)
        userApprovalResponse = await api.get('member/user/approval', locals.auth?.token)
        if(userApprovalResponse.result?.uuid){
            approvalUser = await api.get('user/detail?uuid=' + userApprovalResponse.result?.uuid, locals.auth?.token)
            approvalUserPrices = await api.get('price/' + approvalUser.result.uuid, locals.auth?.token)
            approvalUserLocations = await api.get('location/' + approvalUser.result.uuid, locals.auth?.token)
        }
    }

    return {
        userApproval : userApprovalResponse?.result,
        photoApproval : photoApprovalResponse?.result,
        approvalUser : approvalUser?.result,
        approvalUserPrices : approvalUserPrices?.result,
        approvalUserLocations : approvalUserLocations?.result,
    }
}
