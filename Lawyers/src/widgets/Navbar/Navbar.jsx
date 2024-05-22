import styles from "./Navbar.module.css"
import { Link, NavLink } from "react-router-dom"
import { useState } from "react"

import search from "../../assets/navbar/search.svg"
import menu from "../../assets/navbar/menu.svg"

export const Navbar = ({ color }) => {
    const [isClick, setIsClick] = useState(false)
    let mobileOrientation = (innerWidth >= 320 && innerWidth <= 450);

    return (
        <header className={`${styles.navbar} ${color === 'black' ? styles.navbarBlack : styles.navbarWhite}`}>
            <Link to="/">
                <h1>R&B АДВОКАТЫ</h1>
            </Link>

            {
                isClick === true && mobileOrientation === true &&
                <ul className={styles.mobileList}>
                    <li><NavLink to="/">ГЛАВНАЯ</NavLink></li>
                    <li><NavLink to="/service">ОКАЗЫВАЕМЫЕ УСЛУГИ</NavLink></li>
                    <li><NavLink to="/practice">ПРАКТИКА</NavLink></li>
                    <li><NavLink to="/criminalDefense">ЗАЩИТА ПО УГОЛОВНЫМ ДЕЛАМ</NavLink></li>
                    <li><NavLink to="/costServices">ГОНОРАР</NavLink></li>
                    <li><NavLink>КОНТАКТЫ</NavLink></li>
                </ul>
            }

            {
                mobileOrientation === false &&
                <ul className={styles.itemList}>
                    <li><NavLink to="/">ГЛАВНАЯ</NavLink></li>
                    <li><NavLink to="/service">ОКАЗЫВАЕМЫЕ УСЛУГИ</NavLink></li>
                    <li><NavLink to="/practice">ПРАКТИКА</NavLink></li>
                    <li><NavLink to="/criminalDefense">ЗАЩИТА ПО УГОЛОВНЫМ ДЕЛАМ</NavLink></li>
                    <li><NavLink to="/costServices">ГОНОРАР</NavLink></li>
                    <li><NavLink>КОНТАКТЫ</NavLink></li>
                </ul>
            }


            <button className={styles.search}><img src={search} alt="search" /></button>
            <button className={`${styles.signUp} ${ color === 'black' ? styles.signUpWhite : styles.signUpBlack}`}>ЗАПИСАТЬСЯ НА КОНСУЛЬТАЦИЮ</button>

            <button className={`${styles.menu}`}
                onClick={() => setIsClick(!isClick)}
            ><img src={menu} alt="menuBurnger" /></button>

        </header>
    )
}