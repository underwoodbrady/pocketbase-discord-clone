import { generateUsername } from '$lib/utils.js';
import { error, redirect } from '@sveltejs/kit';

export const actions = {
    login: async ({ locals, request }) => {
        const body = Object.fromEntries(await request.formData());

        try {
            await locals.pb.collection('users').authWithPassword(body.username, body.password);
            if(!locals.pb?.authStore?.model?.verified){
                locals.pb.authStore.clear();
                return {
                    notVerified: true
                };
            }
        }
        catch(err){ 
            throw error(400, `${err}`);
        }

        throw redirect(303, "/");
    }
};