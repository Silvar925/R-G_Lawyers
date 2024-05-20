import styles from "./BaseCard.module.css"

export const BaseCard = ({ style, img, alt, title, text }) => {
    return (
        <article className={styles.baseCard} style={{ ...style }}>

            {
                img !== undefined &&
                <header>
                    <img src={img} alt={alt} />
                    <h2>{title}</h2>
                </header>
            }

            <p>
                {text}
            </p>

        </article>
    )
}