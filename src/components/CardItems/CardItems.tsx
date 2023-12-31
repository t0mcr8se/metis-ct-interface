
import CardItem from '../CardItem/CardItem.tsx'

import arrow_right_white from '../../assets/images/arrow_right_white.svg'
import styles from './CardItems.module.css'



import tethys from '../../assets/cards/TethysLogo.svg'
import unidex from '../../assets/cards/Unidex.svg'
import maia from '../../assets/cards/Maia.svg'
import netswap from '../../assets/cards/Netswap.svg'
import hummus from '../../assets/cards/Hummus.svg'
import midas from '../../assets/cards/Midas.svg'
import league from '../../assets/cards/LeagueTech.svg'

import modalTethys from '../../assets/modal_icons/tethys.svg'
// import modalUnidex from '../../assets/modal_icons/Unidex.svg'
import modalNetswap from '../../assets/modal_icons/Netswap.svg'
import modalMidas from '../../assets/modal_icons/midas.svg'
import modalMaiaDao from '../../assets/modal_icons/MaiaDao.svg'
import modalLeagueTech from '../../assets/modal_icons/LeagueTech.svg'
import modalHummus from '../../assets/modal_icons/hummus.svg'


function Cards() {
    const states = {
        not_started: "Not Started",
        started: "Started",
        completed: "Completed",
    }

    const cards = [
        {
            id: 0,
            name: "Tethys",
            class: "card_Tethys",
            icon: tethys,
            state: states.started,
            cardsModalIcon: modalTethys
        },
        // {
        //     id: 1,
        //     name: "Unidex",
        //     class: "card_Unidex",
        //     icon: unidex,
        //     state: states.completed,
            // cardsModalIcon: modalUnidex
        // },
        {
            id: 2,
            name: "Maia",
            class: "card_Maia",
            icon: maia,
            state: states.not_started,
            cardsModalIcon: modalMaiaDao
        },
        {
            id: 3,
            name: "Netswap",
            class: "card_Netswap",
            icon: netswap,
            state: states.not_started,
            cardsModalIcon: modalNetswap
        },
        {
            id: 4,
            name: "Hummus",
            class: "card_Hummus",
            icon: hummus,
            state: states.completed,
            cardsModalIcon: modalHummus
        },
        {
            id: 5,
            name: "Midas",
            class: "card_Midas",
            icon: midas,
            state: states.started,
            cardsModalIcon: modalMidas
        },
        {
            id: 6,
            name: "League Tech",
            class: "card_LeagueTech",
            icon: league,
            state: states.not_started,
            cardsModalIcon: modalLeagueTech
        }
    ]


    return (
        <div className={styles.cards}>
            {cards.map((item) => {
                return (
                    <>
                        <CardItem key={item.id}
                            cardName={item.name}
                            cardClass={item.class}
                            cardArrow={arrow_right_white}
                            cardIcon={item.icon}
                            cardState={item.state}
                            cardModalIcon={item.cardsModalIcon} />
                    </>
                )
            })}
        </div>
    )
}

export default Cards
