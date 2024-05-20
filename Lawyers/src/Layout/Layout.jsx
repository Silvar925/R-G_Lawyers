import styles from "./Layout.module.css"
import { Navbar } from "../widgets/Navbar/Navbar"
import { Outlet, useLocation } from "react-router-dom"
import { Footer } from "../widgets/Footer/Footer"

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export const Layout = () => {
    const location = useLocation().pathname

    console.log('location: ', location)

    return (
        <>
            <section className={styles.bannerContainer}>
                <div>
                    <Navbar className={styles.mainNav} />
                </div>

                <div className={styles.box} style={{display: 'none'}}>
                    <div className={styles.left}>
                        <Swiper className={styles.swiper}
                            spaceBetween={50}
                            slidesPerView={1}
                            onSlideChange={() => console.log('slide change')}
                            onSwiper={(swiper) => console.log(swiper)}
                        >
                            <SwiperSlide>
                                <div className={styles.slide}>
                                    <h1>R&B Адвокаты</h1>

                                    <div className={styles.slideText}>
                                        <p>
                                            Адвокатской деятельностью является квалифицированная юридическая помощь,
                                            оказываемая на профессиональной основе лицами, получившими статус адвоката
                                            физическим и юридическим лицам (далее - доверители) в целях защиты их прав,
                                            свобод и интересов, а также обеспечения доступа к правосудию.
                                        </p>
                                        <p style={{ color: 'gray' }}>
                                            Статья 1 Федерального закона "Об адвокатской
                                            деятельности и адвокатуре в Российской Федерации" от 31.05.2002 N 63-ФЗ
                                        </p>

                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>

                    <div className={styles.right}>
                        <img src="mainImg.png" alt="mainImg" />
                    </div>
                </div>
            </section>


            <Outlet />
            <Footer />
        </>
    )
}