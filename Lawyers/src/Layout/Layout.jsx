import styles from "./Layout.module.css"
import { Navbar } from "../widgets/Navbar/Navbar"
import { Outlet, useLocation } from "react-router-dom"
import { Footer } from "../widgets/Footer/Footer"

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export const Layout = () => {
    const location = useLocation().pathname
    return (
        <>
            {/* <section className={styles.bannerContainer}>
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

            </section> */}


            <Outlet />
            <Footer />
        </>
    )
}
