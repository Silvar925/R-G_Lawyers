import styles from "./Navbar.module.css"
import { Link, NavLink } from "react-router-dom"
import { useState } from "react"

import search from "../../assets/navbar/search.svg"
import menu from "../../assets/navbar/menu.svg"

export const Navbar = ({ classNames }) => {
    const [isClick, setIsClick] = useState(false)
    let mobileOrientation = (innerWidth >= 320 && innerWidth <= 450);

    return (
        <header className={`${styles.navbar} ${classNames}`}>
            <Link to="/">
                <h1>R&B АДВОКАТЫ</h1>
            </Link>

            {
                isClick === true && mobileOrientation === true &&
                <ul className={styles.mobileList}>
                    <li><NavLink to="/">ГЛАВНАЯ</NavLink></li>
                    <li><NavLink to="/service">ОКАЗЫВАЕМЫЕ УСЛУГИ</NavLink></li>
                    <li><NavLink>ПРАКТИКА</NavLink></li>
                    <li><NavLink>ГОНОРАР</NavLink></li>
                    <li><NavLink>КОНТАКТЫ</NavLink></li>
                </ul>
            }

            {
                mobileOrientation === false &&
                <ul className={styles.itemList}>
                    <li><NavLink to="/'">ГЛАВНАЯ</NavLink></li>
                    <li><NavLink to="/service">ОКАЗЫВАЕМЫЕ УСЛУГИ</NavLink></li>
                    <li><NavLink>ПРАКТИКА</NavLink></li>
                    <li><NavLink>ГОНОРАР</NavLink></li>
                    <li><NavLink>КОНТАКТЫ</NavLink></li>
                </ul>
            }


            <button className={styles.search}><img src={search} alt="search" /></button>
            <button className={styles.signUp}>ЗАПИСАТЬСЯ НА КОНСУЛЬТАЦИЮ</button>

            <button className={styles.menu}
                onClick={() => setIsClick(!isClick)}
            ><img src={menu} alt="menuBurnger" /></button>

        </header>
    )
}