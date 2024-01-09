import { generateUsername } from '$lib/utils.js';
import { error, redirect } from '@sveltejs/kit';

export const actions = {
    signup: async ({ locals, request }) => {
        const body = Object.fromEntries(await request.formData());

        const data = {
            ...body,
            passwordConfirm: body.password
        };
        try {
            await locals.pb.collection('users').create(data);
            await locals.pb.collection('users').requestVerification(body.email);
        }
        catch(err){ 
            throw error(400, `${err}`);
        }

        throw redirect(303, "/login");
    }
};