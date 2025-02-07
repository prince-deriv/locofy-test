import { FunctionComponent } from "react";
import styles from "./StandaloneMdClockThree.module.css";

export type StandaloneMdClockThreeType = {
  className?: string;

  /** Variant props */
  style?: string;
};

const StandaloneMdClockThree: FunctionComponent<StandaloneMdClockThreeType> = ({
  className = "",
  style = "regular",
}) => {
  return (
    <div className={[styles.icon1, className].join(" ")} data-style={style}>
      <div className={styles.icon}></div>
    </div>
  );
};

export default StandaloneMdClockThree;
