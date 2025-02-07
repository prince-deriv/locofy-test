import { FunctionComponent } from "react";
import styles from "./LabelPairedSmPresentati.module.css";

export type LabelPairedSmPresentatiType = {
  className?: string;

  /** Variant props */
  style?: string;
};

const LabelPairedSmPresentati: FunctionComponent<
  LabelPairedSmPresentatiType
> = ({ className = "", style = "regular" }) => {
  return (
    <div
      className={[styles.labelPairedSmPresentati, className].join(" ")}
      data-style={style}
    >
      <div className={styles.icon}></div>
    </div>
  );
};

export default LabelPairedSmPresentati;
