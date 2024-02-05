// import styled from "styled-components";
import { useAccount } from 'wagmi';
import { useBuySpins, useSpinPrice, useSpins } from '../../hooks/useSpinningContract';
import styles from './S2Status.module.css'
import { BaseSyntheticEvent, useEffect, useMemo, useState } from 'react';
import { formatEther } from 'viem';
import TxModal, { TxModalType } from '../TxModal/TxModal';

function S2Status() {
  const {address} = useAccount()
  const {data: spins} = useSpins(address)
  const [numSpins, setInput] = useState(0)
  const spinPrice = useSpinPrice(numSpins)
  const {write: buy, isError, isSuccess, error} = useBuySpins()
  const [modalType, setModalType] = useState(TxModalType.FAIL)
  const [content, setContent] = useState("")
  const [openedModal, setOpenedModal] = useState(false)
  const disabled = useMemo(() => {
    return numSpins > 0 ? '' : styles.disabled
  }, [numSpins])

  const updateSpins = (e: BaseSyntheticEvent) => {
    const inp = parseInt(e.target.value)
    if(isNaN(inp))
      return setInput(0)
    setInput(inp)
  }

  useEffect(() => {
    if(isError) {
      setOpenedModal(true)
      if(error)
        setContent(error.name + error.message + error.stack)
      else setContent("An Unknown Error Occured, try again")
      setModalType(TxModalType.FAIL)
      return
    }
    if(isSuccess) {
      setModalType(TxModalType.SUCCESS)
      setOpenedModal(true)
      setContent("Successfully bought spins")
    }
  }, [isError, error, isSuccess, setModalType, setContent])

  const buySpins = () => {
    buy({
      args: [address],
      value: spinPrice,
    })
  }

  const openModal = () => {
      setOpenedModal(true)
  }
  const closeModal = () => {
      setOpenedModal(false)
      document.body.style.overflow = 'auto'
  }

  return (
    <>
    <div className={styles.card_container}>
      <img className={styles.card_image} loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/4960abef5065742eaa234a9c64dc62d5092bc5869a0fb0d4a95ccfcc85efe779?apiKey=b68aa9ae8d4a4bd695329e075295d389&" />
      <div className={styles.card_info}>{Number(spins || 0)} Spins &nbsp;</div>
      <input className={`${styles.add_spins_input} ${disabled}`} value={numSpins} onChange={updateSpins} />
      <button className={`${styles.card_info} ${disabled}`} onClick={buySpins}>&nbsp; Buy Spins &nbsp;</button>
      <br/>
    </div>
    {(!disabled) && 
      <div className={styles.card_container}>
        <div className={styles.card_info_2}>Cost: {formatEther(spinPrice ?? 0n)} METIS</div>
      </div>
    }
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


export default S2Status;