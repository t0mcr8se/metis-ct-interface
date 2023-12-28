

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
                <div className="card card_Tethys">
                    <div className="card_column">
                        <div className="card_name">Tethys</div>
                        <img src={arrow_right_white} alt="" />
                    </div>
                    <div className="card_column">
                        <img src={tethys} alt="" />
                    </div>
                </div>
                <div className="card card_Unidex">
                    <div className="card_column">
                        <div className="card_name">Unidex</div>
                        <img src={arrow_right_white} alt="" />
                    </div>
                    <div className="card_column">
                        <img src={unidex} alt="" />
                    </div>
                </div>
                <div className="card card_Maia">
                    <div className="card_column">
                        <div className="card_name">Maia</div>
                        <img src={arrow_right_white} alt="" />
                    </div>
                    <div className="card_column">
                        <img src={maia} alt="" />
                    </div>
                </div>
                <div className="card card_Netswap">
                    <div className="card_column">
                        <div className="card_name">Netswap</div>
                        <img src={arrow_right_white} alt="" />
                    </div>
                    <div className="card_column">
                        <img src={netswap} alt="" />
                    </div>
                </div>
                <div className="card card_Hummus">
                    <div className="card_column">
                        <div className="card_name">Hummus</div>
                        <img src={arrow_right_white} alt="" />
                    </div>
                    <div className="card_column">
                        <img src={hummus} alt="" />
                    </div>
                </div>
                <div className="card card_Midas">
                    <div className="card_column">
                        <div className="card_name">Midas</div>
                        <img src={arrow_right_white} alt="" />
                    </div>
                    <div className="card_column">
                        <img src={midas} alt="" />
                    </div>
                </div>
                <div className="card card_LeagueTech">
                    <div className="card_column">
                        <div className="card_name">League Tech</div>
                        <img src={arrow_right_white} alt="" />
                    </div>
                    <div><img src={league} alt="" /></div>
                </div>
            </div>
        </>
    )
}

export default Cards
