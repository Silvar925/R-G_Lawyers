import styles from "./ThanksCard.module.css"

export const ThanksCard = ({ title, subTitle, text, img }) => {

    let mobileOrientation = (innerWidth >= 320 && innerWidth <= 450)

    console.log('mobile: ', mobileOrientation)

    const getWidth = () => {
        if (mobileOrientation === true) {
            return innerWidth - 10
        }
    }

    console.log()

    return (
        <article className={styles.thanksCard} >
            <img src={img} alt="card" />

            <div className={styles.cardBox}>
                <header>
                    <h2>{title}</h2>
                    <h3>{subTitle}</h3>
                </header>

                <p>{text}</p>
            </div>

        </article>
    )
}