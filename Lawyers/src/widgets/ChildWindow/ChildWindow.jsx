import styles from "./ChildWindow.module.css"
import { Input } from "../../Shared/Input/Input"
import { TextArea } from "../../Shared/TextArea/TextArea"
import { Button } from "../../Shared/Button/Button"
import { RoundCheckbox } from "../../Shared/RoundCheckbox/RoundCheckbox"

import btnClose from "../../assets/btnClose.svg"

export const ChildWindow = ({ buttonClose }) => {
    return (
        <div className={styles.childWindowContainer}>
            <div className={styles.title}>
                <h1>Записаться на консультацию</h1>
                <button onClick={buttonClose}><img src={btnClose} alt="closeicon" /></button>
            </div>

            <div className={styles.childWindowBox}>
                <Input placeholdertext="ФИО*" />
                <Input placeholdertext="Телефон*" />
                <Input placeholdertext="E-mail" />
                <TextArea />
            </div>

            <label>
                <RoundCheckbox />
                <p>
                    Отправляя форму, я даю согласие на обработку персональных данных,
                    подтверждаю согласие с политикой конфиденциальности и условиями
                    догов-оферты на оказание комлексных услуг, а также на получение
                    информационных рассылок от проекта и партнеров проекта.
                </p>
            </label>

            <div className={styles.btnContainer}>
                <Button text="Отправить" />
            </div>

        </div>
    )
}