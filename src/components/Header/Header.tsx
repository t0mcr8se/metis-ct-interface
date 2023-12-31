import styles from './Header.module.css'
import logo from '../../assets/images/bluemetis.svg'
import logo_mob from '../../assets/images/logo_mob.svg'
import arrow_header from '../../assets/images/arrow_down.svg'
import wallet_one from '../../assets/header_icons/wallet_one.svg'
import token_id from '../../assets/header_icons/wallet_three.svg'
// import light_theme from '../../assets/header_icons/hover.svg'
import xp_icon from '../../assets/header_icons/xp_icon.svg'

function Header() {
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
                        <div className={styles.nav_item}><a href="#">Developer</a></div>
                        <div className={styles.nav_item}><a href="#">Ecosystem</a></div>
                        <div className={styles.nav_item}><a href="#">Governance</a></div>
                        <div className={styles.nav_item}><a href="#">Company</a></div>
                        <div className={styles.nav_item}><a href="#">Bridge</a></div>
                        <div className={styles.nav_item}><a href="#">More</a></div>
                    </div>
                    <div className={styles.wallet_items}>
                        <div className={`${styles.wallet_item} ${styles.wallet_block_one}`}>
                            <img src={wallet_one} className={styles.header_arrow} alt="" />
                            <div className={styles.wallet_content}>36 Metis</div>
                        </div>
                        <div className={`${styles.wallet_item} ${styles.wallet_block_two}`}>
                            <img src={xp_icon} className={styles.wallet_icon} alt="" />
                            <div className={styles.wallet_content}>142</div>
                        </div>
                        <div className={`${styles.wallet_item} ${styles.wallet_block_three}`}>
                            <img src={token_id} className={styles.wallet_icon} alt="" />
                            <div className={styles.wallet_content}>0x8e...c06c</div>
                        </div>
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
