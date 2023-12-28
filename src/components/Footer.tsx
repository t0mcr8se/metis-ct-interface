import '../assets/styles/footer.css'

import logo from '../assets/images/bluemetis.svg'
import twitter from '../assets/footer_icons/twitter.svg'
import telegram from '../assets/footer_icons/telegram.svg'
import medium from '../assets/footer_icons/medium.svg'
import discord from '../assets/footer_icons/discord.svg'
import github from '../assets/footer_icons/github.svg'
import youtube from '../assets/footer_icons/youtube.svg'


function Footer() {
    return (
        <>
            <div className="footer">
                <div className="container">
                    <div className="footer_content">
                        <div className="footer_column">
                            <div className="footer_icon">
                                <img src={logo} alt="" />
                            </div>
                            <div className="footer_items">
                                <div className="footer_item"><a href="#">Platform</a></div>
                                <div className="footer_item"><a href="#">Knowledge</a></div>
                                <div className="footer_item"><a href="#">Carrers</a></div>
                                <div className="footer_item"><a href="#">Search</a></div>
                                <div className="footer_item"><a href="#">Subscribe</a></div>
                                <div className="footer_item"><a href="#">Community</a></div>
                                <div className="footer_item"><a href="#">Company</a></div>
                                <div className="footer_item"><a href="#">Ecosystem</a></div>
                                <div className="footer_item"><a href="#">Terms & conditions</a></div>
                                <div className="footer_item"><a href="#">Contact</a></div>
                            </div>
                        </div>
                        <div className="footer_column">
                            <div className="footer_icons">
                                <div className="footer_icon"><img src={twitter} alt="" /></div>
                                <div className="footer_icon"><img src={telegram} alt="" /></div>
                                <div className="footer_icon"><img src={medium} alt="" /></div>
                                <div className="footer_icon"><img src={discord} alt="" /></div>
                                <div className="footer_icon"><img src={github} alt="" /></div>
                                <div className="footer_icon"><img src={youtube} alt="" /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
