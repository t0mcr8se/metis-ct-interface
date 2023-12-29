

import CardItem from './CardItem.tsx'
import arrow_right_white from '../assets/images/arrow_right_white.svg'
import tethys from '../assets/cards/Tethys.svg'
import unidex from '../assets/cards/Unidex.svg'
import maia from '../assets/cards/Maia.svg'
import netswap from '../assets/cards/Netswap.svg'
import hummus from '../assets/cards/Hummus.svg'
import midas from '../assets/cards/Midas.svg'
import league from '../assets/cards/LeagueTech.svg'


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
            state: states.started
        },
        {
            id: 1,
            name: "Unidex",
            class: "card_Unidex",
            icon: unidex,
            state: states.completed
        },
        {
            id: 2,
            name: "Maia",
            class: "card_Maia",
            icon: maia,
            state: states.not_started
        },
        {
            id: 3,
            name: "Netswap",
            class: "card_Netswap",
            icon: netswap,
            state: states.not_started
        },
        {
            id: 4,
            name: "Hummus",
            class: "card_Hummus",
            icon: hummus,
            state: states.not_started
        },
        {
            id: 5,
            name: "Midas",
            class: "card_Midas",
            icon: midas,
            state: states.started
        },
        {
            id: 6,
            name: "League Tech",
            class: "card_LeagueTech",
            icon: league,
            state: states.not_started
        }
    ]


    return (
        <>
            <div className="cards">
                {getCards(cards, arrow_right_white)}
                {/* <CardItem name="Tethys" class="card_Tethys" arrow={arrow_right_white} icon={tethys} />
                <CardItem name="Unidex" class="card_Unidex" arrow={arrow_right_white} icon={unidex} />
                <CardItem name="Maia" class="card_Maia" arrow={arrow_right_white} icon={maia} />
                <CardItem name="Netswap" class="card_Netswap" arrow={arrow_right_white} icon={netswap} />
                <CardItem name="Hummus" class="card_Hummus" arrow={arrow_right_white} icon={hummus} />
                <CardItem name="Midas" class="card_Midas" arrow={arrow_right_white} icon={midas} />
                <CardItem name="League Tech" class="card_LeagueTech" arrow={arrow_right_white} icon={league} /> */}
            </div>
        </>
    )
}

function getCards(cards: Array<{id: number, name: string, class: string, icon: string, state: string}>, arrow: string) {
    const content = []

    for (const item of cards) {
        content.push(
            <CardItem key={item.id}
                    name={item.name} 
                    class={item.class} 
                    arrow={arrow} 
                    icon={item.icon} 
                    state={item.state} />
        )
    }

    return content
}

export default Cards
