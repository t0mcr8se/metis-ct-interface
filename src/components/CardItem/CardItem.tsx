import { useState, FC } from 'react'

import inProgressIcon from '../../assets/images/in_progress.svg'
import completedIcon from '../../assets/images/completed.svg'
import StateBlock from '../StateBlock/StateBlock.tsx'
import CardModal from '../CardModal/CardModal.tsx'
import styles from './CardItem.module.css'


interface ICardItem {
    cardName: string,
    cardClass: string,
    cardIcon: string,
    cardArrow: string,
    cardState: string,
    cardModalIcon: string
}

const CardItem: FC<ICardItem> = ({cardName, cardClass, cardIcon, cardArrow, cardState, cardModalIcon}) => {
    const [openedModal, setOpenedModal] = useState(false)

    const openModal = () => {
        setOpenedModal(true)
    }
    const closeModal = () => {
        setOpenedModal(false)
        document.body.style.overflow = 'auto'
    }

    const state = getStateElement(cardState, inProgressIcon, completedIcon)

    return (
        <>
            <div className={styles.card_wrapper} onClick={openModal}>
                <div className={`${styles.card} ${styles[cardClass]} ${cardState == 'Completed' ? styles.card_completed : ''}`}>
                    <div className={styles.card_column}>
                        <div className={styles.card_name}>{cardName}</div>
                        <img src={cardArrow} alt="" />
                    </div>
                    <div className={styles.card_column}>
                        <img src={cardIcon} alt="" className={styles.card_icon} />
                    </div>
                </div>
                <div className={styles.card_state_wrapper}>{state}</div>
            </div>
            <CardModal openedModal={openedModal} 
                closeModal={closeModal} 
                setOpenedModal={setOpenedModal}
                tokenIcon={cardModalIcon}
                cardStateModal={state} />
        </>
    )
}

function getStateElement(state: string, inProgressIcon: string, completedIcon: string) {
    if (state == 'Started') {
        return <StateBlock type='in_progress' text="In Progress" icon={inProgressIcon} />
    }
    else if (state == 'Completed') {
        return <StateBlock type='completed' text="Completed" icon={completedIcon} />
    }   
}

export default CardItem
