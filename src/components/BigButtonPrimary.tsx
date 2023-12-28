
import arrow_right_white from '../assets/images/arrow_right_white.svg'
import token_gradient from '../assets/images/tokens_gradient.svg'
import token_icon from '../assets/images/tokens_2.svg'

function BigButtonPrimary() {

    return (
        <>
            <div className="big_btn big_btn_primary">
                <div className="big_btn_name">
                    <span>Claim your tokens</span>
                    <img src={arrow_right_white} alt="" />
                </div>
                <div>
                    <img src={token_gradient} alt="" className="big_btn_absolute" />
                    <img src={token_icon} alt="" className="big_btn_absolute" />
                </div>
            </div>

        </>
    )
}

export default BigButtonPrimary
