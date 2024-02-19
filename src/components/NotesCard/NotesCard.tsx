// import BigButtonPrimary from '../BigButtonPrimary/BigButtonPrimary.tsx'
import TitleOne from '../TitleOne/TitleOne.tsx'
import styles from './NotesCard.module.css'


function NotesCard() {
    return (
        <>
            <div className={styles.content}>
                <div className="container">
                    <div className={styles.main_info}>
                        <TitleOne text='Notes' titleType='white' />
                        <div className={styles.info_text}>
                            <p>
                                1)- Any Season 1 or Season 2 activities done after Sunday 18th February 2024 23:59 EST won't be added to the final score

                            </p>
                            <p>
                                <b>
                                2)- You can increase your chances by taking part in mainnet activities on <a href="https://layer3.xyz/collections/introduction-to-metis" target="_blank">Layer3.xyz</a> 
                                </b>
                            </p>
                            <p>
                                3)- The score might be unavailable or inaccurate during the next couple of days due to reindexing and calculating the final scores of players.
                            </p>
                            <p>
                                4)- Once the scores are finalized, you will be able to claim<sup>*</sup> an NFT on mainnet that makes you eligible for a gift
                            </p>
                            <p>
                                *- You will be able to claim an NFT if no botting or sybil activity was detected on your account
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default NotesCard