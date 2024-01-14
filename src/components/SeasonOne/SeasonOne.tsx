// import { useState } from 'react'

import TitleOne from '../TitleOne/TitleOne.tsx'
import SliderMain from '../SliderMain/SliderMain.tsx'
import styles from './SeasonOne.module.css'
import { useAccount } from 'wagmi'


function SeasonOne() {
    // const [ claimTokenDisabled, disableClaimButton ] = useState(false)
    const { isConnected, isConnecting } = useAccount()

    return (
        <>
            <div className={styles.content}>
                <div className="container">
                    <SliderMain />
                    <div className={styles.main_info}>
                        <TitleOne text='Season One' titleType='white' />
                        <div className={styles.info_text}>
                            <p>Community Testing will be a period where users will be able to contribute to the testing for our upcoming decentralized sequencer. It will be divided in three (2) Seasons: Season 1, and Season 2.</p>
                            <p>
                            For Season 1, specifically, users will be able to explore dApps, existing and new, on our Sepolia testnet. By completing the different activities, users will earn points that will be claimable at the end of this testing period!
                            </p>
                            <p>
                            This page will provide provide you everything you need to succeed 👇
                            </p>
                        </div>
                    </div>
                    <div className='mb-10 sm:mb-14 md:mb-20'></div>
                    <center>{(!isConnected || !isConnecting) && <w3m-button />}</center>
                    
                    <div className='mb-10 sm:mb-14 md:mb-20'></div>
                    {/* <BigButtonPrimary /> */}
                </div>
            </div>
        </>
    )
}

export default SeasonOne