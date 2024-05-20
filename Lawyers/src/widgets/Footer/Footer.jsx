import styles from "./Footer.module.css"

import alazar from "../../assets/footer/alazar_light.svg"

export const Footer = () => {
    return (
        <footer>
            <div className={styles.left} >
                <h1>R&B АДВОКАТЫ</h1>

                <ul>
                    <li>Политика конфиденциальности</li>
                    <li>Пользовательское соглашение</li>
                </ul>

            </div>

            <img src={alazar} alt="alazarLogo" />

        </footer>
    )
}