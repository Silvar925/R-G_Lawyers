import styles from "./CriminalDefenseCard.module.css"

export const CriminalDefenseCard = ({ title, text }) => {
    return (
        <article className={styles.criminalDefenseCard}>
            <h2>{title}</h2>
            <p>{text}</p>
        </article>
    )
}