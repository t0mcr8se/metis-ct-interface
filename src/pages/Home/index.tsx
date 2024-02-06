import Header from '../../components/Header/Header.tsx'
import SeasonOne from '../../components/SeasonOne/SeasonOne.tsx'
import SeasonTwo from '../../components/SeasonTwo/SeasonTwo.tsx'
// import Ecosystem from '../../components/Ecosystem/Ecosystem.tsx'
import Footer from '../../components/Footer/Footer.tsx'

import './Home.css';

export default function Home() {
    return (
        <>
            <div className="season_one">
                <Header />
                <SeasonOne />
            </div>
            {/* <Ecosystem /> */}
            <SeasonTwo />
            <Footer />
        </>
    )
}