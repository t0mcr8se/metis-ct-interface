import '../assets/styles/header.css'
import logo from '../assets/images/bluemetis.svg'
import logo_mob from '../assets/images/logo_mob.svg'
import arrow_header from '../assets/images/arrow_down.svg'
import token_id from '../assets/header_icons/wallet_three.svg'
import light_theme from '../assets/header_icons/hover.svg'
import xp_icon from '../assets/header_icons/xp_icon.svg'

function Header() {
    return (
        <>
            <div className="header">
                <div className="header_column">
                    <div className="header_icon">
                        <img src={logo} alt="" className='logo_desktop' />
                        <img src={logo_mob} alt="" className='logo_mob'/>
                    </div>
                </div>
                <div className="header_column">
                    <div className="nav_items">
                        <div className="nav_item"><a href="#">Developer</a></div>
                        <div className="nav_item"><a href="#">Ecosystem</a></div>
                        <div className="nav_item"><a href="#">Governance</a></div>
                        <div className="nav_item"><a href="#">Company</a></div>
                        <div className="nav_item"><a href="#">Bridge</a></div>
                        <div className="nav_item"><a href="#">More</a></div>
                    </div>
                    <div className="wallet_items">
                        <div className="wallet_item wallet_block_one">
                            <img src={arrow_header} className="header_arrow" alt="" />
                            <div className="wallet_content">36 Metis</div>
                        </div>
                        <div className="wallet_item wallet_block_two">
                            <img src={xp_icon} className="wallet_icon" alt="" />
                            <div className="wallet_content">142</div>
                        </div>
                        <div className="wallet_item wallet_block_three">
                            <img src={token_id} className="wallet_icon" alt="" />
                            <div className="wallet_content">0x8e...c06c</div>
                        </div>
                    </div>
                    <div className="page_theme">
                        <img src={light_theme} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header
