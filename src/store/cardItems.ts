type TCards = {
    "id": number,
    "name": string,
    "class": string,
    "icon": string,
    "state": string,
    "cardsModalIcon": string,
    "history": Array<object>
}

import tethys from '../assets/cards/TethysLogo.svg'
// import unidex from '../assets/cards/Unidex.svg'
import maia from '../assets/cards/Maia.svg'
import netswap from '../assets/cards/Netswap.svg'
import hummus from '../assets/cards/Hummus.svg'
import midas from '../assets/cards/Midas.svg'
import league from '../assets/cards/LeagueTech.svg'

import modalTethys from '../assets/modal_icons/tethys.svg'
import modalNetswap from '../assets/modal_icons/Netswap.svg'
import modalMidas from '../assets/modal_icons/midas.svg'
import modalMaiaDao from '../assets/modal_icons/MaiaDao.svg'
import modalLeagueTech from '../assets/modal_icons/LeagueTech.svg'
import modalHummus from '../assets/modal_icons/hummus.svg'

const cards: TCards[] = [
    {
        "id": 0,
        "name": "Tethys",
        "class": "card_Tethys",
        "icon": tethys,
        "state": "started",
        "cardsModalIcon": modalTethys,
        "history": [
            {
                "stageName": "Swap at least 1 Metis token",
                "state": "inProgress"
            },
            {
                "stageName": "Add Liquidity",
                "state": "inProgress"
            },
            {
                "stageName": "Add Liquidity",
                "state": "inProgress"
            },
            {
                "stageName": "Add Liquidity",
                "state": "inProgress"
            },
            {
                "stageName": "Long at least 0.5 Metis",
                "state": "inProgress"
            }
        ]
    },
    {
        "id": 2,
        "name": "Maia",
        "class": "card_Maia",
        "icon": maia,
        "state": "not_started",
        "cardsModalIcon": modalMaiaDao,
        "history": [
            {
                "stageName": "Swap at least 1 Metis token",
                "state": "completed"
            },
            {
                "stageName": "Add Liquidity",
                "state": "completed"
            },
            {
                "stageName": "Add Liquidity",
                "state": "completed"
            },
            {
                "stageName": "Add Liquidity",
                "state": "inProgress"
            },
            {
                "stageName": "Long at least 0.5 Metis",
                "state": "inProgress"
            }
        ]
    },
    {
        "id": 3,
        "name": "Netswap",
        "class": "card_Netswap",
        "icon": netswap,
        "state": "not_started",
        "cardsModalIcon": modalNetswap,
        "history": [
            {
                "stageName": "Swap at least 1 Metis token",
                "state": "completed"
            },
            {
                "stageName": "Add Liquidity",
                "state": "completed"
            },
            {
                "stageName": "Add Liquidity",
                "state": "completed"
            },
            {
                "stageName": "Add Liquidity",
                "state": "inProgress"
            },
            {
                "stageName": "Long at least 0.5 Metis",
                "state": "inProgress"
            }
        ]
    },
    {
        "id": 4,
        "name": "Hummus",
        "class": "card_Hummus",
        "icon": hummus,
        "state": "completed",
        "cardsModalIcon": modalHummus,
        "history": [
            {
                "stageName": "Swap at least 1 Metis token",
                "state": "completed"
            },
            {
                "stageName": "Add Liquidity",
                "state": "completed"
            }
        ]
    },
    {
        "id": 5,
        "name": "Midas",
        "class": "card_Midas",
        "icon": midas,
        "state": "started",
        "cardsModalIcon": modalMidas,
        "history": [
            {
                "stageName": "Swap at least 1 Metis token",
                "state": "completed"
            },
            {
                "stageName": "Add Liquidity",
                "state": "completed"
            },
            {
                "stageName": "Add Liquidity",
                "state": "completed"
            }
        ]
    },
    {
        "id": 6,
        "name": "League Tech",
        "class": "card_LeagueTech",
        "icon": league,
        "state": "not_started",
        "cardsModalIcon": modalLeagueTech,
        "history": [
            {
                "stageName": "Swap at least 1 Metis token",
                "state": "completed"
            },
            {
                "stageName": "Add Liquidity",
                "state": "completed"
            },
            {
                "stageName": "Add Liquidity",
                "state": "completed"
            },
            {
                "stageName": "Add Liquidity",
                "state": "inProgress"
            },
            {
                "stageName": "Long at least 0.5 Metis",
                "state": "inProgress"
            }
        ]
    }
]

export default cards 