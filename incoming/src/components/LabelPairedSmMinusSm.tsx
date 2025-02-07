import { FunctionComponent } from "react";
import styles from "./LabelPairedSmMinusSm.module.css";

export type LabelPairedSmMinusSmType = {
  className?: string;

  /** Variant props */
  style?: string;
};

const LabelPairedSmMinusSm: FunctionComponent<LabelPairedSmMinusSmType> = ({
  className = "",
  style = "regular",
}) => {
  return (
    <div className={[styles.icon1, className].join(" ")} data-style={style}>
      <div className={styles.icon}></div>
    </div>
  );
};

export default LabelPairedSmMinusSm;
