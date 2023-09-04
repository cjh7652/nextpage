import {connectDB} from "@/util/database";

import NoticeItem from "./NoticeItem";
import Link from "next/link";

export const dynamic='force-dynamic'  /* 항상 다이나닉하게 렌더링해서 보여줌  */
/* 기본적으로 빌드하면 빌드된 부분만 나타나는데 그것을 해결하기 위한것임 */
export default async function List() {

    const client = await connectDB;
    const db=client.db("shopping")
    let result = await db.collection('post').find().toArray();
    console.log(result);
    return (
      <div className="notice-bg">
             <h4>Notice</h4>
            <table>
                <tr>
                    <th>번호</th>
                    <th>제목</th>
                    <th>날짜</th>
                    <th>수정</th>
                    <th>삭제</th>
                </tr>
               
            </table>
            <table>
                <NoticeItem result={result} />
            </table>

            <p><Link href="/write">글쓰기</Link> </p>
      </div>
    )
  } 