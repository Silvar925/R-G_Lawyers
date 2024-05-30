import React from 'react';
import styles from "./Practice.module.css"
import { DocumentCard } from "../../widgets/Cards/DocumentCard/DocumentCard"
import { documentList, thanks } from "../../data"

import { ThanksCard } from "../../widgets/Cards/ThanksCard/ThanksCard"

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { Navbar } from "../../widgets/Navbar/Navbar"
import { Breadcrumb } from '../../widgets/Breadcrumb/Breadcrumb';
import { Footer } from '../../widgets/Footer/Footer'

import { useState } from 'react';

import { ChildWindow } from '../../widgets/ChildWindow/ChildWindow';

export const Practice = () => {
    const [swiper, setSwiper] = useState(null);
    let mobileOrientation = (innerWidth >= 320 && innerWidth <= 450)

    const [isDialogWindow, setIsDialogWindow] = useState(false)

    const clickButtonHandler = () => {
        setIsDialogWindow(!isDialogWindow);

        if (!isDialogWindow) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
    };

    const btnClose = () => {
        setIsDialogWindow(false)

        if (!isDialogWindow) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
    }


    return (
        <>
            <main>

                {
                    isDialogWindow === true &&
                    <ChildWindow buttonClose={() => btnClose()} />

                }

                <section className={styles.bannerContainer}>
                    <Navbar buttonOnclick={() => clickButtonHandler()}/>

                    <div className={styles.bannerBox}>
                        <div className={styles.bannerBoxText}>
                            <div className={styles.bannerBoxTextLeft}>
                                
                                <h1>Практика</h1>
                            </div>
                            <img src="practiceBanner.png" alt="practiceBanner" />
                        </div>
                    </div>

                </section>


                <div className={styles.container}>
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
                            <button
                                className={styles.btnSliderLeft}
                                onClick={() => swiper && swiper.slidePrev()}
                            >
                                <img src="practice/left.svg" alt="left" />
                            </button>

                            <Swiper
                                className={styles.swiperBox}
                                spaceBetween={30}
                                slidesPerView={mobileOrientation ? 1 : 3}
                                onSwiper={setSwiper} 
                                navigation={{ prevEl: '.btnSliderLeft', nextEl: '.btnSliderRight' }}
                            >
                                {thanks.map((item, index) => (
                                    <SwiperSlide className={styles.slide} key={index}>
                                        <ThanksCard title={item.title} subTitle={item.subTitle} text={item.text} img={item.img} />
                                    </SwiperSlide>
                                ))}
                            </Swiper>

                            <button
                                className={styles.btnSliderRight}
                                onClick={() => swiper && swiper.slideNext()}
                            >
                                <img src="practice/right.svg" alt="right" />
                            </button>
                        </div>

                    </section>
                </div>


            </main>
            <Footer />
        </>

    )
}