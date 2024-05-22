import React from 'react';
import styles from "./Practice.module.css"
import { DocumentCard } from "../../widgets/Cards/DocumentCard/DocumentCard"
import { documentList, thanks } from "../../data"

import { ThanksCard } from "../../widgets/Cards/ThanksCard/ThanksCard"

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export const Practice = () => {
    return (
        <main className={styles.container}>
            <section className={styles.courtDecision}>
                <header>
                    <h2>Решение суда</h2>
                </header>

                <ul>
                    {
                        documentList.map((item, index) => (
                            <React.Fragment key={index}>
                                <li>
                                    <DocumentCard title={item.title} date={item.date} />
                                </li>
                                {index < documentList.length - 1 && <hr />}
                            </React.Fragment>
                        ))
                    }
                </ul>

            </section>

            <section className={styles.thanksContainer}>
                <header>
                    <h2>Благодарности</h2>
                </header>


                <div className={styles.swiperContainer}>
                    <button className={styles.btnSliderLeft}>
                        <img src="practice/left.svg" alt="left" />
                    </button>

                    {/* spaceBetween={50} */}
                    {/* slidesPerView={2} */}
                    <Swiper className={styles.swiperBox}
                        spaceBetween={30}
                        slidesPerView={1}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                    >
                        {
                            thanks.map((item, index) => {
                                return (
                                    <SwiperSlide className={styles.slide} key={index}>
                                        <ThanksCard title={item.title} subTitle={item.subTitle} text={item.text} img={item.img} />
                                    </SwiperSlide>
                                )
                            })
                        }
                    </Swiper>

                    <button className={styles.btnSliderRight}>
                        <img src="practice/right.svg" alt="right" />
                    </button>
                </div>


            </section>

        </main>
    )
}