import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./BadgeNotification.module.css";

export type BadgeNotificationType = {
  className?: string;
  label?: boolean;
  defaultLabel?: string;

  /** Variant props */
  size?: string;

  /** Style props */
  badgeNotificationDisplay?: CSSProperties["display"];
};

const BadgeNotification: FunctionComponent<BadgeNotificationType> = ({
  className = "",
  size = "sm",
  label = true,
  defaultLabel = "1",
  badgeNotificationDisplay,
}) => {
  const badgeNotification1Style: CSSProperties = useMemo(() => {
    return {
      display: badgeNotificationDisplay,
    };
  }, [badgeNotificationDisplay]);

  return (
    <div
      className={[styles.badgeNotification, className].join(" ")}
      data-size={size}
      style={badgeNotification1Style}
    >
      {label && <b className={styles.label}>{defaultLabel}</b>}
    </div>
  );
};

export default BadgeNotification;
