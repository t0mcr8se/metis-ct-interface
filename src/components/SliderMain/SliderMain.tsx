
import styles from './SliderMain.module.css'
import slider_one from '../../assets/images/slider_one.jpg'
import gradient from '../../assets/images/gradient.png'
import mob_main from '../../assets/images/mob_main.jpg'


function SliderMain() {
    return (
        <>
            <div className={`main_carousel mb-8 sm:mb-12 md:mb-20 lg:mb-24`}>
                <div className={styles.main_img}>
                    <img src={slider_one} alt="" />
                    <img src={gradient} className={styles.main_gradient} alt="" />
                </div>
                {/* <div className="main_img">
                    <img src={mob_main} alt="" />
                </div> */}
            </div>

        </>
    )
}

export default SliderMain
