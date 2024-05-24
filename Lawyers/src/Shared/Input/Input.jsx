import styles from "./Input.module.css"

export const Input = ({ placeholdertext }) => {
    return (
        <input type="text" placeholder={placeholdertext} className={styles.input} />
    )
}