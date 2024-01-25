import TitleOne from '../TitleOne/TitleOne.tsx'
import styles from './SeasonTwo.module.css'
import twitterButton from '../../assets/images/twitter.svg'
import BigButtonUnstyled from '../BigButtonUnstyled/BigButtonUnstyled'
import { useAccount } from 'wagmi'
import { useCompleted } from '../../hooks/useMilestones.ts'
import S2Status from '../S2Status/S2Status.tsx'
import { Wheel } from '../Wheel/Loadable.ts'
import wheelItems from '../../store/wheelItems.ts'
// import styled from "styled-components";

// const WheelComponent = () => {
//   return (
//     <StyledDiv>
//       <h1>Spin the wheel now and get rewarded</h1>
//       {/* <img alt="Image 1" />
//       <img alt="Image 2" />
//       <img alt="Image 3" /> */}
//     </StyledDiv>
//   );
// };

// export default WheelComponent;

function SeasonTwo() {
    const {address} = useAccount()
    const isCompleted = useCompleted(address)
    
    return (
        <>
            <div className={styles.season_two}>
                <div className="container">
                    {isCompleted && <BigButtonUnstyled buttonText='' buttonIcon={twitterButton} />}
                    <TitleOne text='Season Two' titleType='white' />
                    <div className={styles.season_two_subtitle}>Spin the wheel now and get rewarded</div>
                    <S2Status />
                    <Wheel items={wheelItems} />
                </div>
            </div>
        </>
    )
}


export default SeasonTwo