import React from 'react';
import {connectDB} from "@/util/database";
import { ObjectId } from 'mongodb';
import styles from './page.module.css'  

export default async function Detail(props){
    const client = await connectDB;
    const db=client.db("shopping")
    let result = await db.collection('post').findOne({_id: new ObjectId(props.params.id)})
    console.log(result);
    return (
        <div className={styles.detail}>
            <h3 className={styles.h3}>NOTICEPage</h3>
            <div className={styles.detailWrap}>
                <div className={styles.text}>
                    <h4 className={styles.title}>{result.title}</h4>
                    <p  className={styles.description}>{result.content}</p>
                </div>
            </div>

        </div>
    );
};