import { connectDB } from "@/util/database";
import bcrypt from "bcrypt";//암호화 npm install bcrypt

export default async function handler(req, res) {
  if (req.method === "POST") {
      const hash = await bcrypt.hash(req.body.password, 10);//비번 암호화해서 저장
      console.log(hash)
      console.log(req.body)
      
      req.body.password = hash;

      let db = (await connectDB).db('shopping');
      await db.collection('user_cred').insertOne(req.body);
      res.status(200).json('성공');
  }
}; 