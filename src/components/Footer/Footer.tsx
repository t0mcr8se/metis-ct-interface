// import '../assets/styles/footer.css'
import styles from './Footer.module.css'
import logo from '../../assets/images/bluemetis.svg'
import twitter from '../../assets/footer_icons/twitter.svg'
import telegram from '../../assets/footer_icons/telegram.svg'
import medium from '../../assets/footer_icons/medium.svg'
import discord from '../../assets/footer_icons/discord.svg'
import github from '../../assets/footer_icons/github.svg'
import youtube from '../../assets/footer_icons/youtube.svg'
import footerNav from '../../store/footerNavItems.json'

function Footer() {

    return (
        <>
            <div className={styles.footer}>
                <div className="container">
                    <div className={styles.footer_content}>
                        <div className={styles.footer_column}>
                            <div className={styles.footer_logo}>
                                <img src={logo} alt="" />
                            </div>
                            <div className={styles.footer_items}>
                                {footerNav.map((item) => {
                                    return <div key={item.id} className={styles.footer_item}><a href={item.url}>{item.name}</a></div>
                                })}
                            </div>
                        </div>
                        <div className={styles.footer_column}>
                            <div className={styles.footer_icons}>
                                <div className={styles.footer_icon}><img src={twitter} alt="" /></div>
                                <div className={styles.footer_icon}><img src={telegram} alt="" /></div>
                                <div className={styles.footer_icon}><img src={medium} alt="" /></div>
                                <div className={styles.footer_icon}><img src={discord} alt="" /></div>
                                <div className={styles.footer_icon}><img src={github} alt="" /></div>
                                <div className={styles.footer_icon}><img src={youtube} alt="" /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
