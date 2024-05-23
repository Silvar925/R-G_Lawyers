import styles from "./Layout.module.css"
import { Outlet } from "react-router-dom"
import { Footer } from "../widgets/Footer/Footer"

export const Layout = () => {
    return (
        <div className={styles.Layout}>
            <Outlet />
            <Footer />
        </div>
    )
}
