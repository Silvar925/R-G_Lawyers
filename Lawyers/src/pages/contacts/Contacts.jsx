import styles from "./Contacts.module.css"
import { Navbar } from "../../widgets/Navbar/Navbar"
import { Footer } from "../../widgets/Footer/Footer"
import { Breadcrumb } from "../../widgets/Breadcrumb/Breadcrumb"
import { useState } from "react"
import { ChildWindow } from "../../widgets/ChildWindow/ChildWindow"

export const Contacts = () => {
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
        <main className={styles.container}>

            {
                isDialogWindow === true &&
                <ChildWindow buttonClose={() => btnClose()} />

            }

            <Navbar color="black" buttonOnclick={() => clickButtonHandler()} />


            <section className={styles.content}>
                <div className={styles.topBox}>
                    <div className={styles.contentInfo}>

                        <div>
                            <header>
                                <h2>Контакты</h2>
                            </header>

                            <ul>
                                <li className={styles.contactBox}>
                                    <h3>УЗДЕНОВ РАМИЛЬ ХАСАНБИЕВИЧ</h3>
                                    <hr />

                                    <div className={styles.contact}>
                                        <p>+7 918 711-77-17</p>
                                        <p>advokat.ram@yandex.ru</p>
                                    </div>
                                </li>

                                <li className={styles.contactBox}>
                                    <h3>АБДОКОВА БЭЛА ХАМСУДОВА</h3>
                                    <hr />

                                    <div className={styles.contact}>
                                        <p>+7 928 394-64-22</p>
                                        <p>olesi13@mail.ru</p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <h3>ул. Ворошилова, 2, Черкесск, Карачаево-Черкесская Республика, 369000</h3>

                    </div>

                    <img src="contactBanner.png" alt="contactBanner" />
                </div>

                <div style={{ position: 'relative', overflow: 'hidden', width: '100%' }}>
                    <a href="https://yandex.ru/maps/1104/cherkessk/?utm_medium=mapframe&utm_source=maps" style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: '0px' }}>Черкесск</a>
                    <a href="https://yandex.ru/maps/1104/cherkessk/house/ulitsa_imeni_voroshilova_2/YEsYdgJjSUEOQFpufX5zd3xjZw==/?ll=42.053049%2C44.226003&utm_medium=mapframe&utm_source=maps&z=16" style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: '14px' }}>Улица имени Ворошилова, 2 — Яндекс Карты</a>
                    <iframe src="https://yandex.ru/map-widget/v1/?ll=42.053049%2C44.226003&mode=whatshere&whatshere%5Bpoint%5D=42.053049%2C44.226003&whatshere%5Bzoom%5D=17&z=16" width="100%" height="700" frameBorder="1" allowFullScreen={true} style={{ position: 'relative' }}></iframe>
                </div>


            </section>


            <Footer background='black' />
        </main>
    )
}