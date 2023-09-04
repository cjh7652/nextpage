/* import Image from 'next/image'*/
import {connectDB} from "@/util/database";
import MovieSwiper from "@/components/MovieSwiper"
import MovieSwiper1 from "@/components/MovieSwiper1"


import styles from './page.module.css'  
import Link from "next/link";

export default async function Home() {
    const client = await connectDB;
    const db=client.db("shopping")
    let result = await db.collection('new').find().toArray();
    console.log(result);
  return (
    <div>
      <div className={styles.banner}>
         <MovieSwiper />
      </div>
      <div className={styles.banner1}>
        <MovieSwiper1 />
      </div>
      <div className="new-arrival">
        <h2>NEW ARRIVAL</h2>
        <p>월,수,금 오후 1시 신상 업데이트</p>

        <div className="new-wrap">
         {
            result.map((a, i) => 
             
                <div className="new-card">
                    <Link href={'/detail/' + result[i]._id.toString()}>
                    <img src={result[i].image} alt={result[i].title} /> 
                      <div className="card-box">
                      <h3 className="title">{result[i].title}</h3>
                      <p className="price">{result[i].price}</p>
                      <p className="description">
                      {result[i].description}
                      </p>
                      </div>
                    </Link>
                </div>
          
            )
          }
        </div>
      </div>
    </div>
  )
}
