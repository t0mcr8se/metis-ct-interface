import HeaderTokeInfo from '../HeaderTokenInfo/HeaderTokenInfo.tsx'
import styles from './Header.module.css'
import navItems from '../../store/headerNavItems.json'

import logo from '../../assets/images/bluemetis.svg'
import logo_mob from '../../assets/images/logo_mob.svg'
// import arrow_header from '../../assets/images/arrow_down.svg'
import wallet_one from '../../assets/header_icons/wallet_one.svg'
// import token_id from '../../assets/header_icons/wallet_three.svg'
// import light_theme from '../../assets/header_icons/hover.svg'
import xp_icon from '../../assets/header_icons/xp_icon.svg'

const Header = () => {
    return (
        <>
            <div className={styles.header}>
                <div className={styles.header_column}>
                    <div className={styles.header_icon}>
                        <img src={logo} alt="" className={styles.logo_desktop} />
                        <img src={logo_mob} alt="" className={styles.logo_mob}/>
                    </div>
                </div>
                <div className={styles.header_column}>
                    <div className={styles.nav_items}>
                        {navItems.map((item) => {
                            return <div key={item.id} className={styles.nav_item}><a href={item.url}>{item.name}</a></div>
                        })}
                    </div>
                    <div className={styles.wallet_items}>
                        <HeaderTokeInfo icon={wallet_one} type="wallet_block_one" text="36 Metis" />
                        <HeaderTokeInfo icon={xp_icon} type="wallet_block_two" text="142" />
                        {/* <HeaderTokeInfo icon={token_id} type="user_wallet_address" text="0x7C01FB632424Ba62D02367EeD1CD8688D49A7a27" /> */}
                        <w3m-button />
                    </div>
                    {/* <div className="page_theme">
                        <img src={light_theme} alt="" />
                    </div> */}
                </div>
            </div>
        </>
    )
}

export default Header
