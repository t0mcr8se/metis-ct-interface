import { FC } from 'react'
import styles from './BigButtonUnstyled.module.css'
import arrow_right_black from '../../assets/images/arrow_right_black.svg'

interface IBigButtonUnstyled {
    buttonText: string,
    buttonIcon: string
}

const BigButtonUnstyled: FC<IBigButtonUnstyled> = ({buttonText, buttonIcon}) => {

    return (
        <>
            <div className={`${styles.big_btn} ${styles.big_btn_unstyled}`}>
                <div className={styles.big_btn_name}>
                    <span>{buttonText}Boost Your Score Sharing on X</span>
                    <img src={arrow_right_black} alt="" />
                </div>
                <div>
                    <img src={buttonIcon} alt="" />
                </div>
            </div>
        </>
    )
}

export default BigButtonUnstyled