import styles from "./Home.module.css"
import { BaseCard } from "../../widgets/Cards/BaseCard/BaseCard"
import { LawyerCard } from "../../widgets/Cards/LawyerCard/LawyerCard"
import { advantages, servicesList } from "../../data"
import { LegalServicesCard } from "../../widgets/Cards/LegalServicesCard/LegalServicesCard"
import { Navbar } from "../../widgets/Navbar/Navbar"
import { Footer } from "../../widgets/Footer/Footer"

export const Home = () => {
    const mobileOrientation = (innerWidth >= 320 && innerWidth <= 450)

    return (
        <main>
            <section className={styles.bannerContainer}>
                <Navbar color="black" className={styles.navbarMobile}/>

                <div className={styles.bannerSwiper}>
                    {
                        mobileOrientation === true &&
                        <div className={styles.bannerImg}>
                            <img src="mainBanner.png" alt="mainBanner" />
                        </div>
                    }

                    <div className={styles.bannerSlideBox}>
                        <header>
                            <h2>R&B Адвокаты</h2>
                        </header>

                        <div className={styles.bannerSlideText}>
                            <p>
                                Адвокатской деятельностью является квалифицированная юридическая помощь,
                                оказываемая на профессиональной основе лицами, получившими статус адвоката
                                физическим и юридическим лицам (далее - доверители) в целях защиты их прав,
                                свобод и интересов, а также обеспечения доступа к правосудию.
                            </p>

                            <p style={{ color: 'gray' }}>
                                Статья 1 Федерального закона "Об адвокатской деятельности и адвокатуре в
                                Российской Федерации" от 31.05.2002 N 63-ФЗ
                            </p>
                        </div>

                    </div>

                    {
                        mobileOrientation === false &&
                        <div className={styles.bannerImg}>
                            <img src="mainBanner.png" alt="mainBanner" />
                        </div>
                    }

                </div>
            </section>

            {/* ------------------------------------------------------------------------------------------------ */}


            <div className={styles.widthConainer}>
                <section className={styles.aboutUSContainer}>
                    <header className={styles.sectionTitle}>
                        <h2>О нас</h2>
                    </header>

                    <ul>
                        <li>
                            <BaseCard text={`Мы представляем дружную команду адвокатов филиала 
                №7 г. Черкесска Карачаево-Черкесской коллегии адвокатов.  Являясь адвокатским образованием, 
                филиал объединяет адвокатов высокой квалификации, ведущих свою профессиональную деятельность в ее составе.`}
                                style={{ backgroundColor: 'rgb(159, 143, 96)', color: 'white', textAlign: 'center', justifyContent: 'center' }}
                            />
                        </li>

                        <li>
                            <LawyerCard img={["home/aboutUS/man.png", "man"]} title={["Узденов Рамиль Хасанбиевич", "Адвокат"]}
                                text={["Номер в реестре адвокатов КЧР 09/799", "Адвокат с 2012 г.", "Общий юридический стаж более 20 лет."]}
                            />
                        </li>
                        <li>
                            <LawyerCard img={["home/aboutUS/woman.png", "woman"]} title={["Абдокова Бэла Хамсудовна", "Адвокат"]}
                                text={["Номер в реестре адвокатов КЧР 09/1", "Адвокат с 1997 г. ", "Общий юридический стаж более 27 лет."]}
                            />
                        </li>
                    </ul>
                </section>
            </div>

            {/* ------------------------------------------------------------------------------------------------ */}

            <section className={styles.professionalismContainer}>
                <div className={styles.professionalismBox}>
                    <img src="home/professionalism/professionalism.png" alt="hammergray" />
                    <p>
                        <span>В своей практике мы следуем профессиональным стандартам и этическим принципам Российской адвокатуры.</span>
                        <span>Профессионализм и стабильно высокое качество услуг, успешная многолетняя практика и добросовестный подход к выполнению своих обязательств составляют основу нашей деловой репутации.</span>
                        <span>Мы выстраиваем отношения с доверителями таким образом, чтобы условия сотрудничества были максимально комфортными. Понимая, что юридическая помощь может составлять значительную статью судебных расходов, готовы предложить удобный порядок выплаты вознаграждения с учётом конкретной ситуации и поставленной задачи.</span>
                        <span>Имеющийся многолетний опыт работы позволяет нам трезво оценивать перспективы споров и предлагать пути их решения.</span>
                    </p>
                </div>
            </section>


            {/* ------------------------------------- */}

            <div className={styles.widthConainer}>
                <section className={styles.advantagesContainer}>
                    <header className={styles.sectionTitle}>
                        <h2>Преимущества</h2>
                    </header>

                    <ul>
                        {
                            advantages.map((item, index) => {
                                return (
                                    <li key={index}>
                                        <BaseCard img={item.img} alt={item.alt} title={item.title} text={item.text} style={{ backgroundColor: item.backgroundColor, color: item.color }} />
                                    </li>
                                )
                            })
                        }
                    </ul>

                </section>
            </div>

            {/* ------------------------------------ */}

            <section className={styles.legalServicesСontainer}>
                <div className={styles.legalServicesBox}>
                    <header className={styles.sectionTitle}>
                        <h2>Основными юридическими услугами, оказываемыми адвокатами являются: </h2>
                    </header>

                    <ul>
                        {
                            servicesList.map((item, index) => {
                                return (
                                    <li key={index}>
                                        <LegalServicesCard title={item.title} text={item.text} />
                                    </li>
                                )
                            })
                        }
                    </ul>

                    <button className={styles.goToAll}>ПЕРЕЙТИ КО ВСЕМ УСЛУГАМ</button>
                </div>

            </section>

            <section className={styles.traditionsContainer}>
                <img src="home/traditions/left.png" alt="left" className={styles.traditionsLeftIMG} />

                <div className={styles.traditionsTextBox}>
                    <img src="home/traditions/traditionsIcon.svg" alt="traditionsIcon" />
                    <p>
                        <span>
                            Деятельность адвокатов охватывает большинство отраслей права, в связи с чем, доверители имеют возможность поручить нам решение любых возникающих правовых вопросов.
                        </span>

                        <span>
                            В лучших традициях присяжной адвокатуры, используя современные возможности, прогрессируя и совершенствуясь в ногу со временем!
                        </span>
                    </p>
                </div>

                <img src="home/traditions/right.png" alt="right" className={styles.traditionsRightIMG} />
            </section>

            <Footer />
        </main>
    )
}