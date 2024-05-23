import styles from "./Footer.module.css"
import alazar from "../../assets/footer/alazar_light.svg"

export const Footer = ({ className, background }) => {
    return (
        <footer className={background === 'transparent' ? className : styles.footerBackgound}>
            <div className={`${styles.footerBox}`}>
                <div className={styles.left} >
                    <h1>R&B АДВОКАТЫ</h1>

                    <ul>
                        <li>Политика конфиденциальности</li>
                        <li>Пользовательское соглашение</li>
                    </ul>

                </div>

                <img src={alazar} alt="alazarLogo" />
            </div>
        
        </footer>
    )
}