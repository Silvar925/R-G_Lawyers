import styles from "./LegalServicesCard.module.css"

export const LegalServicesCard = ({ title, text }) => {
    return (
        <article className={styles.legalServicesCard}>
            <h2>{title}</h2>
            <p>{text}</p>
        </article>
    )
}