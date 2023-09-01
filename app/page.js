/* import Image from 'next/image'*/

import MovieSwiper from "@/components/MovieSwiper"
import MovieSwiper1 from "@/components/MovieSwiper1"

import styles from './page.module.css'  


export default function Home() {
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
          <div className="new-card">
            <img src="/img/new1.jpg" alt="" />
            <div className="card-box">
              <h3 className="title">타이사 자켓 레이어드 플리츠 벨티드 원피스</h3>
              <p className="price">80600원</p>
              <p className="description">
                투피스를 입은 듯 세련된 실루엣의 원피스
              리본 쉐입의 골드 버클로 페미닌한 무드
              플리츠 디자인으로 풍성하고 볼륨있는 실루엣
              </p>
            </div>
          </div>
          <div className="new-card">
            <img src="/img/new2.jpg" alt="" />
            <div className="card-box">
              <h3 className="title">타이사 자켓 레이어드 플리츠 벨티드 원피스</h3>
              <p className="price">80600원</p>
              <p className="description">
                투피스를 입은 듯 세련된 실루엣의 원피스
              리본 쉐입의 골드 버클로 페미닌한 무드
              플리츠 디자인으로 풍성하고 볼륨있는 실루엣
              </p>
            </div>
          </div>
          <div className="new-card">
            <img src="/img/new3.jpg" alt="" />
            <div className="card-box">
              <h3 className="title">타이사 자켓 레이어드 플리츠 벨티드 원피스</h3>
              <p className="price">80600원</p>
              <p className="description">
                투피스를 입은 듯 세련된 실루엣의 원피스
              리본 쉐입의 골드 버클로 페미닌한 무드
              플리츠 디자인으로 풍성하고 볼륨있는 실루엣
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
