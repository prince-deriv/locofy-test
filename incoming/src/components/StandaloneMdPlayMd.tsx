import { FunctionComponent } from "react";
import styles from "./StandaloneMdPlayMd.module.css";

export type StandaloneMdPlayMdType = {
  className?: string;

  /** Variant props */
  style?: string;
};

const StandaloneMdPlayMd: FunctionComponent<StandaloneMdPlayMdType> = ({
  className = "",
  style = "regular",
}) => {
  return (
    <div
      className={[styles.standaloneMdPlayMd, className].join(" ")}
      data-style={style}
    >
      <h3 className={styles.icon}></h3>
    </div>
  );
};

export default StandaloneMdPlayMd;
