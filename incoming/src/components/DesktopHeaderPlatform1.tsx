import { FunctionComponent } from "react";
import DesktopHeaderPlatform from "./DesktopHeaderPlatform";
import MenuGeneral from "./MenuGeneral";
import ActionExceptionNotificat from "./ActionExceptionNotificat";
import ButtonGeneral from "./ButtonGeneral";
import styles from "./DesktopHeaderPlatform1.module.css";

export type DesktopHeaderPlatform1Type = {
  className?: string;

  /** Variant props */
  haveRealAccount?: boolean;
  loggedIn?: boolean;
  selectedAccount?: string;
  theme?: string;
};

const DesktopHeaderPlatform1: FunctionComponent<DesktopHeaderPlatform1Type> = ({
  className = "",
  haveRealAccount = false,
  loggedIn = false,
  selectedAccount = "demo",
  theme = "light",
}) => {
  return (
    <header
      className={[styles.desktopHeaderPlatform, className].join(" ")}
      data-haveRealAccount={haveRealAccount}
      data-loggedIn={loggedIn}
      data-selectedAccount={selectedAccount}
      data-theme={theme}
    >
      <div className={styles.platformSwitcherMenus}>
        <DesktopHeaderPlatform
          platform="deriv trader"
          state="default"
          theme="light"
        />
        <MenuGeneral
          icon
          iconSize="16px"
          label
          state="default"
          theme="light"
          label="Trader’s Hub"
          badge={false}
          showMenuHome
          icon1="pending_I80314:9409;31909:250625;31909:248200"
        />
        <MenuGeneral
          icon
          iconSize="16px"
          label
          state="default"
          theme="light"
          label="Reports"
          badge={false}
          showMenuHome={false}
          icon1="pending_I80314:9409;31909:250626;31909:248200"
          labelHeight="24px"
          labelWidth="57px"
          labelDisplay="inline-block"
          menuHomePosition="unset"
          menuHomeTop="unset"
          menuHomeLeft="unset"
          labelTextDecoration="unset"
        />
        <MenuGeneral
          icon
          iconSize="16px"
          label
          state="default"
          theme="light"
          label="Cashier"
          badge={false}
          showMenuHome={false}
          icon1="pending_I80314:9409;31909:250627;31909:248200"
          labelHeight="24px"
          labelWidth="55px"
          labelDisplay="inline-block"
          menuHomePosition="unset"
          menuHomeTop="unset"
          menuHomeLeft="unset"
          labelTextDecoration="unset"
        />
      </div>
      <div className={styles.accountSwitcherMenus}>
        <div className={styles.notificationProfileAccount}>
          <div className={styles.menuNotification}>
            <ActionExceptionNotificat
              haveRealAccount
              loggedIn
              selectedAccount="demo"
              theme="light"
              notificationBadge={false}
            />
          </div>
          <div className={styles.menuProfile}>
            <img className={styles.iconProfile} loading="lazy" alt="" />
          </div>
          <div className={styles.notificationProfileBorder}>
            <div className={styles.border} />
          </div>
          <div className={styles.switcherAccount}>
            <img className={styles.iconAccount} loading="lazy" alt="" />
            <b className={styles.balance}>10,000.00 USD</b>
            <div className={styles.iconDropdownWrapper}>
              <img className={styles.iconDropdown} alt="" />
            </div>
          </div>
        </div>
        <button className={styles.buttonUpgradeWrapper}>
          <ButtonGeneral
            labelIcon="label"
            size="32px"
            states="default"
            theme="light"
            type="primary"
          />
        </button>
      </div>
    </header>
  );
};

export default DesktopHeaderPlatform1;
