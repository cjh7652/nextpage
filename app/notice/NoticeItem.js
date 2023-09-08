'use client' //검색 노출 이점이 없음 여기엔 db를 직접 조작하는것은 사용할수 없음

import Link from "next/link"


export default function NoticeItem({result}){
    const currentDate = new Date(); // 현재 시간 정보 생성
    const formattedDate = `${currentDate.getFullYear()}-${(
        currentDate.getMonth() + 1
    ).toString()
    .padStart(2, "0")}-${currentDate
    .getDate()
    .toString()
    .padStart(2, "0")}`;
    return (
        <>
            {
                result.map((a, i) =>{
                    return(
                        <tr  className="notice-item" key={i}>
                            <td>{i+1}</td>
                            <td> <Link prefetch={false} href={'/notice_detail/'+result[i]._id.toString()}>{result[i].title} </Link></td>
                            <td>{formattedDate}</td>
                            <td><Link href={'/edit/'+result[i]._id.toString()}> <button>수정</button> </Link></td>
                            <td>
                                <span onClick={(e) => { fetch('/api/post/delete', {method : 'DELETE', body : result[i]._id})
                                    .then((r)=>{
                                        if(r.status == 200) {
                                        return r.json()
                                        } 
                                    })
                                    .then((result)=>{ 
                                        //성공시 실행할코드
                                        const rowElement = e.target.closest("tr");
                                        rowElement.style.opacity=0;
                                        setTimeout(()=>{
                                            const rowElement = e.target.closest("tr");
                                            rowElement.style.display='none';
                                        },1000)
                                    })
                                    }}>  <button>삭제</button></span>
                            </td>
                        </tr>
                    )
                })
            }
        </>
    )
}