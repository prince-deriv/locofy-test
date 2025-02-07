import { FunctionComponent } from "react";
import styles from "./StandaloneMd0Placeholde.module.css";

export type StandaloneMd0PlaceholdeType = {
  className?: string;
  icon?: string;

  /** Variant props */
  style?: string;
};

const StandaloneMd0Placeholde: FunctionComponent<
  StandaloneMd0PlaceholdeType
> = ({ className = "", style = "regular", icon = "" }) => {
  return (
    <div className={[styles.icon1, className].join(" ")} data-style={style}>
      <div className={styles.icon}>{icon}</div>
    </div>
  );
};

export default StandaloneMd0Placeholde;
