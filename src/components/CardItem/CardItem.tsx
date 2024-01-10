import { useState, FC } from 'react'

import inProgressIcon from '../../assets/images/in_progress.svg'
import completedIcon from '../../assets/images/completed.svg'
import StateBlock from '../StateBlock/StateBlock.tsx'
import CardModal from '../CardModal/CardModal.tsx'
import styles from './CardItem.module.css'
import { ItemStates, TCards } from '../../store/cardItems.ts'
import { useAccount } from 'wagmi'


interface ICardItem {
    // cardName: string,
    // cardClass: string,
    // cardIcon: string,
    cardArrow: string,
    item: TCards
    // cardState: ItemStates,
    // cardModalIcon: string,
    // cardHistory: Array<object>,
    // cardUrl: string,
    // cardDescription: string
    // cardVideo?: string
}

const CardItem: FC<ICardItem> = ({cardArrow, item }) => {
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

    const state = getStateElement(item.state, inProgressIcon, completedIcon)

    return (
        <>
            <div className={styles.card_wrapper} onClick={openModal}>
                <div className={`${styles.card} ${styles[item.class]} ${item.state == ItemStates.COMPLETED || !isConnected ? styles.card_completed : ''}`}>
                    <div className={styles.card_column}>
                        <div className={styles.card_name}>{item.name}</div>
                        <img src={cardArrow} alt="" />
                    </div>
                    <div className={styles.card_column}>
                        <img src={item.icon} alt="" className={styles.card_icon} />
                    </div>
                </div>
                <div className={styles.card_state_wrapper}>{state}</div>
            </div>
            <CardModal 
                openedModal={openedModal} 
                closeModal={closeModal}
                setOpenedModal={setOpenedModal}
                cardStateModal={state}
                item={item}
                // tokenIcon={cardModalIcon}
                // cardHistory={cardHistory}
                // descriptionText={cardDescription}
                // videoUrl={cardVideo}
                // url={cardUrl}
            />
        </>
    )
}

function getStateElement(state: ItemStates, inProgressIcon: string, completedIcon: string) {
    if (state == ItemStates.STARTED) {
        return <StateBlock type='in_progress' text="In Progress" icon={inProgressIcon} />
    }
    else if (state == ItemStates.COMPLETED) {
        return <StateBlock type='completed' text="Completed" icon={completedIcon} />
    }   
}

export default CardItem
