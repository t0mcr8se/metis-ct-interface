import TitleOne from '../TitleOne/TitleOne.tsx'
import styles from './SeasonTwo.module.css'
import twitterButton from '../../assets/images/twitter.svg'
import BigButtonUnstyled from '../BigButtonUnstyled/BigButtonUnstyled'
import { useAccount, useNetwork } from 'wagmi'
import { useCompleted } from '../../hooks/useMilestones.ts'
import S2Status from '../S2Status/S2Status.tsx'
import { Wheel } from '../Wheel/Wheel'
import { useSpinningWheelItems } from '../../hooks/useSpinningContract.ts'
import { metis_sepolia } from '../../config.ts'
import Cards from '../CardItems/CardItems.tsx'


function SeasonTwo() {
    const {address} = useAccount()
    const {chain} = useNetwork()

    const isCompleted = useCompleted(address)
    const wheelItems = useSpinningWheelItems()
    
    return (
        <>
            <div className={styles.season_two} id="szn2">
                <div className="container">
                    {isCompleted && <BigButtonUnstyled buttonText='' buttonIcon={twitterButton} />}
                    <TitleOne text='Season Two' titleType='white' /> 
                    <div className={styles.info_text}>
                        {!chain ? (<p>Connect your wallet</p>): chain.id!==metis_sepolia.id ? (<p>Switch network to Metis sepolia by clicking the button below and choosing Metis Sepolia in the popup and confirming the network switch in you wallet</p>):(<></>)}
                    </div>
                    {!chain ? (<center><w3m-connect-button/></center>): 
                        chain.id !== metis_sepolia.id ? (<center><w3m-network-button /></center>):
                        (<>
                        <div className={styles.season_two_subtitle}>Spin the wheel now and get rewarded</div>
                        <S2Status />
                        <Wheel items={wheelItems} />
                        <br />
                        <Cards season={2} />
                        </>)
                    }
                </div>
            </div>
        </>
    )
}


export default SeasonTwo