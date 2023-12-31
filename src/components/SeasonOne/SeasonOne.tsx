import TitleOne from '../TitleOne/TitleOne.tsx'
import SliderMain from '../SliderMain/SliderMain.tsx'
import BigButtonPrimary from '../BigButtonPrimary/BigButtonPrimary.tsx'
import Button from '../ButtonSmall/ButtonSmall.tsx'
import styles from './SeasonOne.module.css'


function SeasonOne() {
    return (
        <>
            <div className={styles.content}>
                <div className="container">
                    <SliderMain />
                    <div className={styles.main_info}>
                        <TitleOne text='Season One' titleType='white' />
                        <div className={styles.info_text}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </div>
                    </div>
                    <div className='mb-10 sm:mb-14 md:mb-20'></div>
                    <Button type="unstyled_btn" text="Connect your Wallet" />
                    <div className='mb-10 sm:mb-14 md:mb-20'></div>
                    <BigButtonPrimary />
                </div>
            </div>
        </>
    )
}

export default SeasonOne