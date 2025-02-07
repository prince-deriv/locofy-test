import { FunctionComponent } from "react";
import styles from "./DesktopHeaderPlatform.module.css";

export type DesktopHeaderPlatformType = {
  className?: string;
  iconDropdown?: string;
  derivTrader?: string;

  /** Variant props */
  platform?: string;
  state?: string;
  theme?: string;
};

const DesktopHeaderPlatform: FunctionComponent<DesktopHeaderPlatformType> = ({
  className = "",
  platform = "deriv trader",
  state = "default",
  theme = "light",
  iconDropdown,
  derivTrader,
}) => {
  return (
    <div
      className={[styles.menuPlatform, className].join(" ")}
      data-platform={platform}
      data-state={state}
      data-theme={theme}
    >
      <img className={styles.derivTraderIcon} alt="" src={derivTrader} />
      <img
        className={styles.iconDropdown}
        loading="lazy"
        alt=""
        src={iconDropdown}
      />
    </div>
  );
};

export default DesktopHeaderPlatform;
