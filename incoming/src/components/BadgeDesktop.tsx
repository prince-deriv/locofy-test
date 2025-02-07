import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./BadgeDesktop.module.css";

export type BadgeDesktopType = {
  className?: string;
  label?: string;

  /** Variant props */
  bold?: boolean;
  padding?: string;
  size?: string;
  type?: string;

  /** Style props */
  badgeNewDisplay?: CSSProperties["display"];
};

const BadgeDesktop: FunctionComponent<BadgeDesktopType> = ({
  className = "",
  bold = true,
  padding = "tight",
  size = "S",
  type = "label",
  label = "New",
  badgeNewDisplay,
}) => {
  const badgeNewStyle: CSSProperties = useMemo(() => {
    return {
      display: badgeNewDisplay,
    };
  }, [badgeNewDisplay]);

  return (
    <div
      className={[styles.badgeNew, className].join(" ")}
      data-bold={bold}
      data-padding={padding}
      data-size={size}
      data-type={type}
      style={badgeNewStyle}
    >
      <b className={styles.label}>{label}</b>
    </div>
  );
};

export default BadgeDesktop;
