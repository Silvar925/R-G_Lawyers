import styles from "./CriminalDefenseCard.module.css"

export const CriminalDefenseCard = ({ title, text, style }) => {
    return (
        <article className={styles.criminalDefenseCard} style={{...style}}>
            <h2>{title}</h2>
            <p>{text}</p>
        </article>
    )
}   