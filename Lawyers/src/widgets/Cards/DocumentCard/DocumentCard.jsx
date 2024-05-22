import styles from "./DocumentCard.module.css"

export const DocumentCard = ({ title }) => {
    return (
        <article className={styles.documentCard}>
            <header>
                <img src="googleDocs.svg" alt="goodleDocs" />
                <hr />
                <h2>
                    {title}
                </h2>
            </header>

            <div className={styles.body}>
                <span className={styles.bodyBox}>
                    <p>Скачать</p>
                    <a href="#">.doc</a>
                </span>
                <p>Дата опубликования на сайте: </p>
            </div>

        </article>
    )
}