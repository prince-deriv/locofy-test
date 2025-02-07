import { FunctionComponent } from "react";
import styles from "./Touch1.module.css";

export type Touch1Type = {
  className?: string;
  touch?: string;
  touch1?: string;
  youWinThePayoutIfTheMarket?: string;
  showTouch?: boolean;
};

const Touch1: FunctionComponent<Touch1Type> = ({
  className = "",
  touch,
  touch1,
  youWinThePayoutIfTheMarket,
  showTouch,
}) => {
  return (
    <div className={[styles.touch, className].join(" ")}>
      <b className={styles.touch1}>{touch}</b>
      <div className={styles.optionDescription}>
        <div className={styles.ifYouSelectContainer}>
          <span>If you select “</span>
          <b>{touch1}</b>
          <span>{youWinThePayoutIfTheMarket}</span>
        </div>
      </div>
      {showTouch && <div className={styles.touch2} />}
    </div>
  );
};

export default Touch1;
