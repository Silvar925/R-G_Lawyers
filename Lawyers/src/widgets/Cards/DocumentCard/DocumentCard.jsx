import styles from "./DocumentCard.module.css"

export const DocumentCard = ({ title }) => {
    return (
        <article className={styles.documentCard}>
            <header>
                <img src="googleDocs.svg" alt="goodleDocs" />
                <hr />
                <div className={styles.docBody}>
                    <h2>
                        {title}
                    </h2>
                    <a href="/Istoriya sudebnoj sistemy VS KCHR_2024.docx">Скачать</a>
                </div>
            </header>

        </article>
    )
}