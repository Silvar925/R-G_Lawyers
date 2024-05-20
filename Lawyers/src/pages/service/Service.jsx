import styles from "./Service.module.css"
import { CriminalDefenseCard } from "../../widgets/Cards/CriminalDefenseCard/CriminalDefenseCard"
import { criminalDefense } from "../../data"

export const Service = () => {
    return (
        <main>
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
        </main>
    )
}