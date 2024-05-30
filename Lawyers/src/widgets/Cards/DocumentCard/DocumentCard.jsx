import styles from "./DocumentCard.module.css"

export const DocumentCard = ({ title, doc }) => {
    return (
        <article className={styles.documentCard}>
            <header>
                <img src="googleDocs.svg" alt="goodleDocs" />
                <hr />
                <div className={styles.docBody}>
                    <h2>
                        {title}
                    </h2>
                    <a href={doc}>Скачать</a>
                </div>
            </header>

        </article>
    )
}