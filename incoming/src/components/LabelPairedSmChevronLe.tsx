import { FunctionComponent } from "react";
import styles from "./LabelPairedSmChevronLe.module.css";

export type LabelPairedSmChevronLeType = {
  className?: string;

  /** Variant props */
  style?: string;
};

const LabelPairedSmChevronLe: FunctionComponent<LabelPairedSmChevronLeType> = ({
  className = "",
  style = "regular",
}) => {
  return (
    <div className={[styles.icon1, className].join(" ")} data-style={style}>
      <div className={styles.icon}></div>
    </div>
  );
};

export default LabelPairedSmChevronLe;
