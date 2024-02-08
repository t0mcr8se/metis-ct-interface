import { FC } from "react";
import styles from "./HeaderTokenInfo.module.css";
import { useXPAmount } from "../../hooks/useUser";

interface IHeaderTokenInfo {
  icon: string;
  type: string;
  address?: string;
}

const HeaderTokenInfo: FC<IHeaderTokenInfo> = ({ icon, type, address }) => {
  const { score } = useXPAmount(address);

  return (
    <>
      <div className={`${styles.wallet_item} ${styles[type]}`}>
        <img src={icon} className={styles.token_info_icon} alt="" />
        <div className={styles.wallet_content}>{score} </div>
      </div>
    </>
  );
};

export default HeaderTokenInfo;
