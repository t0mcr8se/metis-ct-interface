import Header from './components/Header.tsx'
import SliderMain from './components/SliderMain.tsx'
import BigButtonPrimary from './components/BigButtonPrimary.tsx'
import Cards from './components/Cards.tsx'
import Footer from './components/Footer.tsx'
import './App.css'
import './assets/styles/first_screen.css'
import './assets/styles/second_sreen.css'
import './assets/styles/third_screen.css'

function App() {

    return (
        <>
            <div className="first_screen">
                <Header />
                <div className="content">
                    <div className="container">
                        <SliderMain />
                        <div className="main_info">
                            <div className="season_title">Season One</div>
                            <div className="info_text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </div>
                        </div>
                        <div className="btn_wrapper">
                            <button className="unstyled_btn">Connect your Wallet</button>
                        </div>
                        <BigButtonPrimary />
                    </div>
                </div>
            </div>
            <div id="second_screen">
                <div className="container">
                    <div className="title">Ecosystem dApps</div>
                    <Cards />
                </div>
            </div>
            <div id="third_screen">
                <div className="container">
                    <div className="big_btn big_btn_unstyled">
                        <div className="big_btn_name">
                            <span>Share on Twitter X</span>
                            <img src="./assets/arrow_right_black.svg" alt="" />
                        </div>
                        <div>
                            <img src="./assets/twitter.svg" alt="" />
                        </div>
                    </div>
                    <br />
                    <br />
                    <br />
                    <br />
                    <div className="season_title season_gray">Season Two</div>
                    <div className="season_two_subtitle">COMING SOON</div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default App
