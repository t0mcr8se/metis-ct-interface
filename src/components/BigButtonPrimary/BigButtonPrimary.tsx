import arrow_right_white from '../../assets/images/arrow_right_white.svg'
import token_gradient from '../../assets/button_images/tokens_gradient.svg'
import token_icon from '../../assets/button_images/tokens_2.svg'
import styles from './BigButtonPrimary.module.css'

function BigButtonPrimary() {

    return (
        <>
            <a className={`${styles.big_btn} ${styles.big_btn_primary}`} href="#szn2">
                <div className={styles.big_btn_name}>
                    <p>SEASON TWO</p>
                    <span>Thank you to all Metis community testers! Season 2 of community testing has ended.</span>
                    <p>Your participation is invaluable! More details will come on how to earn more points</p>
                    <img src={arrow_right_white} alt="" />
                </div>
                <div>
                    <img 
                        src={`${token_gradient}`} 
                        alt="" 
                        className={`${styles.big_btn_gradient} ${styles.big_btn_absolute}`} />
                    <img 
                        src={`${token_icon}`}
                        alt="" 
                        className={`${styles.big_btn_icon} ${styles.big_btn_absolute}`} />
                </div>
            </a>

        </>
    )
}

export default BigButtonPrimary
