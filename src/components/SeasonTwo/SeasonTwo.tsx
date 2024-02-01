import TitleOne from '../TitleOne/TitleOne.tsx'
import styles from './SeasonTwo.module.css'
import twitterButton from '../../assets/images/twitter.svg'
import BigButtonUnstyled from '../BigButtonUnstyled/BigButtonUnstyled'
import { useAccount, useChainId, useNetwork, useSwitchNetwork } from 'wagmi'
import { useCompleted } from '../../hooks/useMilestones.ts'
import S2Status from '../S2Status/S2Status.tsx'
import { Wheel } from '../Wheel/Loadable'
import { useSpinningWheelItems } from '../../hooks/useSpinningContract.ts'
import { metis_sepolia } from '../../config.ts'


function SeasonTwo() {
    const {address} = useAccount()
    const {chain} = useNetwork()

    const isCompleted = useCompleted(address)
    const wheelItems = useSpinningWheelItems()
    
    return (
        <>
            <div className={styles.season_two}>
                <div className="container">
                    {isCompleted && <BigButtonUnstyled buttonText='' buttonIcon={twitterButton} />}
                    
                        {!chain ? (<><w3m-connect-button/></>): 
                            chain.id !== metis_sepolia.id ? (<><h2>Switch network to Metis Sepolia: <w3m-network-button /></h2></>):
                            (<><TitleOne text='Season Two' titleType='white' />
                            <div className={styles.season_two_subtitle}>Spin the wheel now and get rewarded</div>
                            <S2Status />
                            <Wheel items={wheelItems} />
                            </>)
                        }
                </div>
            </div>
        </>
    )
}


export default SeasonTwo