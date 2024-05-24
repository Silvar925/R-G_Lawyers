import styles from "./Breadcrumb.module.css"
import { BrowserRouter as Router, Route, Link, Routes, useLocation } from 'react-router-dom';

import arrow from "../../assets/arrow.svg"

export const Breadcrumb = ({ style }) => {
    let location = useLocation();
    let pathnames = location.pathname.split('/').filter(x => x);

    return (
        <nav>
            <ul className={styles.breadcrumb}>
                <li>
                    <Link to="/">ГЛАВНАЯ</Link>
                </li>
                {pathnames.map((value, index) => {
                    const to = `/${pathnames.slice(0, index + 1).join('/')}`;

                    return (
                        <li key={to}>
                            <img src={arrow} alt="arrow" />
                            <Link to={to}>{dictionary[value]}</Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};


const dictionary = {
    'service': 'ОКАЗЫВАЕМЫЕ УСЛУГИ',
    'practice': 'ПРАКТИКА',
    'criminalDefense': 'ЗАЩИТА ПО УГОЛОВНЫМ ДЕЛАМ',
    'costServices': 'ГОНОРАР',
    'contacts': 'КОНТАКТЫ'
}