import Cards from './Cards.tsx'
import '../assets/styles/ecosystem.css'


function Ecosystem() {

    return (
        <>
            <div id="second_screen">
                <div className="container">
                    <div className="title">Ecosystem dApps</div>
                    <Cards />
                </div>
            </div>
        </>
    )
}

export default Ecosystem