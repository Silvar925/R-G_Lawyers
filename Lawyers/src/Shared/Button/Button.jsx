import styles from "./Button.module.css";

export const Button = ({ url, text }) => {
    return (
        <a href={url} className={styles.button}>{text}</a>
    );
};
