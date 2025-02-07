import { FunctionComponent, useMemo, type CSSProperties } from "react";
import StandaloneMdClockThree from "./StandaloneMdClockThree";
import BadgeNotification from "./BadgeNotification";
import styles from "./MenuNavigationSidebar.module.css";

export type MenuNavigationSidebarType = {
  className?: string;
  label?: string;
  badgeNotification?: boolean;
  focus1?: boolean;
  showItem1?: boolean;

  /** Variant props */
  selected?: boolean;
  state?: string;

  /** Style props */
  item1AlignSelf?: CSSProperties["alignSelf"];
  item1Width?: CSSProperties["width"];
  labelTextDecoration?: CSSProperties["textDecoration"];
  labelAlignSelf?: CSSProperties["alignSelf"];
  labelWidth?: CSSProperties["width"];
};

const MenuNavigationSidebar: FunctionComponent<MenuNavigationSidebarType> = ({
  className = "",
  selected = false,
  state = "default",
  label = "Positions",
  badgeNotification = false,
  focus1 = false,
  showItem1,
  item1AlignSelf,
  item1Width,
  labelTextDecoration,
  labelAlignSelf,
  labelWidth,
}) => {
  const item1Style: CSSProperties = useMemo(() => {
    return {
      alignSelf: item1AlignSelf,
      width: item1Width,
    };
  }, [item1AlignSelf, item1Width]);

  const label4Style: CSSProperties = useMemo(() => {
    return {
      textDecoration: labelTextDecoration,
      alignSelf: labelAlignSelf,
      width: labelWidth,
    };
  }, [labelTextDecoration, labelAlignSelf, labelWidth]);

  return (
    showItem1 && (
      <div
        className={[styles.item1, className].join(" ")}
        data-selected={selected}
        data-state={state}
        style={item1Style}
      >
        {focus1 && <div className={styles.bgFocus} />}
        <div className={styles.containerIcon}>
          <StandaloneMdClockThree style="regular" />
        </div>
        <a className={styles.label} style={label4Style}>
          {label}
        </a>
        {badgeNotification && (
          <BadgeNotification
            size="sm"
            label
            defaultLabel="1"
            badgeNotificationDisplay="flex"
          />
        )}
      </div>
    )
  );
};

export default MenuNavigationSidebar;
