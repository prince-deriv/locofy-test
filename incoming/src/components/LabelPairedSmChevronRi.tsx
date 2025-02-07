import { FunctionComponent } from "react";
import styles from "./LabelPairedSmChevronRi.module.css";

export type LabelPairedSmChevronRiType = {
  className?: string;

  /** Variant props */
  style?: string;
};

const LabelPairedSmChevronRi: FunctionComponent<LabelPairedSmChevronRiType> = ({
  className = "",
  style = "regular",
}) => {
  return (
    <div className={[styles.icon1, className].join(" ")} data-style={style}>
      <div className={styles.icon}></div>
    </div>
  );
};

export default LabelPairedSmChevronRi;
