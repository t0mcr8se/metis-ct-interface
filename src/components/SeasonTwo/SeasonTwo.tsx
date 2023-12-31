import TitleOne from '../TitleOne/TitleOne.tsx'
import styles from './SeasonTwo.module.css'
import twitterButton from '../../assets/images/twitter.svg'
import BigButtonUnstyled from '../BigButtonUnstyled/BigButtonUnstyled'


function SeasonTwo() {
    
    return (
        <>
            <div className={styles.season_two}>
                <div className="container">
                    <BigButtonUnstyled buttonText='' buttonIcon={twitterButton} />
                    <TitleOne text='Season Two' titleType='gray' />
                    {/* <div className={`${styles.season_title} ${styles.season_gray}`}>Season Two</div> */}
                    <div className={styles.season_two_subtitle}>COMING SOON</div>
                </div>
            </div>
        </>
    )
}


export default SeasonTwo