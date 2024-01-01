import { writable, type Writable } from "svelte/store";

//Use userids to store initials, username, photo
//pull out from pocketbase so can reuse through displaying messages

// let d = {
//     "123":{
//         user:"awyllie",
//         initials: "AW",
//         pic: "...",
//     }
// }

let messagesTemp = [
    {
        topic: "awyllie",
        initials: "AW",
        messages: [
            {
                user: "awyllie",
                initials: "AW",
                message: "Get on rl",
                time: "12:45pm",
            },
            {
                user: "brades6",
                initials: "BU",
                message: "Bet",
                time: "12:47pm",
            },
            {
                user:"brades6",
                initials: "BU",
                startedCall: true,
                time: "12:50pm",
                length: "2 hours"
            }
        ]
    },
    {
        topic: "otheruser",
        initials: "OU",
        messages: [
            {
                user: "otheruser",
                initials: "OU",
                message: "Hey can you hop on a call rq?",
                time: "12:45pm",
            },
            {
                user: "brades6",
                initials: "BU",
                message: "Sure thing",
                time: "12:47pm",
            },
            {
                user:"brades6",
                initials: "BU",
                startedCall: true,
                time: "12:50pm",
                length: "20 minutes"
            },
            {
                user: "otheruser",
                initials: "OU",
                message: "Yoo",
                time: "5:45pm",
            },
            {
                user: "otheruser",
                initials: "OU",
                message: "Get on",
                time: "5:45pm",
            },
            {
                user: "brades6",
                initials: "BU",
                message: "Bet",
                time: "6:47pm",
            },
        ]
    }
]

let serversTemp = [
    {
        name:"Server #1",
        color:"#8C2022",
        channels: [
            {
                title:"Rules"
            },
            {
                topic: "rules",
                messages: [
    
                    {
                        user: "brades6",
                        initials: "BU",
                        message: "Rule 1",
                        time: "12:47pm",
                    },
                    {
                        user: "brades6",
                        initials: "BU",
                        message: "Don't do anything I wouldn't do",
                        time: "6:47pm",
                    },
                ]
            },
            {
                title:"General"
            },
            {
                topic: "general",
                messages: [

                ]
            },
            {
                topic: "valorant",
                messages: [

                ]
            },
            {
                topic: "memes",
                messages: [

                ]
            },
            {
                title:"Voice"
            },
            {
                topic: "voice1",
                voice: true,
                messages: [

                ]
            },
            {
                topic: "admin",
                voice:true,
                messages: [

                ]
            },

        ],
        users: [
            {
                role:"Admin",
                users:[]
            },
            {
                role:"Active",
                users:[]
            },
            {
                role:"General",
                users:[]
            },
            {
                role:"Offline",
                users:[]
            },
        ],

    }
]

//This is all temporary
export const messagesWritable:Writable<any> = writable(messagesTemp);
export const serversWritable:Writable<any> = writable(serversTemp);
