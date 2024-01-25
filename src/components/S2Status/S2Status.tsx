// import styled from "styled-components";
import styles from './S2Status.module.css'

function S2Status() {
  return (
    <div className={styles.card_container}>
      <img className={styles.card_image} loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/4960abef5065742eaa234a9c64dc62d5092bc5869a0fb0d4a95ccfcc85efe779?apiKey=b68aa9ae8d4a4bd695329e075295d389&" />
      <div className={styles.card_info}>126 Spins</div>
    </div>
  );
}


export default S2Status;