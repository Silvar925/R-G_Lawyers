import styles from "./RoundCheckbox.module.css";

export const RoundCheckbox = ({ checked, onChange }) => {
    return (
        <input
            type="checkbox"
            className={styles['round-checkbox']}
            checked={checked}
            onChange={onChange}
        />
    );
};