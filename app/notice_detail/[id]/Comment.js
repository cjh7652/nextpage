'use client'
import {useState, useEffect} from "react"
export default function Comment(props){
    let [comment, setComment] =useState('')
    let [data, setData] =useState([])

    useEffect(() =>{
        fetch('/api/comment/list?id=' + props._id).then(r => r.json())
        .then((result)=>{
            console.log(result)
            setData(result)
        })
    },[])
    return (
        <div className="commit">
            <br />
            <hr />
            <br />
             {
                data.length > 0 ? (
                    data.map((a, i) => <p className="commentRe" key={i}>{a.content}</p>)
                ) : (
                    "로딩중"
                )
            }  
            <input className="input" onChange={(e) => {setComment(e.target.value)}}/>
            <button className="button" onClick={()=>{
               // console.log(comment)
                fetch('/api/comment/new', {method: 'POST', body:JSON.stringify({comment:comment, _id:props._id})})
                
            }}>댓글전송</button>
        </div>
    )
}