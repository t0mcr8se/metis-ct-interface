import { FC, useState } from 'react'
import styles from './BigButtonUnstyled.module.css'
import arrow_right_black from '../../assets/images/arrow_right_black.svg'
import { useAccount } from 'wagmi'
import TwitterModal from '../TwitterModal/TwitterModal'

interface IBigButtonUnstyled {
    buttonText: string,
    buttonIcon: string
}

const BigButtonUnstyled: FC<IBigButtonUnstyled> = ({buttonText, buttonIcon}) => {

    const [openedModal, setOpenedModal] = useState(false)

    const {isConnected} = useAccount()

    const openModal = () => {
        if(!isConnected) return
        setOpenedModal(true)
    }
    const closeModal = () => {
        setOpenedModal(false)
        document.body.style.overflow = 'auto'
    }
    return (
        <>
            <div className={`${styles.big_btn} ${styles.big_btn_unstyled}`} onClick={openModal}>
                <div className={styles.big_btn_name}>
                    <span>{buttonText}Boost Your Score Sharing on X</span>
                    <img src={arrow_right_black} alt="" />
                </div>
                <div>
                    <img src={buttonIcon} alt="" />
                </div>
            </div>
            <TwitterModal
                openedModal={openedModal}
                closeModal={closeModal}
                setOpenedModal={setOpenedModal}
            />
        </>
    )
}

export default BigButtonUnstyled