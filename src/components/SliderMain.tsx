
import slider_one from '../assets/images/slider_one.jpg'
import gradient from '../assets/images/gradient.png'

function SliderMain() {
    return (
        <>
            <div className="main_carousel">
                <div className="main_img">
                    <img src={slider_one} alt="" />
                    <img src={gradient} className="main_gradient" alt="" />
                </div>
            </div>
        </>
    )
}

export default SliderMain
