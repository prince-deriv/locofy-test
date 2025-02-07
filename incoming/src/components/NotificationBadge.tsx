import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./NotificationBadge.module.css";

export type NotificationBadgeType = {
  className?: string;

  /** Variant props */
  number?: string;
  size?: string;
  theme?: string;

  /** Style props */
  badgeNotificationDisplay?: CSSProperties["display"];
};

const NotificationBadge: FunctionComponent<NotificationBadgeType> = ({
  className = "",
  number = "on",
  size = "default",
  theme = "light",
  badgeNotificationDisplay,
}) => {
  const badgeNotificationStyle: CSSProperties = useMemo(() => {
    return {
      display: badgeNotificationDisplay,
    };
  }, [badgeNotificationDisplay]);

  return (
    <div
      className={[styles.badgeNotification, className].join(" ")}
      data-number={number}
      data-size={size}
      data-theme={theme}
      style={badgeNotificationStyle}
    >
      <b className={styles.b}>1</b>
    </div>
  );
};

export default NotificationBadge;
