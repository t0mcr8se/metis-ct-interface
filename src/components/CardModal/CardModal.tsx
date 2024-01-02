import { Dispatch, FC, ReactNode, SetStateAction, useEffect, useRef } from 'react'

import { useClickOutside } from '../../hooks/useClickOutside.ts'
import close from '../../assets/images/close_icon.svg'
import Button from '../ButtonSmall/ButtonSmall.tsx'
import styles from './CardModal.module.css'

interface ICardModal {
    openedModal: boolean,
    closeModal: () => void,
    setOpenedModal: Dispatch<SetStateAction<boolean>>,
    tokenIcon: string,
    cardStateModal: ReactNode
}

const CardModal: FC<ICardModal> = ({ openedModal, closeModal, setOpenedModal, tokenIcon, cardStateModal }) => {
    const refModal = useRef(null)
    useClickOutside(refModal, setOpenedModal)

    useEffect(() => {
        if (openedModal) {
            document.body.style.overflow = 'hidden'
        }
    }, [openedModal])

    return openedModal && (
        <>
            <div className={styles.card_modal}>
                <div ref={refModal} className={styles.modal_body}>
                    <div className={styles.modal_header}>
                        <div className={styles.modal_header_state}>
                            {cardStateModal}
                        </div>
                        <div className={styles.modal_header_close} onClick={closeModal}>
                            <img src={close} alt="" />
                        </div>
                    </div>
                    <div className={styles.modal_content}>
                        <div className={styles.modal_title}>
                            <img src={tokenIcon} alt="" />
                        </div>
                        <div className={styles.modal_text}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </div>
                    </div>
                    <div className={styles.modal_video}>
                        {/* <img src={video} alt="" /> */}
                        <iframe
                            src="https://www.youtube.com/embed/jYLXorNpLlE">
                        </iframe>
                    </div>
                    <div className={styles.modal_history}>
                        <div className={styles.modal_history_items}>
                            <div className={`${styles.modal_history_item} ${styles.modal_history_item_completed}`}>Swap at least 1 Metis token</div>
                            <div className={`${styles.modal_history_item} ${styles.modal_history_item_completed}`}>Add Liquidity</div>
                            <div className={`${styles.modal_history_item} ${styles.modal_history_item_completed}`}>Add Liquidity</div>
                            <div className={styles.modal_history_item}>Add Liquidity</div>
                            <div className={styles.modal_history_item}>Long at least 0.5 Metis</div>
                        </div>
                    </div>
                    <Button type="black_btn" text="Start Now" />
                </div>
            </div>
        </>
    )

}

export default CardModal