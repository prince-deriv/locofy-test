import { FunctionComponent } from "react";
import styles from "./StandaloneSmChevronDown.module.css";

export type StandaloneSmChevronDownType = {
  className?: string;

  /** Variant props */
  style?: string;
};

const StandaloneSmChevronDown: FunctionComponent<
  StandaloneSmChevronDownType
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

export default StandaloneSmChevronDown;
