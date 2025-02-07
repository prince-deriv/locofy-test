import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./StandaloneSm0Placeholde.module.css";

export type StandaloneSm0PlaceholdeType = {
  className?: string;
  icon?: string;

  /** Variant props */
  style?: string;

  /** Style props */
  iconLeftDisplay?: CSSProperties["display"];
};

const StandaloneSm0Placeholde: FunctionComponent<
  StandaloneSm0PlaceholdeType
> = ({ className = "", style = "regular", icon = "", iconLeftDisplay }) => {
  const iconLeftStyle: CSSProperties = useMemo(() => {
    return {
      display: iconLeftDisplay,
    };
  }, [iconLeftDisplay]);

  return (
    <div
      className={[styles.iconLeft, className].join(" ")}
      data-style={style}
      style={iconLeftStyle}
    >
      <div className={styles.icon}>{icon}</div>
    </div>
  );
};

export default StandaloneSm0Placeholde;
