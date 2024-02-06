import { useState, useRef, useMemo, useEffect } from 'react';
import './wheel.css';
import Arrow from './arrow.svg';
import Ellipse from './Ellipse.svg';
import {
  customStyle,
  getWheelVars,
} from '../../utils/helper';
import { arrowStyles, leftEllipseStyles, rightEllipseStyles } from './styles';
import { useSpinWheel } from '../../hooks/useSpinningContract';
import TxModal, { TxModalType } from '../TxModal/TxModal';
import { formatEther } from 'viem';


export function Wheel ({ items }: {items: string[]}) {
  const boxRef = useRef(null);
  const [isSpun, setIsSpun] = useState(false)
  const [spinningDuration, setSpinningDuration] = useState(1000)
  const [numSpins, setNumSpins] = useState(5000)

  const [modalType, setModalType] = useState(TxModalType.FAIL)
  const [content, setContent] = useState("")
  const [openedModal, setOpenedModal] = useState(false)

  const {
    spinWheel,
    isLoading,
    isFetchLoading,
    isRefetching,
    isError,
    isIdle,
    isFetchIdle,
    spinResultIndex: selectedItem,
    error,
    fetchingError,
    isFetchError,
    isSuccess,
    data: txHash,
    isFetchSuccess,
    tokensAdded,
    pointsAdded
  } = useSpinWheel()

  const selectItem = () => {
    if(isFetchLoading || isRefetching || isLoading)
      return

    if(isSpun) 
      return setIsSpun(false)
    
    setSpinningDuration(1000)
    setNumSpins(5000)
    setIsSpun(true)
    spinWheel()
  };

  const wheelVars = useMemo(() => {
    return getWheelVars(items.length, selectedItem, spinningDuration, numSpins)
  }, [selectedItem, items.length, numSpins, spinningDuration])

  useEffect(() => {
    if(isSpun && isError && isIdle && isFetchIdle && !isLoading && !isFetchLoading && !isRefetching) {
      setIsSpun(false)
      setNumSpins(0)
      setSpinningDuration(1)
    }
    if(!isLoading && !isFetchLoading && !isRefetching && isSpun){
      setNumSpins(0)
      setSpinningDuration(1)
    }
  }, [isSpun, isLoading, isFetchLoading, isRefetching, isError, isIdle, isFetchIdle])

  const spinning = useMemo(() => {
    return isSpun || isLoading || isFetchLoading || isRefetching ? 'spinning' : '';
  }, [isSpun, isLoading, isFetchLoading, isRefetching])

  useEffect(() => {
    if(isError) {
      setContent(`transaction failed with error: ${error}`)
      setModalType(TxModalType.FAIL)
      setOpenedModal(true)
      return
    }
    if(isSuccess && isFetchError) {
      setContent(`Could not fetch transaction, but the transaction was recoreded with txHash ${txHash?.hash}, your tokens/points will be added shortly, better refresh: ${fetchingError}`)
      setModalType(TxModalType.SUCCESS)
      setOpenedModal(true)
    }
    if(isSuccess && isFetchSuccess) {
      setModalType(TxModalType.SUCCESS)
      setOpenedModal(true)
      if(tokensAdded && tokensAdded > 0n){
        setContent(`You have won ${formatEther(tokensAdded)} METIS`)
      }
      if(pointsAdded && pointsAdded > 0n) {
        setContent(`You have won ${pointsAdded} XP points`)
      }
    }
  }, [isError, error, isSuccess, setModalType, setContent, isFetchSuccess, txHash, pointsAdded, tokensAdded, isFetchError, fetchingError])

  const openModal = () => {
    setOpenedModal(true)
  }
  const closeModal = () => {
    setOpenedModal(false)
    document.body.style.overflow = 'auto'
  }

  return (
    <>
      <img src={Arrow} style={arrowStyles} alt="" />
      <div className="wheel-container" ref={boxRef}>
        <div className={`wheel ${spinning}`} style={wheelVars} onClick={selectItem}>
          {items.map((item: string, index) => (
            <div className="wheel-item" key={index} style={customStyle(index)}>
              {item}
              <img src={Ellipse} style={rightEllipseStyles} alt="" />
              <img src={Ellipse} style={leftEllipseStyles} alt="" />
            </div>
          ))}
        </div>
      </div>
      <TxModal
        openedModal={openedModal}
        setOpenedModal={openModal}
        closeModal={closeModal}
        type={modalType}
        content={content}
      />
    </>
  );
}