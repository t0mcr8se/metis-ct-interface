import { Dispatch, FC, SetStateAction, useEffect, useRef } from 'react'

import { useClickOutside } from '../../hooks/useClickOutside.ts'
import close from '../../assets/images/close_icon.svg'
import styles from './TxModal.module.css'

export enum TxModalType {
    SUCCESS,
    FAIL
}

interface ITxModal {
    openedModal: boolean,
    closeModal: () => void,
    setOpenedModal: Dispatch<SetStateAction<boolean>>,
    type: TxModalType,
    content: string
}

const TxModal: FC<ITxModal> = ({ 
    openedModal, 
    closeModal, 
    setOpenedModal, 
    type,
    content
}) => {
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
                        <div className={styles.modal_header_close} onClick={closeModal}>
                            <img src={close} alt="" />
                        </div>
                    </div>
                    <div className={styles.modal_content}>
                        <div className={styles.modal_title}>
                            <span>{type === TxModalType.SUCCESS ? "SUCCESS":"ERROR"}</span>
                        </div>
                        <div className={styles.modal_text}>
                            {content}
                        </div>
                        
                    </div>
                    <center></center>
                </div>
            </div>
        </>
    )

}

export default TxModal