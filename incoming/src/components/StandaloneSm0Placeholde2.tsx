import { FunctionComponent } from "react";
import styles from "./StandaloneSm0Placeholde2.module.css";

export type StandaloneSm0Placeholde2Type = {
  className?: string;
  icon?: string;

  /** Variant props */
  style?: string;
};

const StandaloneSm0Placeholde2: FunctionComponent<
  StandaloneSm0Placeholde2Type
> = ({ className = "", style = "regular", icon = "" }) => {
  return (
    <div className={[styles.iconLeft, className].join(" ")} data-style={style}>
      <div className={styles.icon}>{icon}</div>
    </div>
  );
};

export default StandaloneSm0Placeholde2;
