import styles from "./LawyerCard.module.css"

export const LawyerCard = ({ img, title, text }) => {
    return (
        <article className={styles.lawyerCard}>
            <header>
                <img src={img[0]} alt={img[1]} />
                <h2>{title[0]}</h2>
                <h3>{title[1]}</h3>
            </header>

            <div className={styles.info}>
                <p>{text[0]}</p>
                <p>{text[1]}</p>
                <p>{text[2]}</p>
            </div>

        </article>
    )
}