import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./StandaloneSm0Placeholde1.module.css";

export type StandaloneSm0Placeholde1Type = {
  className?: string;
  icon?: string;

  /** Variant props */
  style?: string;

  /** Style props */
  iconRightDisplay?: CSSProperties["display"];
};

const StandaloneSm0Placeholde1: FunctionComponent<
  StandaloneSm0Placeholde1Type
> = ({ className = "", style = "regular", icon = "", iconRightDisplay }) => {
  const iconRightStyle: CSSProperties = useMemo(() => {
    return {
      display: iconRightDisplay,
    };
  }, [iconRightDisplay]);

  return (
    <div
      className={[styles.iconRight, className].join(" ")}
      data-style={style}
      style={iconRightStyle}
    >
      <div className={styles.icon}>{icon}</div>
    </div>
  );
};

export default StandaloneSm0Placeholde1;
