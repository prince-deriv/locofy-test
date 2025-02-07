import { FunctionComponent, useMemo, type CSSProperties } from "react";
import NotificationBadge from "./NotificationBadge";
import styles from "./ActionExceptionNotificat.module.css";

export type ActionExceptionNotificatType = {
  className?: string;
  notificationBadge?: boolean;
  icon?: string;

  /** Variant props */
  haveRealAccount?: boolean;
  loggedIn?: boolean;
  selectedAccount?: string;
  theme?: string;

  /** Style props */
  iconNotificationWidth?: CSSProperties["width"];
  iconNotificationAlignSelf?: CSSProperties["alignSelf"];
};

const ActionExceptionNotificat: FunctionComponent<
  ActionExceptionNotificatType
> = ({
  className = "",
  haveRealAccount = false,
  loggedIn = false,
  selectedAccount = "demo",
  theme = "light",
  notificationBadge = false,
  iconNotificationWidth,
  iconNotificationAlignSelf,
  icon,
}) => {
  const iconNotificationStyle: CSSProperties = useMemo(() => {
    return {
      width: iconNotificationWidth,
      alignSelf: iconNotificationAlignSelf,
    };
  }, [iconNotificationWidth, iconNotificationAlignSelf]);

  return (
    <div
      className={[styles.iconNotification, className].join(" ")}
      data-haveRealAccount={haveRealAccount}
      data-loggedIn={loggedIn}
      data-selectedAccount={selectedAccount}
      data-theme={theme}
      style={iconNotificationStyle}
    >
      <img className={styles.icon} alt="" src={icon} />
      {notificationBadge && (
        <NotificationBadge
          number="on"
          size="default"
          theme="light"
          badgeNotificationDisplay="flex"
        />
      )}
    </div>
  );
};

export default ActionExceptionNotificat;
