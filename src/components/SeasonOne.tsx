import SliderMain from './SliderMain.tsx'
import BigButtonPrimary from './BigButtonPrimary.tsx'
import Button from './Button.tsx'

function SeasonOne() {
    return (
        <>
            <div className="content">
                <div className="container">
                    <SliderMain />
                    <div className="main_info">
                        <div className="season_title">Season One</div>
                        <div className="info_text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </div>
                    </div>
                    <Button type="small_button unstyled_btn" text="Connect your Wallet" />
                    {/* margin-bottom: 60px */}
                    <br />
                    <br />
                    <br />
                    <br />
                    <BigButtonPrimary />
                </div>
            </div>
        </>
    )
}

export default SeasonOne