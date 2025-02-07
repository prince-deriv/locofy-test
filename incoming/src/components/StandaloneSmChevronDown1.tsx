import { FunctionComponent } from "react";
import styles from "./StandaloneSmChevronDown1.module.css";

export type StandaloneSmChevronDown1Type = {
  className?: string;

  /** Variant props */
  style?: string;
};

const StandaloneSmChevronDown1: FunctionComponent<
  StandaloneSmChevronDown1Type
> = ({ className = "", style = "regular" }) => {
  return (
    <div
      className={[styles.iconChevron, className].join(" ")}
      data-style={style}
    >
      <div className={styles.icon}></div>
    </div>
  );
};

export default StandaloneSmChevronDown1;
