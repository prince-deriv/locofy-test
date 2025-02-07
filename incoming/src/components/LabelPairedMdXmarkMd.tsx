import { FunctionComponent } from "react";
import styles from "./LabelPairedMdXmarkMd.module.css";

export type LabelPairedMdXmarkMdType = {
  className?: string;

  /** Variant props */
  style?: string;
};

const LabelPairedMdXmarkMd: FunctionComponent<LabelPairedMdXmarkMdType> = ({
  className = "",
  style = "regular",
}) => {
  return (
    <div className={[styles.icon1, className].join(" ")} data-style={style}>
      <div className={styles.icon}></div>
    </div>
  );
};

export default LabelPairedMdXmarkMd;
