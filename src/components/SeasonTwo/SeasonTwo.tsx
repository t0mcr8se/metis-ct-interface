import CheckIcon from "../CheckIcon/CheckIcon.tsx";

// import twitterButton from '../../assets/images/twitter.svg'
// import BigButtonUnstyled from '../BigButtonUnstyled/BigButtonUnstyled'
// import { useNetwork } from 'wagmi'
// import { useCompleted } from '../../hooks/useMilestones.ts'
// import S2Status from '../S2Status/S2Status.tsx'
// import { Wheel } from '../Wheel/Wheel'
// import { useSpinningWheelItems } from '../../hooks/useSpinningContract.ts'
// import { metis_sepolia } from '../../config.ts'
// import Cards from '../CardItems/CardItems.tsx'

function SeasonTwo() {
  // const {address} = useAccount()
  // const {chain} = useNetwork()

  // const isCompleted = useCompleted(address)
  // const wheelItems = useSpinningWheelItems()

  return (
    <>
      <div
        className="relative rounded-[20px] pt-5 pb-10 px-4 w-full bg-[linear-gradient(94.15deg,#003A92_100%,#002256_100%)] shadow-[0px_0px_50px_0px_#0094FF80_inset] flex flex-col items-center gap-1"
        id="szn2"
      >
        {/* {isCompleted && <BigButtonUnstyled buttonText='' buttonIcon={twitterButton} />} */}
        <h1 className="text-white text-center font-raleway font-semibold text-6xl leading-none tracking-wide">
          Season Two
        </h1>
        <p className="font-raleway font-medium text-md text-center mb-2">
          Thank you to all Metis community testers! Season 2 of community
          testing has ended.
        </p>
        <p className="font-raleway font-medium text-2xl text-center">
          Your participation is invaluable. Keep earning those points!
        </p>

        {/* <NotesCard></NotesCard> */}
        {/* <TitleOne text='Season Two' titleType='white' /> 
                    <center>
                    <p> Thank you to all Metis community testers! Season 2 of community testing has ended. </p>
                    <p> Your participation is invaluable! More details will come on how to earn more points </p>

                    </center> */}
        {/* <div className={styles.info_text}>
                        {!chain ? (<p>Connect your wallet</p>): chain.id!==metis_sepolia.id ? (<p>Switch network to Metis sepolia by clicking the button below and choosing Metis Sepolia in the popup and confirming the network switch in you wallet</p>):(<></>)}
                    </div>
                    {!chain ? (<center><w3m-connect-button/></center>): 
                        chain.id !== metis_sepolia.id ? (<center><w3m-network-button /></center>):
                        (<>
                        <div className={styles.season_two_subtitle}>Spin the wheel now and get rewarded</div>
                        <S2Status />
                        <Wheel items={wheelItems} />
                        <br />
                        <Cards season={2} />
                        </>)
                    } */}
        <CheckIcon
          className="absolute bottom-0 left-[50%] translate-x-[-50%] translate-y-[50%]"
          color="#00D2FF"
        />
      </div>
    </>
  );
}

export default SeasonTwo;
