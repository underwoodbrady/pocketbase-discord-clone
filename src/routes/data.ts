import { writable, type Writable } from "svelte/store";

let messagesTemp = {
    
}

export const messages:Writable<any> = writable(0);
