import { ObjectId } from "mongoose";


export default class TodoDto {
    title: string
    desc: string
    completed: boolean
}