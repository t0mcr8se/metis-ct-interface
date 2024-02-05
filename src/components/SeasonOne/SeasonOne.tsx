import BigButtonPrimary from '../BigButtonPrimary/BigButtonPrimary.tsx'
import TitleOne from '../TitleOne/TitleOne.tsx'
import styles from './SeasonOne.module.css'


function SeasonOne() {
    return (
        <>
            <div className={styles.content}>
                <div className="container">
                    <div className={styles.main_info}>
                        <TitleOne text='Season One' titleType='white' />
                        <div className={styles.info_text}>
                            <p>
                                Season one of community testing has ended.
                            </p>
                            <p>
                                Thank you for taking part! We hope you enjoyed the journey
                            </p>
                            <p>
                                Good luck with season 2 
                            </p>
                        </div>
                    </div>
                    <div className='mb-10 sm:mb-14 md:mb-20'></div>
                    <center></center>
                    
                    <div className='mb-10 sm:mb-14 md:mb-20'></div>
                    <BigButtonPrimary />
                </div>
            </div>
        </>
    )
}

export default SeasonOne