import { connectDB } from "@/util/database.js"
import { ObjectId } from "mongodb";

export default async function handler(req, rsc){
    if(req.method == 'POST'){
      /*   console.log(요청.body)  확인하고 싶으면 밑에 내용 주석후 확인 */
        let rebody={
            title : req.body.title, content : req.body.content
        }
        const client = await connectDB;
        const db=client.db("shopping")
        let result = await db.collection('post').updateOne(
            {_id : new ObjectId(req.body._id)}, 
            { $set : rebody} 
          );
          console.log(result)
      
          rsc.redirect(302, '/notice')
    }
}