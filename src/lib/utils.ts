const {randomBytes} = await import('node:crypto');

//TODO: Create custom username generator
export const generateUsername = (name:string) => {
    const id = randomBytes(2).toString('hex');
    return `${name.slice(0,3)}${id}}`;
}