import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./LabelPairedSm0Placehol.module.css";

export type LabelPairedSm0PlaceholType = {
  className?: string;
  icon?: string;

  /** Variant props */
  style?: string;

  /** Style props */
  iconDisplay?: CSSProperties["display"];
};

const LabelPairedSm0Placehol: FunctionComponent<LabelPairedSm0PlaceholType> = ({
  className = "",
  style = "regular",
  icon = "",
  iconDisplay,
}) => {
  const iconStyle: CSSProperties = useMemo(() => {
    return {
      display: iconDisplay,
    };
  }, [iconDisplay]);

  return (
    <div
      className={[styles.icon1, className].join(" ")}
      data-style={style}
      style={iconStyle}
    >
      <div className={styles.icon}>{icon}</div>
    </div>
  );
};

export default LabelPairedSm0Placehol;
