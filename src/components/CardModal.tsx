import '../assets/styles/modal.css'
import done from '../assets/images/done_icon.svg'
import close from '../assets/images/close_icon.svg'
import token_image from '../assets/images/Tethys.svg'
import video from '../assets/images/video.png'
import StateBlock from './StateBlock.tsx'
import Button from './Button.tsx'


function CardModal() {
    return (
        <>
            <div className="card_modal hidden">
                <div className="modal_body">
                    <div className="modal_header">
                        <div className="modal_header_state">
                            <StateBlock type='card_used state_done' text="Done" icon={done} />
                        </div>
                        <div className="modal_header_close" onClick={closeModal}>
                            <img src={close} alt="" />
                        </div>
                    </div>
                    <div className="modal_content">
                        <div className="modal_title">
                            <img src={token_image} alt="" />
                        </div>
                        <div className="modal_text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </div>
                    </div>
                    <div className="modal_video">
                        <img src={video} alt="" />
                    </div>
                    <Button type="small_button black_btn" text="Start Now" />
                    {/* <div className="modal_button"></div> */}
                </div>
            </div>
        </>
    )
}

function closeModal() {
    document.querySelector('.card_modal')?.classList.add('hidden')
}

export default CardModal