import { FunctionComponent } from "react";
import DesktopHeaderPlatform from "../components/DesktopHeaderPlatform";
import MenuGeneral from "../components/MenuGeneral";
import ActionExceptionNotificat from "../components/ActionExceptionNotificat";
import Button1 from "../components/Button1";
import NavigationSidebarFixed1 from "../components/NavigationSidebarFixed1";
import SegmentedButton from "../components/SegmentedButton";
import TextField from "../components/TextField";
import StandaloneSmCircleInfo from "../components/StandaloneSmCircleInfo";
import StandaloneSm0Placeholde1 from "../components/StandaloneSm0Placeholde1";
import IconButton from "../components/IconButton";
import DropdownLabelledFill from "../components/DropdownLabelledFill";
import AtomParameterPayoutInfo from "../components/AtomParameterPayoutInfo";
import ButtonPair from "../components/ButtonPair";
import styles from "./UsingMaterialUIKits.module.css";

const UsingMaterialUIKits: FunctionComponent = () => {
  return (
    <div className={styles.usingMaterialUiKits}>
      <header className={styles.desktopHeaderPlatform}>
        <div className={styles.menuPlatformParent}>
          <DesktopHeaderPlatform
            platform="deriv trader"
            state="default"
            theme="light"
            iconDropdown="/icon--dropdown.svg"
            derivTrader="/deriv-trader.svg"
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
            icon1="/icon.svg"
            labelHeight="unset"
            labelWidth="unset"
            labelDisplay="unset"
            menuHomePosition="unset"
            menuHomeTop="unset"
            menuHomeLeft="unset"
            labelTextDecoration="unset"
          />
          <div className={styles.menuReportsParent}>
            <MenuGeneral
              icon
              iconSize="16px"
              label
              state="default"
              theme="light"
              label="Reports"
              badge={false}
              showMenuHome
              icon1="/icon-1.svg"
              labelHeight="unset"
              labelWidth="unset"
              labelDisplay="unset"
              menuHomePosition="absolute"
              menuHomeTop="0px"
              menuHomeLeft="0px"
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
              showMenuHome
              icon1="/icon-2.svg"
              labelHeight="unset"
              labelWidth="unset"
              labelDisplay="unset"
              menuHomePosition="absolute"
              menuHomeTop="0px"
              menuHomeLeft="113px"
              labelTextDecoration="unset"
            />
          </div>
        </div>
        <div className={styles.desktopHeaderPlatformInner}>
          <div className={styles.frameParent}>
            <div className={styles.frameWrapper}>
              <div className={styles.notificationIconContainerParent}>
                <div className={styles.notificationIconContainer}>
                  <div className={styles.notificationIconInnerContai}>
                    <ActionExceptionNotificat
                      notificationBadge={false}
                      iconNotificationWidth="unset"
                      iconNotificationAlignSelf="stretch"
                      icon="/icon-3.svg"
                    />
                  </div>
                  <div className={styles.iconProfileWrapper}>
                    <img
                      className={styles.iconProfile}
                      loading="lazy"
                      alt=""
                      src="/icon--profile.svg"
                    />
                  </div>
                  <div className={styles.border} />
                </div>
                <div className={styles.frameWrapper}>
                  <div className={styles.accountBalanceContainerParent}>
                    <div className={styles.accountBalanceContainer}>
                      <img
                        className={styles.iconAccount}
                        loading="lazy"
                        alt=""
                        src="/icon--account.svg"
                      />
                      <b className={styles.balance}>10,000.00 USD</b>
                    </div>
                    <div className={styles.iconProfileWrapper}>
                      <img
                        className={styles.iconDropdown}
                        alt=""
                        src="/icon--dropdown-1.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Button1
              showIcon={false}
              state="Enabled"
              style="Filled"
              labelText="Deposit"
            />
          </div>
        </div>
      </header>
      <main className={styles.navigationSidebarFixedParent}>
        <NavigationSidebarFixed1 />
        <section className={styles.content}>
          <div className={styles.chartParameters}>
            <img
              className={styles.chart1Icon}
              loading="lazy"
              alt=""
              src="/chart-1@2x.png"
            />
            <div className={styles.parameters}>
              <div className={styles.contractSwitcherParameters}>
                <div className={styles.contractSwitcher}>
                  <SegmentedButton density={0} segments={2} />
                </div>
                <div className={styles.contractSwitcherParameters}>
                  <div className={styles.parameters1}>
                    <div className={styles.parameter1}>
                      <TextField
                        leadingIcon={false}
                        state="Enabled"
                        style="Filled"
                        textConfigurations="Input text"
                        trailingIcon={false}
                        inputText="1 minute"
                        supportingText="Supporting text"
                        labelText="Duration"
                        showSupportingText={false}
                      />
                      <StandaloneSmCircleInfo
                        style="regular"
                        showStandaloneSmCircleInfo={false}
                        iconDisplay="inline-block"
                        iconMinWidth="16px"
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
                            />
                          </div>
                          <div className={styles.addonRight}>
                            <div className={styles.label}>label</div>
                          </div>
                        </div>
                        <div className={styles.message}>
                          <div className={styles.message1}>
                            Message goes here
                          </div>
                          <div className={styles.characterCounter}>0/0</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.parameter2}>
                      <div className={styles.textField}>
                        <div className={styles.textField1}>
                          <div className={styles.stateLayer}>
                            <div className={styles.content1}>
                              <div className={styles.labelTextContainer}>
                                <div className={styles.labelText}>Barrier</div>
                              </div>
                              <div className={styles.inputTextContainer}>
                                <div className={styles.inputText}>
                                  Above spot
                                </div>
                              </div>
                            </div>
                            <IconButton state="Enabled" style="Standard" />
                          </div>
                        </div>
                        <div className={styles.activeIndicator} />
                        <div className={styles.supportingText}>
                          <div className={styles.supportingText1}>
                            Supporting text
                          </div>
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
                          <div className={styles.message1}>
                            Message goes here
                          </div>
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
                          <div className={styles.message1}>
                            Message goes here
                          </div>
                          <div className={styles.characterCounter}>0/0</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.details}>
                    <div className={styles.detail1}>
                      <div className={styles.label12}>
                        <div className={styles.label13}>Label:</div>
                      </div>
                      <b className={styles.value}>[Value]</b>
                    </div>
                    <div className={styles.detail2}>
                      <div className={styles.label12}>
                        <div className={styles.label13}>Label:</div>
                      </div>
                      <b className={styles.value}>[Value]</b>
                    </div>
                    <div className={styles.detail2}>
                      <div className={styles.label12}>
                        <div className={styles.label13}>Label:</div>
                      </div>
                      <b className={styles.value}>[Value]</b>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.contractSwitcherParameters}>
                <div className={styles.button1}>
                  <AtomParameterPayoutInfo
                    value="19.65 USD"
                    label="Payout:"
                    showPayoutInfo1
                  />
                  <Button1
                    showIcon={false}
                    state="Enabled"
                    style="Filled"
                    labelText="Touch"
                    buttonAlignSelf="stretch"
                  />
                </div>
                <div className={styles.button2}>
                  <AtomParameterPayoutInfo
                    value="[Value]"
                    label="Label:"
                    showPayoutInfo1={false}
                  />
                  <ButtonPair
                    state="default"
                    type="red"
                    value="[value]"
                    showDetails
                    label="[label]"
                    title="[Title]"
                    button1Width="unset"
                    button1AlignSelf="stretch"
                    button1Height="56px"
                  />
                </div>
              </div>
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
          </div>
        </section>
      </main>
    </div>
  );
};

export default UsingMaterialUIKits;
