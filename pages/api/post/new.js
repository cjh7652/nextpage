import {connectDB} from "@/util/database"
export default async function handler(req, rsc){
   // console.log(req.body)
    if(req.method =='POST'){   
        if(req.body.title==''){
            return rsc.status(500).json('내용을 입력해 주세요')
        }

        const client = await connectDB;
        const db=client.db("shopping")
        
        let result = await db.collection('post').insertOne(req.body);
       return rsc.status(200).json('전송완료')/* .redirect('/notice') */
    }
    
}