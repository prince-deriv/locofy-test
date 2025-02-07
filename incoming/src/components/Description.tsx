import { FunctionComponent } from "react";
import AtomGuideChips from "./AtomGuideChips";
import Touch1 from "./Touch1";
import Thumbnail from "./Thumbnail";
import styles from "./Description.module.css";

export type DescriptionType = {
  className?: string;
  showChips?: boolean;

  /** Variant props */
  type?: string;
};

const Description: FunctionComponent<DescriptionType> = ({
  className = "",
  type = "rise/fall",
  showChips = true,
}) => {
  return (
    <div className={[styles.slotContent, className].join(" ")} data-type={type}>
      {showChips && (
        <AtomGuideChips type="touchno touch" leftChevron={false} rightChevron />
      )}
      <div className={styles.body}>
        <div className={styles.content}>
          <Touch1
            touch="Touch"
            touch1="Touch"
            youWinThePayoutIfTheMarket="”, you win the payout if the market touches the barrier at any time during the contract period."
            showTouch
          />
          <Touch1
            touch="No Touch"
            touch1="No Touch"
            youWinThePayoutIfTheMarket="”, you win the payout if the market never touches the barrier at any time during the contract period."
            showTouch={false}
          />
        </div>
        <img className={styles.dividerIcon} loading="lazy" alt="" />
        <Thumbnail type="touchno touch" />
      </div>
    </div>
  );
};

export default Description;
