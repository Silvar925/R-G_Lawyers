import styles from "./Navbar.module.css"
import { Link, NavLink } from "react-router-dom"
import { useState } from "react"

import search from "../../assets/navbar/search.svg"
import searchWhite from "../../assets/navbar/searchWhite.svg"
import menu from "../../assets/navbar/menu.svg"
import menuWhite from "../../assets/navbar/menuWhite.svg"

export const Navbar = ({ color, className, buttonOnclick }) => {
    const [isClick, setIsClick] = useState(false)
    let mobileOrientation = (innerWidth >= 320 && innerWidth <= 450);

    const mobileBtnClickHandler = () => {
        buttonOnclick()
        setIsClick(false)
    }

    return (
        <header className={`${styles.navbar} ${color === 'black' ? styles.navbarBlack : styles.navbarWhite} ${className}`}>
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
                    <li><NavLink to="/contacts">КОНТАКТЫ</NavLink></li>

                    <li><button className={styles.signUpMobile}
                        onClick={mobileBtnClickHandler}
                    >ЗАПИСАТЬСЯ НА КОНСУЛЬТАЦИЮ</button></li>
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
                    <li><NavLink to="/contacts">КОНТАКТЫ</NavLink></li>
                </ul>
            }


            <button className={styles.search}><img src={color === 'black' ? search : searchWhite} alt="search" /></button>
            <button className={`${styles.signUp} ${color === 'black' ? styles.signUpWhite : styles.signUpBlack}`} onClick={buttonOnclick}>ЗАПИСАТЬСЯ НА КОНСУЛЬТАЦИЮ</button>

            <button className={`${styles.menu}`}
                onClick={() => setIsClick(!isClick)}
            ><img src={color === 'black' ? menu : menuWhite} alt="menuBurnger" /></button>

        </header>
    )
}