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
                <Navbar color={location === "/" ? 'black' : 'white'} />

                {
                    location === '/' ? mainBanner() : (
                        <div className={styles.altBanner}>
                            <div className={styles.altBannerLeft}>
                                <nav aria-label="Breadcrumb" className={styles.breadcrumb}>
                                    <ul>
                                        <li><a href="#">ГЛАВНАЯ</a></li>
                                        <li><a href="#">ОКАЗЫВАЕМЫЕ УСЛУГИ</a></li>
                                        <li><span aria-current="page">Product</span></li>
                                    </ul>
                                </nav>

                                <div className={styles.altBannerLeftText}>
                                    <header>
                                        <h1>Оказываемые услуги</h1>
                                    </header>

                                    <p>
                                        Наши адвокаты оказывают квалифицированную юридическую помощь юридическим и 
                                        физическим лицам. Представляем интересы клиентов в следующих сферах.
                                    </p>
                                </div>

                            </div>

                            <img src="serviceBanner.png" alt="bukvaYou" />
                        </div>
                    )
                }

            </section>


            <Outlet />
            <Footer />
        </>
    )
}


const mainBanner = () => {
    return (
        <div className={styles.box}>
            <div className={styles.left}>
                <Swiper className={styles.swiper}
                    spaceBetween={50}
                    slidesPerView={1}
                // onSlideChange={() => console.log('slide change')}
                // onSwiper={(swiper) => console.log(swiper)}
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
    )
}