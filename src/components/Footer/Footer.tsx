// import '../assets/styles/footer.css'
import styles from './Footer.module.css'
import logo from '../../assets/images/bluemetis.svg'
import twitter from '../../assets/footer_icons/twitter.svg'
import telegram from '../../assets/footer_icons/telegram.svg'
import medium from '../../assets/footer_icons/medium.svg'
import discord from '../../assets/footer_icons/discord.svg'
import github from '../../assets/footer_icons/github.svg'
import youtube from '../../assets/footer_icons/youtube.svg'
import { DISCORD_URL, GITHUB_URL, MEDIUM_URL, METIS_URL, TELEGRAM_URL, TWITTER_URL, YOUTUBE_URL } from '../../constants'

function Footer() {

    return (
        <>
            <div className={styles.footer}>
                <div className="container">
                    <div className={styles.footer_content}>
                        <div className={styles.footer_column}>
                            <div className={styles.footer_logo}>
                                <a href={METIS_URL} target="_blank">
                                    <img src={logo} alt="" />
                                </a>
                            </div>
                        </div>
                        <div className={styles.footer_column}>
                            <div className={styles.footer_icons}>
                                <div className={styles.footer_icon}>
                                    <a href={TWITTER_URL} target="_blank">
                                        <img src={twitter} alt="" />
                                    </a>
                                </div>
                                <div className={styles.footer_icon}>
                                    <a href={TELEGRAM_URL}>
                                        <img src={telegram} alt="" />
                                    </a>
                                </div>
                                <div className={styles.footer_icon}>
                                    <a href={MEDIUM_URL}>
                                        <img src={medium} alt="" />
                                    </a>
                                </div>
                                <div className={styles.footer_icon}>
                                    <a href={DISCORD_URL}>
                                        <img src={discord} alt="" />
                                    </a>
                                </div>
                                <div className={styles.footer_icon}>
                                    <a href={GITHUB_URL}>
                                        <img src={github} alt="" />
                                    </a>
                                </div>
                                <div className={styles.footer_icon}>
                                    <a href={YOUTUBE_URL}>
                                        <img src={youtube} alt="" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
