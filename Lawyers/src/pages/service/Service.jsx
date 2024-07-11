import styles from "./Service.module.css"
import { CriminalDefenseCard } from "../../widgets/Cards/CriminalDefenseCard/CriminalDefenseCard"
import { criminalDefense, сivilСases } from "../../data"
import { Navbar } from "../../widgets/Navbar/Navbar"
import { Breadcrumb } from "../../widgets/Breadcrumb/Breadcrumb"
import { Footer } from "../../widgets/Footer/Footer"
import { useState } from "react"
import { ChildWindow } from "../../widgets/ChildWindow/ChildWindow"

export const Service = () => {

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
                    <Navbar color="white" buttonOnclick={() => clickButtonHandler()} />

                    <div className={styles.widthBannerBox}>
                        <div className={styles.bannerBox}>
                            <div className={styles.bannerContainerText}>

                                <header>
                                    <h2>Оказываемые услуги</h2>
                                </header>

                                <p>
                                    Наши адвокаты оказывают квалифицированную юридическую помощь юридическим и
                                    физическим лицам. Представляем интересы клиентов в следующих сферах.
                                </p>

                            </div>

                            <img src="serviceBanner.png" alt="serviceBanner" />

                        </div>

                    </div>


                </section>


                <div className={styles.container}>
                    {/* <section className={styles.criminalDefense}>
                        <header className={styles.sectionTitle}>
                            <h2>Защита по уголовным делам</h2>
                        </header>

                        <ul>
                            {
                                criminalDefense.map((item, index) => {
                                    return (
                                        <li key={index}>
                                            <CriminalDefenseCard title={item.title} text={item.text} />
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </section> */}

                    <section className={styles.сivilСasesContainer}>
                        <header className={styles.sectionTitle}>
                            <h2>Гражданские дела</h2>
                        </header>

                        <ul>
                            {
                                сivilСases.map((item, index) => {
                                    return (
                                        <li key={index}>
                                            <CriminalDefenseCard title={item.title} text={item.text} />
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </section>


                    <section className={styles.administrativeProceedingsContainer}>
                        <header className={styles.sectionTitle}>
                            <h2>Административное судопроизводство</h2>
                        </header>

                        <div className={styles.administrativeProceedingsBox}>
                            <ul className={styles.administrativeProceedingSecondUl}>
                                <CriminalDefenseCard style={{ flexDirection: 'column', alignItems: 'center', textAlign: 'center' }} title="Административное судопроизводство (КАС РФ)" text=" Обжалование судебного акта по административному делу об оспаривании решения, действия (бездействия) органа, организации, лица, наделенных государственными или иными публичными полномочиями." />
                                <CriminalDefenseCard style={{ flexDirection: 'column', alignItems: 'center', textAlign: 'center', height: 'auto' }} title="Административные правонарушения (КоАП РФ)" text="Оказания юридической помощи лицу, в отношении которого ведется производство по делу об административном правонарушении, в производстве по делу об административном правонарушении в качестве защитника, оказания юридической помощи потерпевшему – в качестве представителя." />
                            </ul>

                        </div>

                    </section>


                    <section className={styles.сivilСasesContainer}>
                        <header className={styles.sectionTitle}>
                            <h2>Для бизнеса</h2>
                        </header>

                        <ul>
                            {
                                сivilСases.map((item, index) => {
                                    return (
                                        <li key={index}>
                                            <CriminalDefenseCard title={item.title} text={item.text} />
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </section>


                    <section className={styles.textContainer}>
                        <section className={styles.textBox}>
                            <header>
                                <h2>Участие в гражданском судопроизводстве:</h2>
                            </header>

                            <ul>
                                <li><p>•По делам об имущественных спорах (в том числе жилищные и земельные споры)</p></li>
                                <li><p>•По делам о наследовании</p></li>
                                <li><p>•По делам о брачно-семейных спорах</p></li>
                                <li><p>•По трудовым спорам</p></li>
                                <li><p>•Взыскание ущерба</p></li>
                                <li><p>•Установление юридических фактов</p></li>
                            </ul>
                        </section>

                        <section className={styles.textBox}>
                            <header>
                                <h2>Представление интересов в арбитражных судах:</h2>
                            </header>
                            <ul>
                                <li><p>•Банкротство физических лиц, индивидуальных предпринимателей, юридических лиц.</p></li>
                                <li><p>•Взыскание ущерба, задолженности по обязательствам и т.д.</p></li>
                            </ul>
                        </section>


                        <section className={styles.textBox}>
                            <header>
                                <h2>Представительство в исполнительном производстве</h2>
                            </header>
                        </section>


                        <section className={styles.textBox}>
                            <header>
                                <h2>Уменьшение кадастровой стоимости объектов недвижимости</h2>
                            </header>
                        </section>

                        <section className={styles.textBox}>
                            <header>
                                <h2>Юридические консультации</h2>
                            </header>
                        </section>

                        <section className={styles.textBox}>
                            <header>
                                <h2>Составление исковых заявлений, жалоб, ходатайств и иных документов правового характера</h2>
                            </header>
                        </section>

                        <section className={styles.textBox}>
                            <header>
                                <h2>Составление проектов договоров, адвокатских запросов</h2>
                            </header>
                        </section>

                        <section className={styles.textBox}>
                            <header>
                                <h2>Участие в уголовном судопроизводстве</h2>
                            </header>
                        </section>

                        <section className={styles.textBox}>
                            <header>
                                <h2>Участие в гражданском судопроизводстве в судах общей юрисдикции, арбитражных судах, по делам об административных правонарушениях</h2>
                            </header>
                        </section>

                        <section className={styles.textBox}>
                            <header>
                                <h2>Представительство во внесудебных органах</h2>
                            </header>
                        </section>

                        <section className={styles.textBox}>
                            <header>
                                <h2>Оказание юридической помощи юридическим лицам и индивидуальным предпринимателям</h2>
                            </header>
                        </section>

                        <section className={styles.textBox}>
                            <header>
                                <h2>Медиация</h2>
                            </header>
                        </section>

                    </section>


                </div>



            </main>
            <Footer />
        </>
    )
}