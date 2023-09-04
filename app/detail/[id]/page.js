import React from 'react';
import {connectDB} from "@/util/database";
import { ObjectId } from 'mongodb';
import styles from './page.module.css'  

export default async function Detail(props){
    const client = await connectDB;
    const db=client.db("shopping")
    let result = await db.collection('new').findOne({_id: new ObjectId(props.params.id)})
    console.log(result);
    return (
        <div className={styles.detail}>
            <h3 className={styles.h3}>상세페이지</h3>
            <div className={styles.detailWrap}>
                <div className={styles.imgwrap}><img src={result.image} alt={result.title} className={styles.image}/></div>
                <div className={styles.text}>
                    <h4 className={styles.title}>{result.title}</h4>
                    <p  className={styles.description}>{result.description}</p>
                    <p  className={styles.price}> <span className={styles.span} >판매가</span>{result.price}</p>
                    <p  className={styles.card}><span className={styles.span}>할부</span>{result.card}</p>
                    <p  className={styles.delivery}><span className={styles.span}>배송비</span>만원이상 무료배송(사이즈교환1회무료)</p>
                    <p  className={styles.color}><span className={styles.span}>색상</span><input type="text" /></p>
                    <p  className={styles.size}><span className={styles.span}>사이즈</span><input type="text" /></p> 
                </div>
            </div>

        </div>
    );
};

