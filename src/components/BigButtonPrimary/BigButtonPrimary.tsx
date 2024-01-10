import { useState } from 'react'
import arrow_right_white from '../../assets/images/arrow_right_white.svg'
import tokens_innactive_gradient from '../../assets/button_images/tokens_innactive_gradient.svg'
import tokens_innactive from '../../assets/button_images/tokens_innactive.svg'
import token_gradient from '../../assets/button_images/tokens_gradient.svg'
import token_icon from '../../assets/button_images/tokens_2.svg'
import styles from './BigButtonPrimary.module.css'
import { TG_BOT } from '../../constants'
import { useAccount } from 'wagmi'

function BigButtonPrimary() {
    const {isConnected, address} = useAccount()
    const [disabled, setDisabled] = useState(false);

    const claimToken = () => {
        setDisabled(true);
        window.open(TG_BOT + address, '_blank');
    }
    

    return (
        <>
            <button disabled={disabled || !isConnected} className={`${styles.big_btn} ${(disabled||!isConnected) ? styles.button_disabled : styles.big_btn_primary}`} onClick={claimToken}>
                <div className={styles.big_btn_name}>
                    <span>Claim your <br className='sm:hidden'/>tokens</span>
                    <img src={arrow_right_white} alt="" />
                </div>
                <div>
                    <img 
                        src={`${disabled ? tokens_innactive_gradient : token_gradient}`} 
                        alt="" 
                        className={`${styles.big_btn_gradient} ${styles.big_btn_absolute}`} />
                    <img 
                        src={`${disabled ? tokens_innactive : token_icon}`}
                        alt="" 
                        className={`${styles.big_btn_icon} ${styles.big_btn_absolute}`} />
                </div>
            </button>

        </>
    )
}

export default BigButtonPrimary
