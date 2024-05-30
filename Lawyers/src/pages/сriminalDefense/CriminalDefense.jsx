import styles from "./CriminalDefense.module.css"
import { CriminalDefenseCard } from "../../widgets/Cards/CriminalDefenseCard/CriminalDefenseCard"
import { criminalDefense } from "../../data"
import { Navbar } from "../../widgets/Navbar/Navbar"
import { Breadcrumb } from "../../widgets/Breadcrumb/Breadcrumb"
import { Footer } from "../../widgets/Footer/Footer"
import { useState } from "react"
import { ChildWindow } from "../../widgets/ChildWindow/ChildWindow"


export const CriminalDefense = () => {
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
                    <Navbar color="white" buttonOnclick={() => clickButtonHandler()}/>

                    <div className={styles.widthBannerBox}>
                        <div className={styles.bannerBox}>
                            

                            <div className={styles.bannerBoxText}>
                                <h2>Защита по уголовным делам</h2>
                                <p>
                                    Не знание закона не освобождает от ответственности!
                                    Защиту по уголовным делам на территории России имеют право оказывать лица с действующим статусом адвоката!
                                    Уголовные дела (защита в уголовном процессе) - это один из основных сфер нашей практики , в которой наработан огромный опыт у уголовного адвоката.
                                </p>
                            </div>

                        </div>
                    </div>


                </section>


                <div className={styles.container}>
                    <section className={styles.criminalDefense}>
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

                    <section className={styles.protectionCriminalProceedingsContainer}>
                        <div className={styles.protectionCriminalProceedingsBox}>
                            <div className={styles.protectionCriminalProceedingsText}>
                                <p style={{ fontWeight: '500' }}>
                                    Защита в уголовном процессе РОССИИ - возможна для разных категорий лиц, и прежде, чем выбирать способ
                                    необходимо ознакомиться с материалами дела, это право предусмотрено согласно УПК. Обычно в практике существует несколько стадии:
                                </p>

                                <p>
                                    <span>1.Вы еще свидетель.</span>
                                    <span>2.Вы уже подозреваемый.</span>
                                    <span>3.Вы уже обвиняемый.</span>
                                    <span>4.В отношении Вас вынесено решение / приговор.</span>
                                </p>
                            </div>

                            <img src="practice/hummer.png" alt="hummer" />
                        </div>


                    </section>


                    <section className={styles.protectionCriminalProceedingsContainer}>
                        <div className={styles.protectionCriminalProceedingsBox}>
                            <img src="practice/sud.png" alt="sud" />

                            <div className={styles.protectionCriminalProceedingsText}>
                                <p style={{ fontWeight: '500' }}>
                                    Итак, если Вы узнали неприятную новость от следователя, находитесь на любой из стадий, и не желаете провести
                                    отрезок жизни в местах лишения свободы, "промотать срок", - мы готовы Вам помочь. Общий порядок предоставления помощи таков:
                                </p>

                                <p>
                                    <span>1.Заключение договора.</span>
                                    <span>2.Ознакомление с материалами дела.</span>
                                    <span>3.Выбор правовой тактики.</span>
                                    <span>4.Сбор доказательств / опрос свидетелей / проведение экспертиз.</span>
                                    <span>5.Представительство в суде до вынесения решения.</span>
                                    <span>*.Консультация по вопросам амнистии, УДО.</span>
                                </p>
                            </div>
                        </div>
                    </section>


                    <section className={styles.recommendationsContainer}>
                        <p>
                            <span>
                                Если Вы, цените свою свободу, говорите адвокату всю необходимую информацию сразу на консультации, если же вы не готовы
                                довериться - ищите другого адвоката. Мы готовы помогать только тем, кто говорит правду и ничего кроме правды.
                                Помните - без доказательства умысла, причастности, вины, Вас никто не осудит. Если же это случилось
                                необходимо обжаловать приговор в суд вышестоящей инстанции.
                            </span>

                            <span>
                                Если Вы или Ваш знакомый или родтсвенник привлекается к уголовной ответственности, обязательно необходимо обратиться за квалифицированной 
                                юридической помощью, в лице профессионального адвоката.
                            </span>

                        </p>
                    </section>


                    <section className={styles.textContainer}>
                        <section className={styles.textBox}>
                            <header>
                                <h2>Участие в уголовном судопроизводстве:</h2>
                            </header>

                            <ul>
                                <li><p>•По делам о преступлениях против личности</p></li>
                                <li><p>•По делам о преступлениях в сфере экономики</p></li>
                                <li><p>•По делам о преступлениях против государственной власти</p></li>
                                <li><p>•По делам о преступлениях в области дорожно-транспортных происшествий</p></li>
                            </ul>

                        </section>

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