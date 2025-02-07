import { FunctionComponent } from "react";
import DesktopHeaderPlatform1 from "../components/DesktopHeaderPlatform1";
import DropdownLabelledFill from "../components/DropdownLabelledFill";
import StandaloneSmCircleInfo from "../components/StandaloneSmCircleInfo";
import StandaloneSm0Placeholde1 from "../components/StandaloneSm0Placeholde1";
import NavigationSidebarFixed from "../components/NavigationSidebarFixed";
import FrameComponent from "../components/FrameComponent";
import styles from "./TradePageTestDev.module.css";

export type TradePageTestDevType = {
  onClose?: () => void;
};

const TradePageTestDev: FunctionComponent<TradePageTestDevType> = ({
  onClose,
}) => {
  return (
    <div className={styles.tradePageTestDev}>
      <DesktopHeaderPlatform1
        haveRealAccount
        loggedIn
        selectedAccount="demo"
        theme="light"
      />
      <div className={styles.parameter4}>
        <DropdownLabelledFill
          item
          state="default"
          status1="neutral"
          fieldMarker={false}
          iconLeft={false}
          label="Label"
          item="Item"
          message="Message goes here"
          message={false}
          labelHeight="18px"
          labelWidth="30px"
          labelDisplay="inline-block"
          labelTextDecoration="unset"
          itemWidth="160px"
          itemHeight="24px"
          itemDisplay="inline-block"
          itemAlignSelf="unset"
        />
        <StandaloneSmCircleInfo
          style="regular"
          showStandaloneSmCircleInfo
          iconDisplay="unset"
          iconMinWidth="unset"
        />
        <div className={styles.inputGroupTextFieldAdd}>
          <div className={styles.field}>
            <div className={styles.addonLeft}>
              <div className={styles.label}>label</div>
            </div>
            <div className={styles.textfield}>
              <div className={styles.labelPlaceholderInputCur}>
                <div className={styles.labelMarker}>
                  <div className={styles.label1}>Placeholder</div>
                  <div className={styles.inputFieldMarkerMd}>
                    <div className={styles.label2}>*</div>
                  </div>
                </div>
              </div>
              <StandaloneSm0Placeholde1
                style="regular"
                icon=""
                iconRightDisplay="none"
              />
            </div>
            <div className={styles.addonRight}>
              <div className={styles.label}>label</div>
            </div>
          </div>
          <div className={styles.message}>
            <div className={styles.message1}>Message goes here</div>
            <div className={styles.characterCounter}>0/0</div>
          </div>
        </div>
      </div>
      <div className={styles.parameter4}>
        <DropdownLabelledFill
          item
          state="default"
          status1="neutral"
          fieldMarker={false}
          iconLeft={false}
          label="Label"
          item="Item"
          message="Message goes here"
          message={false}
          labelHeight="18px"
          labelWidth="30px"
          labelDisplay="inline-block"
          labelTextDecoration="unset"
          itemWidth="160px"
          itemHeight="24px"
          itemDisplay="inline-block"
          itemAlignSelf="unset"
        />
        <StandaloneSmCircleInfo
          style="regular"
          showStandaloneSmCircleInfo
          iconDisplay="unset"
          iconMinWidth="unset"
        />
        <div className={styles.inputGroupTextFieldAdd}>
          <div className={styles.field}>
            <div className={styles.addonLeft}>
              <div className={styles.label}>label</div>
            </div>
            <div className={styles.textfield}>
              <div className={styles.labelPlaceholderInputCur}>
                <div className={styles.labelMarker}>
                  <div className={styles.label1}>Placeholder</div>
                  <div className={styles.inputFieldMarkerMd}>
                    <div className={styles.label2}>*</div>
                  </div>
                </div>
              </div>
              <StandaloneSm0Placeholde1
                style="regular"
                icon=""
                iconRightDisplay="none"
              />
            </div>
            <div className={styles.addonRight}>
              <div className={styles.label}>label</div>
            </div>
          </div>
          <div className={styles.message}>
            <div className={styles.message1}>Message goes here</div>
            <div className={styles.characterCounter}>0/0</div>
          </div>
        </div>
      </div>
      <main className={styles.sidebarParent}>
        <div className={styles.sidebar}>
          <NavigationSidebarFixed itemBottom group2={false} group3={false} />
        </div>
        <section className={styles.chart}>
          <img
            className={styles.chart1Icon}
            loading="lazy"
            alt=""
            src="/chart-1@2x.png"
          />
        </section>
        <div className={styles.dropdownContainer}>
          <FrameComponent />
        </div>
      </main>
    </div>
  );
};

export default TradePageTestDev;
