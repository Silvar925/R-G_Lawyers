import styles from "./CostServices.module.css"
import { table } from "../../data"
import { Navbar } from "../../widgets/Navbar/Navbar"
import { Breadcrumb } from "../../widgets/Breadcrumb/Breadcrumb"
import { Footer } from "../../widgets/Footer/Footer"
import { useState } from "react"
import { ChildWindow } from "../../widgets/ChildWindow/ChildWindow"


export const CostServices = () => {
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
            <main >

                {
                    isDialogWindow === true &&
                    <ChildWindow buttonClose={() => btnClose()} />

                }
                <section className={styles.bannerContainer}>
                    <Navbar color="white" buttonOnclick={() => clickButtonHandler()} />

                    <div className={styles.widthBannerBox}>
                        <div className={styles.bannerBox}>
                            {
                                mobileOrientation === true &&
                                <img src="theFee.png" alt="theFree" />
                            }

                            <div className={styles.bannerBoxText}>
                                
                                <h1>Гонорар</h1>
                            </div>

                            {
                                mobileOrientation === false &&
                                <img src="theFee.png" alt="theFree" />
                            }

                        </div>
                    </div>


                </section>

                <div className={styles.container}>
                    <section className={styles.costServicesContainer}>
                        <header>
                            <h2>Стоимость услуг по уголовным делам</h2>
                        </header>

                        <div className={styles.costServicesBox}>
                            <article>
                                <p>
                                    <span>
                                        Стоимость услуг адвоката определяется соглашением сторон с учетом объема и сложности работы,
                                        продолжительности времени, необходимого для ее выполнения, опыта и квалификации адвоката,
                                        сроков, степени срочности выполнения работы и иных обстоятельств.
                                        Так определено ч. 2 ст. 16 Кодекса профессиональной этики адвоката.
                                    </span>
                                    <span>
                                        Решением Совета Адвокатской Палаты Карачаево-Черкесской Республики
                                        (размещенном на официальном сайте Адвокатской палаты КЧР), определены размеры гонорара
                                        адвокаты при заключении соглашения на оказание юридической помощи.
                                    </span>
                                </p>

                                <img src="costServices/scales.png" alt="scales" />
                            </article>

                        </div>
                    </section>

                    <section className={styles.disclaimerContainer}>
                        <p>
                            Никаких официальных и утвержденных расценок оплаты услуг адвоката не существует, поскольку не
                            бывает одинаковых дел, каждое поручение доверителя индивидуально со своими особенностями,
                            которые влияют на трудоемкость и длительность процесса оказания юридической помощи. Поэтому,
                            гонорар адвоката определяется соглашением с доверителем индивидуально в каждом конкретном случае.
                        </p>
                    </section>

                    <section className={styles.prcieListContainer}>
                        <p className={styles.disclaimerPriceList}>
                            Для некоторого понимания ниже приведены ориентировочные цены на услуги адвоката,
                            окончательно гонорар определяется только по результатам встречи с доверителем и отражается в
                            соглашении об оказании юридической помощи и может отличатся от указанных.
                        </p>

                        <table>

                            <thead>
                                <tr>
                                    <th>Консультации и составление документов</th>
                                    <th>Сумма</th>
                                </tr>
                            </thead>

                            <tbody>

                                {
                                    table.map((item, index) => {
                                        return (
                                            <tr key={index}>
                                                <th>{item.title}</th>
                                                <th>{item.price}</th>
                                            </tr>
                                        )
                                    })
                                }

                            </tbody>

                        </table>

                    </section>

                </div>

            </main>
            <Footer />
        </>
    )
}