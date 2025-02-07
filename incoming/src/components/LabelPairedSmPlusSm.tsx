import { FunctionComponent } from "react";
import styles from "./LabelPairedSmPlusSm.module.css";

export type LabelPairedSmPlusSmType = {
  className?: string;

  /** Variant props */
  style?: string;
};

const LabelPairedSmPlusSm: FunctionComponent<LabelPairedSmPlusSmType> = ({
  className = "",
  style = "regular",
}) => {
  return (
    <div className={[styles.icon1, className].join(" ")} data-style={style}>
      <div className={styles.icon}>+</div>
    </div>
  );
};

export default LabelPairedSmPlusSm;
