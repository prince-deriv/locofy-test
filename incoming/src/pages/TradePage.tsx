import { FunctionComponent } from "react";
import ParameterCardDefault from "../components/ParameterCardDefault";
import Footer1 from "../components/Footer1";
import LabelPairedSm0Placehol from "../components/LabelPairedSm0Placehol";
import ChipSelectable from "../components/ChipSelectable";
import BasicButtonBlackWhite from "../components/BasicButtonBlackWhite";
import styles from "./TradePage.module.css";

const TradePage1: FunctionComponent = () => {
  return (
    <div className={styles.tradePage}>
      <section className={styles.parametersChart}>
        <ParameterCardDefault />
      </section>
      <Footer1 state="simple" type="single" />
      <div className={styles.overlayActionSheet}>
        <div className={styles.actionSheetBottom}>
          <div className={styles.containerHandleBar}>
            <div className={styles.handleBar} />
          </div>
          <div className={styles.containerHeader}>
            <div className={styles.titleIcon}>
              <div className={styles.spacer} />
              <b className={styles.title}>Duration</b>
              <div className={styles.containerButtonIcon}>
                <div className={styles.buttonIcon}>
                  <div className={styles.labelPairedMdCircleInf}>
                    <div className={styles.icon}></div>
                  </div>
                  <div className={styles.bgFocus} />
                </div>
              </div>
            </div>
            <div className={styles.containerDescription}>
              <div className={styles.description}>Description</div>
            </div>
            <div className={styles.containerSearch}>
              <div className={styles.fieldSearch}>
                <div className={styles.field}>
                  <div className={styles.iconSearch}>
                    <div className={styles.icon1}></div>
                  </div>
                  <div className={styles.placeholderInputCursor}>
                    <div className={styles.placeholder}>Search</div>
                  </div>
                </div>
                <div className={styles.message}>
                  <div className={styles.message1}>Message goes here</div>
                </div>
              </div>
            </div>
            <div className={styles.controller}>
              <div className={styles.listChips}>
                <div className={styles.chipSelectable}>
                  <LabelPairedSm0Placehol style="regular" icon="" />
                  <div className={styles.label}>Ticks</div>
                  <div className={styles.bgFocus1} />
                  <b className={styles.labelTag}>label-tag</b>
                </div>
                <ChipSelectable
                  size="md"
                  state="default"
                  labelTag="label-tag"
                  labelTag={false}
                  focus1={false}
                  label="Seconds"
                  icon={false}
                  chipLabelsBackgroundColor="unset"
                  showChipLabels
                  labelHeight="22px"
                  labelWidth="54px"
                  labelDisplay="inline-block"
                />
                <ChipSelectable
                  size="md"
                  state="default"
                  labelTag="label-tag"
                  labelTag={false}
                  focus1={false}
                  label="Minutes"
                  icon={false}
                  chipLabelsBackgroundColor="unset"
                  showChipLabels
                  labelHeight="22px"
                  labelWidth="51px"
                  labelDisplay="inline-block"
                />
                <ChipSelectable
                  size="md"
                  state="default"
                  labelTag="label-tag"
                  labelTag={false}
                  focus1={false}
                  label="Hours"
                  icon={false}
                  chipLabelsBackgroundColor="unset"
                  showChipLabels
                  labelHeight="22px"
                  labelWidth="38px"
                  labelDisplay="inline-block"
                />
                <ChipSelectable
                  size="md"
                  state="default"
                  labelTag="label-tag"
                  labelTag={false}
                  focus1={false}
                  label="Days"
                  icon={false}
                  chipLabelsBackgroundColor="unset"
                  showChipLabels={false}
                  labelHeight="22px"
                  labelWidth="31px"
                  labelDisplay="inline-block"
                />
                <ChipSelectable
                  size="md"
                  state="default"
                  labelTag="label-tag"
                  labelTag={false}
                  focus1={false}
                  label="End time"
                  icon={false}
                  chipLabelsBackgroundColor="unset"
                  showChipLabels={false}
                  labelHeight="22px"
                  labelWidth="56px"
                  labelDisplay="inline-block"
                />
                <ChipSelectable
                  size="md"
                  state="default"
                  labelTag="label-tag"
                  labelTag={false}
                  focus1={false}
                  label="Label"
                  icon={false}
                  chipLabelsBackgroundColor="unset"
                  showChipLabels={false}
                  labelHeight="22px"
                  labelWidth="35px"
                  labelDisplay="inline-block"
                />
                <ChipSelectable
                  size="md"
                  state="default"
                  labelTag="label-tag"
                  labelTag={false}
                  focus1={false}
                  label="Label"
                  icon={false}
                  chipLabelsBackgroundColor="unset"
                  showChipLabels={false}
                  labelHeight="22px"
                  labelWidth="35px"
                  labelDisplay="inline-block"
                />
                <ChipSelectable
                  size="md"
                  state="default"
                  labelTag="label-tag"
                  labelTag={false}
                  focus1={false}
                  label="Label"
                  icon={false}
                  chipLabelsBackgroundColor="unset"
                  showChipLabels={false}
                  labelHeight="22px"
                  labelWidth="35px"
                  labelDisplay="inline-block"
                />
                <ChipSelectable
                  size="md"
                  state="default"
                  labelTag="label-tag"
                  labelTag={false}
                  focus1={false}
                  label="Label"
                  icon={false}
                  chipLabelsBackgroundColor="unset"
                  showChipLabels={false}
                  labelHeight="22px"
                  labelWidth="35px"
                  labelDisplay="inline-block"
                />
              </div>
            </div>
          </div>
          <div className={styles.containerContent}>
            <div className={styles.contentPicker}>
              <div className={styles.toggle}>
                <div className={styles.title1}>
                  <div className={styles.title2}>Title</div>
                </div>
                <div className={styles.toggle1}>
                  <div className={styles.knob} />
                  <div className={styles.bgFocus2} />
                </div>
              </div>
              <div className={styles.picker}>
                <div className={styles.contentWheelGeneric}>
                  <div className={styles.containerColumns}>
                    <div className={styles.inputWheelFillContainer}>
                      <div className={styles.listItems}>
                        <div className={styles.item1}>
                          <div className={styles.containerIconLeft}>
                            <div className={styles.iconLeft}>
                              <div className={styles.icon2}></div>
                            </div>
                          </div>
                          <div className={styles.item}>1 tick</div>
                          <div className={styles.containerIconRight}>
                            <div className={styles.iconLeft}>
                              <div className={styles.icon2}></div>
                            </div>
                          </div>
                          <div className={styles.bgFocus3} />
                        </div>
                        <div className={styles.item2}>
                          <div className={styles.containerIconLeft}>
                            <div className={styles.iconLeft}>
                              <div className={styles.icon2}></div>
                            </div>
                          </div>
                          <div className={styles.item}>2 ticks</div>
                          <div className={styles.containerIconRight}>
                            <div className={styles.iconLeft}>
                              <div className={styles.icon2}></div>
                            </div>
                          </div>
                          <div className={styles.bgFocus3} />
                        </div>
                        <div className={styles.item31}>
                          <div className={styles.containerIconLeft}>
                            <div className={styles.iconLeft}>
                              <div className={styles.icon2}></div>
                            </div>
                          </div>
                          <div className={styles.item}>3 ticks</div>
                          <div className={styles.containerIconRight}>
                            <div className={styles.iconLeft}>
                              <div className={styles.icon2}></div>
                            </div>
                          </div>
                          <div className={styles.bgFocus3} />
                        </div>
                        <div className={styles.item41}>
                          <div className={styles.containerIconLeft}>
                            <div className={styles.iconLeft}>
                              <div className={styles.icon2}></div>
                            </div>
                          </div>
                          <div className={styles.item}>4 ticks</div>
                          <div className={styles.containerIconRight}>
                            <div className={styles.iconLeft}>
                              <div className={styles.icon2}></div>
                            </div>
                          </div>
                          <div className={styles.bgFocus3} />
                        </div>
                        <div className={styles.item51}>
                          <div className={styles.containerIconLeft}>
                            <div className={styles.iconLeft}>
                              <div className={styles.icon2}></div>
                            </div>
                          </div>
                          <div className={styles.item}>5 ticks</div>
                          <div className={styles.containerIconRight}>
                            <div className={styles.iconLeft}>
                              <div className={styles.icon2}></div>
                            </div>
                          </div>
                          <div className={styles.bgFocus3} />
                        </div>
                        <div className={styles.item61}>
                          <div className={styles.containerIconLeft}>
                            <div className={styles.iconLeft}>
                              <div className={styles.icon2}></div>
                            </div>
                          </div>
                          <div className={styles.item}>6 ticks</div>
                          <div className={styles.containerIconRight}>
                            <div className={styles.iconLeft}>
                              <div className={styles.icon2}></div>
                            </div>
                          </div>
                          <div className={styles.bgFocus3} />
                        </div>
                        <div className={styles.item71}>
                          <div className={styles.containerIconLeft}>
                            <div className={styles.iconLeft}>
                              <div className={styles.icon2}></div>
                            </div>
                          </div>
                          <div className={styles.item}>7 ticks</div>
                          <div className={styles.containerIconRight}>
                            <div className={styles.iconLeft}>
                              <div className={styles.icon2}></div>
                            </div>
                          </div>
                          <div className={styles.bgFocus3} />
                        </div>
                        <div className={styles.item81}>
                          <div className={styles.containerIconLeft}>
                            <div className={styles.iconLeft}>
                              <div className={styles.icon2}></div>
                            </div>
                          </div>
                          <div className={styles.item}>8 ticks</div>
                          <div className={styles.containerIconRight}>
                            <div className={styles.iconLeft}>
                              <div className={styles.icon2}></div>
                            </div>
                          </div>
                          <div className={styles.bgFocus3} />
                        </div>
                        <div className={styles.item91}>
                          <div className={styles.containerIconLeft}>
                            <div className={styles.iconLeft}>
                              <div className={styles.icon2}></div>
                            </div>
                          </div>
                          <div className={styles.item}>9 ticks</div>
                          <div className={styles.containerIconRight}>
                            <div className={styles.iconLeft}>
                              <div className={styles.icon2}></div>
                            </div>
                          </div>
                          <div className={styles.bgFocus3} />
                        </div>
                        <div className={styles.item101}>
                          <div className={styles.containerIconLeft}>
                            <div className={styles.iconLeft}>
                              <div className={styles.icon2}></div>
                            </div>
                          </div>
                          <div className={styles.item}>10 ticks</div>
                          <div className={styles.containerIconRight}>
                            <div className={styles.iconLeft}>
                              <div className={styles.icon2}></div>
                            </div>
                          </div>
                          <div className={styles.bgFocus3} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.coverTop} />
                  <div className={styles.coverBottom} />
                  <div className={styles.containerHighlight}>
                    <div className={styles.highlight} />
                  </div>
                </div>
              </div>
              <div className={styles.details}>
                <div className={styles.div}>
                  <div className={styles.label1}>Payout - Higher</div>
                  <div className={styles.value}>45.38 USD</div>
                </div>
                <div className={styles.div}>
                  <div className={styles.label2}>Payout - Lower</div>
                  <div className={styles.value}>12.20 USD</div>
                </div>
                <div className={styles.div2}>
                  <div className={styles.label3}>Label</div>
                  <div className={styles.value2}>Value</div>
                </div>
              </div>
              <div className={styles.calendar}>
                <div className={styles.basicIconButtonBlackwhite}>
                  <div className={styles.labelPairedMdCircleInf}>
                    <div className={styles.icon22}></div>
                  </div>
                  <div className={styles.bgFocus13} />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.buttonActions}>
            <BasicButtonBlackWhite
              icon="none"
              size="lg"
              state="default"
              type="primary"
              width="fill container"
              focus1={false}
              label="Save"
              buttonPrimaryAlignSelf="stretch"
              buttonPrimaryWidth="unset"
              showButtonPrimary
            />
            <BasicButtonBlackWhite
              icon="none"
              size="lg"
              state="default"
              type="secondary"
              width="fill container"
              focus1={false}
              label="Label"
              buttonPrimaryAlignSelf="unset"
              buttonPrimaryWidth="328px"
              showButtonPrimary={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TradePage1;
