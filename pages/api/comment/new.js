import {connectDB} from "@/util/database"
import {getServerSession} from "next-auth"  
import {ObjectId} from 'mongodb'
import { authOptions } from "../auth/[...nextauth]"  
export default async function handler(req, res){
    if(req.method =='POST'){
        let session=await getServerSession(req, res, authOptions)
        console.log(req.body)
        req.body =JSON.parse(req.body)
        console.log(session.user.email) 
        let dbs={
            content: req.body.comment,
            parent:new ObjectId(req.body._id),
            author: session.user.email
        }
        const db= (await connectDB).db('shopping')
        let result=await db.collection('comment').insertOne(dbs) 
        res.status(200).json('저장완료') 
    }
}