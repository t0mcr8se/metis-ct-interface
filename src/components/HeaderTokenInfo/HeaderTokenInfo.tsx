import { FC } from 'react'
import styles from './HeaderTokenInfo.module.css'

interface IHeaderTokenInfo {
    icon: string,
    type: string,
    text: string
}

const HeaderTokenInfo: FC<IHeaderTokenInfo> = ({icon, type, text}) => {

    const parseUserAddress = (address: string) => {
        return `${address.slice(0, 4)}...${address.slice(-4)}`
    }
    
    if (type == 'user_wallet_address') {
        text = parseUserAddress(text)
    }

    return (
        <>
            <div className={`${styles.wallet_item} ${styles[type]}`}>
                <img src={icon} className={styles.token_info_icon} alt="" />
                <div className={styles.wallet_content}>{text}</div>
            </div>
        </>
    )
}

export default HeaderTokenInfo