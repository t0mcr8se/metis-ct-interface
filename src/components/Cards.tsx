

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
    return (
        <>
            <div className="cards">
                <CardItem name="Tethys" class="card_Tethys" arrow={arrow_right_white} icon={tethys} />
                <CardItem name="Unidex" class="card_Unidex" arrow={arrow_right_white} icon={unidex} />
                <CardItem name="Maia" class="card_Maia" arrow={arrow_right_white} icon={maia} />
                <CardItem name="Netswap" class="card_Netswap" arrow={arrow_right_white} icon={netswap} />
                <CardItem name="Hummus" class="card_Hummus" arrow={arrow_right_white} icon={hummus} />
                <CardItem name="Midas" class="card_Midas" arrow={arrow_right_white} icon={midas} />
                <CardItem name="League Tech" class="card_LeagueTech" arrow={arrow_right_white} icon={league} />
            </div>
        </>
    )
}

export default Cards
