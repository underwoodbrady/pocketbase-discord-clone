import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
    if(params.id){
        console.log(params);
        let community = "";
        return {
            community: community
        };
    }
	error(404, 'Not found');
}