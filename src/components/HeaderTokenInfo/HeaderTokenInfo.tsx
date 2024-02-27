import { FC } from "react";
import styles from "./HeaderTokenInfo.module.css";
import { useMerkleProof } from "../../hooks/useHelmetDrop";

interface IHeaderTokenInfo {
  icon: string;
  type: string;
  address?: string;
}

const HeaderTokenInfo: FC<IHeaderTokenInfo> = ({ icon, type, address }) => {
  const { points } = useMerkleProof(address)
  console.log({points})

  return (
    <>
      <div className={`${styles.wallet_item} ${styles[type]}`}>
        <img src={icon} className={styles.token_info_icon} alt="" />
        <div className={styles.wallet_content}>{points ?? 0} </div>
      </div>
    </>
  );
};

export default HeaderTokenInfo;
