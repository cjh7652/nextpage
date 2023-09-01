/* import { connectDB } from "@/util/database";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter"; */
import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
/* import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from 'bcrypt'; */

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: '5a2325b1c8cc3d6c79bc',
      clientSecret: '86cee5d56cd580e4c50b542a6b1791df0f29c3f5',
    }),
  ],
  //CredentialsProvider()를 사용하면  jwt만 사용가능
 
};
export default NextAuth(authOptions);