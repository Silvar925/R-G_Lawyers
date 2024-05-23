import styles from "./Breadcrumb.module.css"

export const Breadcrumb = () => {
    return (
        <nav aria-label="breadcrumb" className={styles.breadcrumb}>
            <ol className={styles.breadcrumb}>
                <li className={styles.breadcrumb}><a href="/">Главная</a></li>
                <li className={styles.breadcrumb}><a href="/student">Студенту</a></li>
                <li className={styles.breadcrumb} aria-current="page">Расписание</li>
            </ol>
        </nav>

    )
}