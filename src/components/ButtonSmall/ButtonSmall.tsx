import { FC } from 'react'
// import '../assets/styles/buttons.css'
import styles from './ButtonSmall.module.css'


interface IButtonSmall {
    type: string,
    text: string
}

const ButtonSmall: FC<IButtonSmall> = ({type, text}) => {
    return (
        <>
            <div className={styles.btn_wrapper}>
                <button className={`${styles.small_button} ${styles[type]}`}>{text}</button>
            </div>
        </>
    )
}

export default ButtonSmall