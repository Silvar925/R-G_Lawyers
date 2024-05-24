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
                    <section className={styles.criminalDefense}>
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
                    </section>

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

                            <ul className={styles.administrativeProceedingFirstUl}>
                                <CriminalDefenseCard title="01." text='Представление интересов по делам об административных правонарушениях в том числе защита прав автомобилистов, (лишение водительского удостоверения и т.п.), обжалование решений контролирующих органов и тп' />
                                <CriminalDefenseCard title="02." text="Обжалование решений государственных органов и должностных лиц в порядке КАС РФ." />
                            </ul>

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


                </div>



            </main>
            <Footer />
        </>
    )
}