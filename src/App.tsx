import Header from './components/Header.tsx'
import SeasonOne from './components/SeasonOne.tsx'
import SeasonTwo from './components/SeasonTwo.tsx'
import Ecosystem from './components/Ecosystem.tsx'
import CardModal from './components/CardModal.tsx'
import Footer from './components/Footer.tsx'
import './App.css'
import './assets/styles/first_screen.css'

function App() {

    return (
        <>
            <Header />
            <div className='empty_space'></div>
            <SeasonOne />
            <Ecosystem />
            <SeasonTwo />
            <Footer />
            <CardModal />
        </>
    )
}

export default App
