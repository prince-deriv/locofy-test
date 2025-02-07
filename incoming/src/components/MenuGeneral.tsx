import { FunctionComponent, useMemo, type CSSProperties } from "react";
import BadgeDesktop from "./BadgeDesktop";
import styles from "./MenuGeneral.module.css";

export type MenuGeneralType = {
  className?: string;
  badge?: boolean;
  showMenuHome?: boolean;
  icon1?: string;

  /** Variant props */
  icon?: boolean;
  iconSize?: string;
  state?: string;
  theme?: string;
  label?: boolean;

  /** Style props */
  labelHeight?: CSSProperties["height"];
  labelWidth?: CSSProperties["width"];
  labelDisplay?: CSSProperties["display"];
  menuHomePosition?: CSSProperties["position"];
  menuHomeTop?: CSSProperties["top"];
  menuHomeLeft?: CSSProperties["left"];
  labelTextDecoration?: CSSProperties["textDecoration"];
};

const MenuGeneral: FunctionComponent<MenuGeneralType> = ({
  className = "",
  icon = true,
  iconSize = "16px",
  state = "default",
  theme = "light",
  label = false,
  badge = false,
  showMenuHome,
  icon1,
  labelHeight,
  labelWidth,
  labelDisplay,
  menuHomePosition,
  menuHomeTop,
  menuHomeLeft,
  labelTextDecoration,
}) => {
  const label2Style: CSSProperties = useMemo(() => {
    return {
      height: labelHeight,
      width: labelWidth,
      display: labelDisplay,
      textDecoration: labelTextDecoration,
    };
  }, [labelHeight, labelWidth, labelDisplay, labelTextDecoration]);

  const menuHomeStyle: CSSProperties = useMemo(() => {
    return {
      position: menuHomePosition,
      top: menuHomeTop,
      left: menuHomeLeft,
    };
  }, [menuHomePosition, menuHomeTop, menuHomeLeft]);

  return (
    showMenuHome && (
      <div
        className={[styles.menuHome, className].join(" ")}
        data-icon={icon}
        data-iconSize={iconSize}
        data-label={label}
        data-state={state}
        data-theme={theme}
        style={menuHomeStyle}
      >
        <img className={styles.icon} loading="lazy" alt="" src={icon1} />
        <a className={styles.label} style={label2Style}>
          {label}
        </a>
        {badge && (
          <BadgeDesktop
            bold
            padding="tight"
            size="S"
            type="label"
            label="New"
            badgeNewDisplay="flex"
          />
        )}
      </div>
    )
  );
};

export default MenuGeneral;
