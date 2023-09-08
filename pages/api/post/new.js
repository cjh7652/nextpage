import {connectDB} from "@/util/database"
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";
export default async function handler(req, res){
    let session= await getServerSession(req, res, authOptions)
  /*   console.log(session.user.email) */

    if(session){
        req.body.author = session.user.email
    }
    console.log(req.body)
    if(req.method =='POST'){   
        if(req.body.title==''){
            return res.status(500).json('내용을 입력해 주세요')
        }

        const client = await connectDB;
        const db=client.db("shopping")
        
        let result = await db.collection('post').insertOne(req.body);
       return res.status(200).json('전송완료')/* .redirect('/notice') */
    }
    
}