import fetch from "node-fetch"
import { join } from 'path'
import dotenv from 'dotenv'
dotenv.config({path: join(process.cwd(), '.env')})

const dictionary = {
    graphObjectID: process.env.PETZL_PAGE_ID,
    accessToken: process.env.ACCESS_TOKEN
}

/*function(node:string, fields: array of strings) */
export const facebookCallAPI = async (node, fields) => {
    let size = 0
    const url = `https://graph.facebook.com/${dictionary.graphObjectID}/${node}?metric=${fields.toString()}&access_token=${dictionary.accessToken}`
    try {
        const callAPI = await fetch(url)
        callAPI.body.on('data', chunk => {
            size += chunk.length
        })
        const response = await callAPI.text()
        const body = JSON.parse(response)
        console.log(`${size} bytes downloaded`)
        return body.data.map(el => el)
    } catch (error) {
        console.error(error)
    }
}