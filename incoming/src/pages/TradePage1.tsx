import { FunctionComponent } from "react";
import DesktopHeaderPlatform1 from "../components/DesktopHeaderPlatform1";
import DropdownLabelledFill from "../components/DropdownLabelledFill";
import StandaloneSmCircleInfo from "../components/StandaloneSmCircleInfo";
import StandaloneSm0Placeholde1 from "../components/StandaloneSm0Placeholde1";
import NavigationSidebarFixed from "../components/NavigationSidebarFixed";
import FrameComponent from "../components/FrameComponent";
import styles from "./TradePage1.module.css";

export type TradePageType = {
  onClose?: () => void;
};

const TradePage: FunctionComponent<TradePageType> = ({ onClose }) => {
  return (
    <div className={styles.tradePage}>
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
        />
        <StandaloneSmCircleInfo style="regular" showStandaloneSmCircleInfo />
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
      <div className={styles.details}>
        <div className={styles.detail1}>
          <div className={styles.label8}>
            <div className={styles.label9}>Label:</div>
          </div>
          <b className={styles.value}>[Value]</b>
        </div>
        <div className={styles.detail2}>
          <div className={styles.label8}>
            <div className={styles.label9}>Label:</div>
          </div>
          <b className={styles.value}>[Value]</b>
        </div>
        <div className={styles.detail2}>
          <div className={styles.label8}>
            <div className={styles.label9}>Label:</div>
          </div>
          <b className={styles.value}>[Value]</b>
        </div>
      </div>
      <main className={styles.sidebarParent}>
        <div className={styles.sidebar}>
          <NavigationSidebarFixed itemBottom group2={false} group3={false} />
        </div>
        <section className={styles.chart}>
          <img className={styles.chart1Icon} loading="lazy" alt="" />
        </section>
        <div className={styles.frameWrapper}>
          <FrameComponent />
        </div>
      </main>
      <div className={styles.marketClosedMessage}>
        <div className={styles.dateTime}>
          <div className={styles.thisMarketWill}>
            This market will reopen at
          </div>
          <b className={styles.amGmt01}>00:00 am (GMT), 01 Jan 2024</b>
        </div>
        <div className={styles.countdown}>
          <div className={styles.labelPairedMdStopwatch}>
            <div className={styles.icon}></div>
          </div>
          <b className={styles.b}>24:00:00</b>
        </div>
      </div>
    </div>
  );
};

export default TradePage;
