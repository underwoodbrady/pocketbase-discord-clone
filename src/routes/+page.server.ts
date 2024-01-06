/** Checks whether a user is signed in through pocketbase */

export const load = ({locals}) => {
    if (locals.user){
        return{
            user:locals.user
        }
    }

    return{
        user:undefined
    }
}