import React, { FC } from "react";
// import '../assets/styles/buttons.css'
import styles from "./ButtonSmall.module.css";

interface IButtonSmall {
  type: string;
  text: React.ReactNode;
  onClick?: () => void | undefined;
}

const ButtonSmall: FC<IButtonSmall> = ({ type, text, onClick }) => {
  return (
    <>
      <div className={styles.btn_wrapper}>
        <button
          className={`${styles.small_button} ${styles[type]}`}
          onClick={onClick}
        >
          {text}
        </button>
      </div>
    </>
  );
};

export default ButtonSmall;
