import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./StandaloneSmCircleInfo.module.css";

export type StandaloneSmCircleInfoType = {
  className?: string;
  showStandaloneSmCircleInfo?: boolean;

  /** Variant props */
  style?: string;

  /** Style props */
  iconDisplay?: CSSProperties["display"];
  iconMinWidth?: CSSProperties["minWidth"];
};

const StandaloneSmCircleInfo: FunctionComponent<StandaloneSmCircleInfoType> = ({
  className = "",
  style = "regular",
  showStandaloneSmCircleInfo,
  iconDisplay,
  iconMinWidth,
}) => {
  const icon1Style: CSSProperties = useMemo(() => {
    return {
      display: iconDisplay,
      minWidth: iconMinWidth,
    };
  }, [iconDisplay, iconMinWidth]);

  return (
    showStandaloneSmCircleInfo && (
      <div
        className={[styles.standaloneSmCircleInfo, className].join(" ")}
        data-style={style}
      >
        <div className={styles.icon} style={icon1Style}>
          
        </div>
      </div>
    )
  );
};

export default StandaloneSmCircleInfo;
