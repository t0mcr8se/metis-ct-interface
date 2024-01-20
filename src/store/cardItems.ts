import tethys from '../assets/cards/TethysLogo.svg'
import metis from '../assets/cards/Metis.svg'
import netswap from '../assets/cards/Netswap.svg'
import hummus from '../assets/cards/Hummus.svg'
import midas from '../assets/cards/Midas.svg'
import league from '../assets/cards/LeagueTech.svg'

import modalTethys from '../assets/modal_icons/tethys.svg'
import modalMetis from '../assets/modal_icons/Metis.svg'
import modalNetswap from '../assets/modal_icons/Netswap.svg'
import modalMidas from '../assets/modal_icons/midas.svg'
import modalLeagueTech from '../assets/modal_icons/LeagueTech.svg'
import modalHummus from '../assets/modal_icons/hummus.svg'
import { TG_BOT } from '../constants'

export enum ItemStates {
    STARTED,
    NOT_STARTED,
    COMPLETED,
}


interface ICardHistory {
    stageName: string,
    state: ItemStates
    id: string
}

export type TCards = {
    "id": number,
    "name": string,
    "class": string,
    "icon": string,
    "state": ItemStates,
    "cardsModalIcon": string,
    "history": Array<ICardHistory>,
    "descriptionText": string,
    "url": string
    videoUrl?: string
    buttonText?: string
}

const cards: TCards[] = [
    {
        "id": 1,
        "name": "Claim Test Tokens",
        "class": "card_Metis",
        "icon": metis,
        "state": ItemStates.NOT_STARTED,
        "cardsModalIcon": modalMetis,
        "descriptionText": "Connect your wallet and claim your test tokens, clicking on \"Start Now\" will open a Telegram conversation with the bot that distributes the tokens. It is sufficient to click on \"start\" button and then bot will send you the tokens ",
        "url": TG_BOT,
        // "videoUrl": "",
        buttonText: "Claim",
        "history": [
            {
                "stageName": "Claim tokens from telegram bot (500 pts)",
                "id": "joinId",
                "state": ItemStates.NOT_STARTED
            }
        ]
    },
    {
        "id": 2,
        "name": "Tethys",
        "class": "card_Tethys",
        "icon": tethys,
        "state": ItemStates.NOT_STARTED,
        "cardsModalIcon": modalTethys,
        "descriptionText": "Connect to Tethys and complete the milestones below",
        "url": "https://testnet.tethys.finance/trade",
        "videoUrl": "https://www.youtube.com/embed/QfJkUClIN7E?si=5aNTrOtGMYyixrhF",
        "history": [
            {
                "stageName": "Swap tokens (300 pts)",
                "id": "tethysSwap",
                "state": ItemStates.NOT_STARTED
            },
            {
                "stageName": "Open a long/short position with leverage (400 pts)",
                "id": "tethysPerp",
                "state": ItemStates.NOT_STARTED
            },
            {
                "stageName": "Add TLP liquidity (500 pts)",
                "id": "tethysTLP",
                "state": ItemStates.NOT_STARTED
            }
        ]
    },
    {
        "id": 3,
        "name": "Netswap",
        "class": "card_Netswap",
        "icon": netswap,
        "state": ItemStates.NOT_STARTED,
        "cardsModalIcon": modalNetswap,
        "descriptionText": "Connect to Netswap and complete the milestones below",
        "url": "https://netswap.io",
        // "videoUrl": "https://www.youtube.com/embed/QfJkUClIN7E?si=5aNTrOtGMYyixrhF",
        "history": [
            {
                "stageName": "Swap tokens (300 pts)",
                "id": "netswapSwap",
                "state": ItemStates.NOT_STARTED
            },
            {
                "stageName": "Provide LP (500 pts)",
                "id": "netswapLp",
                "state": ItemStates.NOT_STARTED
            },
        ]
    },
    {
        "id": 4,
        "name": "Hummus",
        "class": "card_Hummus",
        "icon": hummus,
        "state": ItemStates.NOT_STARTED,
        "cardsModalIcon": modalHummus,
        "descriptionText": "Connect to Hummus and complete the milestones below",
        "url": "https://www.hummus.exchange/",
        // "videoUrl": "https://www.youtube.com/embed/QfJkUClIN7E?si=5aNTrOtGMYyixrhF",
        "history": [
            {
                "stageName": "Swap tokens (300 pts)",
                "id": "hummusSwap",
                "state": ItemStates.NOT_STARTED
            },
            {
                "stageName": "Provide LP (500 pts)",
                "id": "hummusLp",
                "state": ItemStates.NOT_STARTED
            }
        ]
    },
    {
        "id": 5,
        "name": "Midas",
        "class": "card_Midas",
        "icon": midas,
        "state": ItemStates.NOT_STARTED,
        "cardsModalIcon": modalMidas,
        "descriptionText": "Connect to Midas and complete the milestones below",
        "url": "https://dev.midas.game/",
        // "videoUrl": "https://www.youtube.com/embed/QfJkUClIN7E?si=5aNTrOtGMYyixrhF",
        "history": [
            {
                "stageName": "Enter a lottery (1000 pts)",
                "id": "midasLottery",
                "state": ItemStates.NOT_STARTED
            }
        ]
    },
    // {
    //     "id": 6,
    //     "name": "League Tech",
    //     "class": "card_LeagueTech",
    //     "icon": league,
    //     "state": ItemStates.NOT_STARTED,
    //     "cardsModalIcon": modalLeagueTech,
    //     "descriptionText": "Connect to LeagueTech and complete the milestones below",
    //     "url": "https://dev.league.tech/",
    //     // "videoUrl": "https://www.youtube.com/embed/QfJkUClIN7E?si=5aNTrOtGMYyixrhF",
    //     "history": [
    //         {
    //             "stageName": "Trade (buy/sell) shares (1000 pts)",
    //             "id": "leagueBuy",
    //             "state": ItemStates.NOT_STARTED
    //         },
    //         {
    //             "stageName": "Buy a sub (1000 pts)",
    //             "id": "leagueSub",
    //             "state": ItemStates.NOT_STARTED
    //         }
    //     ]
    // }
]

export default cards 