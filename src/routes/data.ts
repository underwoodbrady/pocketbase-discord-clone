import { writable, type Writable } from "svelte/store";

let messagesTemp = [
    {
        username: "awyllie",
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
        username: "otheruser",
        initials: "OU",
        messages: [
            {
                user: "otheruser",
                initials: "OU",
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

export const messagesWritable:Writable<any> = writable(messagesTemp);
