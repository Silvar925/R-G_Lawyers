import styles from "./TextArea.module.css"

export const TextArea = ({ name, id, text }) => {
    return (
        <textarea name={name} id={id} className={styles.textarea}>
            {text}
        </textarea>
    )
}