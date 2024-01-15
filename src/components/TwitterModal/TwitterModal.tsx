import { Dispatch, FC, SetStateAction, useEffect, useRef } from 'react'

import { useClickOutside } from '../../hooks/useClickOutside.ts'
import close from '../../assets/images/close_icon.svg'
import styles from './TwitterModal.module.css'
import { useAccount } from 'wagmi'
import metis from '../../assets/modal_icons/Metis.svg'
import { Share } from 'react-twitter-widgets'

interface ITwitterModal {
    openedModal: boolean,
    closeModal: () => void,
    setOpenedModal: Dispatch<SetStateAction<boolean>>,
}

const TWITTER_TEXT=`I just completed Season 1 of Community Testing for the #Metis Decentralized Sequencer and it was EPIC!

I will keep testing DApps and earning points to get rewards!
%ADDRESS
Have you joined yet?!`

const TwitterModal: FC<ITwitterModal> = ({ 
    openedModal, 
    closeModal, 
    setOpenedModal, 
}) => {
    const refModal = useRef(null)
    const {address} = useAccount()
    useClickOutside(refModal, setOpenedModal)

    useEffect(() => {
        if (openedModal) {
            document.body.style.overflow = 'hidden'
        }
    }, [openedModal])

    return openedModal && (
        <>
            <div className={styles.card_modal}>
                <div ref={refModal} className={styles.modal_body}>
                    <div className={styles.modal_header}>
                        <div className={styles.modal_header_close} onClick={closeModal}>
                            <img src={close} alt="" />
                        </div>
                    </div>
                    <div className={styles.modal_content}>
                        <div className={styles.modal_title}>
                            <img src={metis} alt="" />
                        </div>
                        <div className={styles.modal_text}>
                            <p>Share your accomplishment on X to gain 5000 XP! [Optional]</p>
                            <p>Click on the Post button and don't change anything in the post to make sure our indexers catch your address for adding the points</p>
                            <p>The points will be added at any time during community testing</p>
                            <p>Note: Please make sure that the address in the tweet is the same address that you're using in community testing</p>
                        </div>
                        
                    </div>
                    <center>{address && <Share 
                            url="https://decentralize.metis.io"
                            options={{
                                hashtags: "MetisCommunityTesting",
                                text: TWITTER_TEXT.replace('%ADDRESS', address),
                                size: "large"
                            }}
                        />}</center>
                </div>
            </div>
        </>
    )

}

export default TwitterModal