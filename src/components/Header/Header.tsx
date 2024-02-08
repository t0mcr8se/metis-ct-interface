import HeaderTokeInfo from "../HeaderTokenInfo/HeaderTokenInfo.tsx";
import styles from "./Header.module.css";

import logo from "../../assets/images/bluemetis.svg";
import logo_mob from "../../assets/images/logo_mob.svg";
import xp_icon from "../../assets/header_icons/xp_icon.svg";
import { useAccount } from "wagmi";
import { METIS_URL } from "../../constants/index.ts";

const Header = () => {
  const { address } = useAccount();
  return (
    <>
      <div className={styles.header}>
        <div className={styles.header_column}>
          <div className={styles.header_icon}>
            <a href={METIS_URL} target="_blank">
              <img src={logo} alt="" className={styles.logo_desktop} />
              <img src={logo_mob} alt="" className={styles.logo_mob} />
            </a>
          </div>
        </div>
        <div className={styles.header_column}>
          <div className={styles.wallet_items}>
            <HeaderTokeInfo
              icon={xp_icon}
              type="wallet_block_two"
              address={address}
            />
            <w3m-button />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
