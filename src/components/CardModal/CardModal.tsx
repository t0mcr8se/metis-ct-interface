import {
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  useEffect,
  useRef,
} from "react";

import { useClickOutside } from "../../hooks/useClickOutside.ts";
import close from "../../assets/images/close_icon.svg";
import Button from "../ButtonSmall/ButtonSmall.tsx";
import styles from "./CardModal.module.css";
import { ItemStates, TCards } from "../../store/cardItems.ts";
import { useAccount } from "wagmi";
import MetisClaimModal from "../MetisClaimModal/MetisClaimModal.tsx";

interface ICardModal {
  openedModal: boolean;
  closeModal: () => void;
  setOpenedModal: Dispatch<SetStateAction<boolean>>;
  cardStateModal: ReactNode;
  item: TCards;
}

const CardModal: FC<ICardModal> = ({
  openedModal,
  closeModal,
  setOpenedModal,
  cardStateModal,
  item,
}) => {
  const refModal = useRef(null);
  const { address } = useAccount();
  useClickOutside(refModal, setOpenedModal);

  useEffect(() => {
    if (openedModal) {
      document.body.style.overflow = "hidden";
    }
  }, [openedModal]);

  if (item.id === 1) {
    return openedModal && <MetisClaimModal card={item} onClose={closeModal} />;
  }

  return (
    openedModal && (
      <>
        <div className={styles.card_modal}>
          <div ref={refModal} className={styles.modal_body}>
            <div className={styles.modal_header}>
              <div className={styles.modal_header_state}>{cardStateModal}</div>
              <div className={styles.modal_header_close} onClick={closeModal}>
                <img src={close} alt="" />
              </div>
            </div>
            <div className={styles.modal_content}>
              <div className={styles.modal_title}>
                <img src={item.cardsModalIcon} alt="" />
              </div>
              <div className={styles.modal_text}>{item.descriptionText}</div>
            </div>
            {item.videoUrl && (
              <div className={styles.modal_video}>
                <iframe src={item.videoUrl}></iframe>
              </div>
            )}
            <div className={styles.modal_history}>
              <div className={styles.modal_history_items}>
                {item.history.map((task, index) => {
                  return (
                    <div
                      key={index}
                      className={`
                                    ${styles.modal_history_item} 
                                    ${
                                      task.state == ItemStates.COMPLETED
                                        ? styles.modal_history_item_completed
                                        : ""
                                    }`}
                    >
                      {task.stageName}
                    </div>
                  );
                })}
              </div>
            </div>
            <Button
              type="black_btn"
              text={item.buttonText ?? "Start Now"}
              onClick={() => {
                window.open(
                  item.id == 1 ? item.url + address : item.url,
                  "_blank"
                );
              }}
            />
          </div>
        </div>
      </>
    )
  );
};

export default CardModal;
