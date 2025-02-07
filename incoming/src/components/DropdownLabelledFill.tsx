import { FunctionComponent, useMemo, type CSSProperties } from "react";
import StandaloneSm0Placeholde1 from "./StandaloneSm0Placeholde1";
import StandaloneSmChevronDown from "./StandaloneSmChevronDown";
import Resizer from "./Resizer";
import styles from "./DropdownLabelledFill.module.css";

export type DropdownLabelledFillType = {
  className?: string;
  fieldMarker?: boolean;
  iconLeft?: boolean;
  label?: string;
  message?: string;

  /** Variant props */
  state?: string;
  status1?: string;
  item?: boolean;

  /** Style props */
  labelHeight?: CSSProperties["height"];
  labelWidth?: CSSProperties["width"];
  labelDisplay?: CSSProperties["display"];
  labelTextDecoration?: CSSProperties["textDecoration"];
  itemWidth?: CSSProperties["width"];
  itemHeight?: CSSProperties["height"];
  itemDisplay?: CSSProperties["display"];
  itemAlignSelf?: CSSProperties["alignSelf"];
};

const DropdownLabelledFill: FunctionComponent<DropdownLabelledFillType> = ({
  className = "",
  state = "default",
  status1 = "neutral",
  item = false,
  fieldMarker = false,
  iconLeft = false,
  label = "Label",
  message = "Message goes here",
  labelHeight,
  labelWidth,
  labelDisplay,
  labelTextDecoration,
  itemWidth,
  itemHeight,
  itemDisplay,
  itemAlignSelf,
}) => {
  const label3Style: CSSProperties = useMemo(() => {
    return {
      height: labelHeight,
      width: labelWidth,
      display: labelDisplay,
      textDecoration: labelTextDecoration,
    };
  }, [labelHeight, labelWidth, labelDisplay, labelTextDecoration]);

  const itemStyle: CSSProperties = useMemo(() => {
    return {
      width: itemWidth,
      height: itemHeight,
      display: itemDisplay,
      alignSelf: itemAlignSelf,
    };
  }, [itemWidth, itemHeight, itemDisplay, itemAlignSelf]);

  return (
    <div
      className={[styles.dropdownLabelledFill, className].join(" ")}
      data-item={item}
      data-state={state}
      data-status={status1}
    >
      <div className={styles.field}>
        {iconLeft && (
          <StandaloneSm0Placeholde1
            style="regular"
            icon=""
            iconRightDisplay="flex"
          />
        )}
        <div className={styles.labelPlaceholderItem}>
          <div className={styles.labelMarker}>
            <div className={styles.label} style={label3Style}>
              {label}
            </div>
            {fieldMarker && (
              <div className={styles.fieldMarker}>
                <div className={styles.label1}>*</div>
              </div>
            )}
          </div>
          <div className={styles.item} style={itemStyle}>
            {item}
          </div>
        </div>
        <StandaloneSmChevronDown style="regular" />
      </div>
      {message && (
        <div className={styles.message1}>
          <div className={styles.message}>{message}</div>
        </div>
      )}
      <div className={styles.dropdownList}>
        <Resizer type="width" />
        <div className={styles.listItems}>
          <div className={styles.item11}>
            <div className={styles.containerIconLeft}>
              <div className={styles.iconLeft}>
                <div className={styles.icon}></div>
              </div>
            </div>
            <div className={styles.item1}>Item</div>
            <div className={styles.containerIconRight}>
              <div className={styles.iconRight}>
                <div className={styles.icon1}></div>
              </div>
            </div>
            <div className={styles.bgFocus} />
          </div>
          <div className={styles.item21}>
            <div className={styles.containerIconLeft1}>
              <div className={styles.iconLeft1}>
                <div className={styles.icon2}></div>
              </div>
            </div>
            <div className={styles.item2}>Item</div>
            <div className={styles.containerIconRight1}>
              <div className={styles.iconRight1}>
                <div className={styles.icon3}></div>
              </div>
            </div>
            <div className={styles.bgFocus1} />
          </div>
          <div className={styles.item31}>
            <div className={styles.containerIconLeft2}>
              <div className={styles.iconLeft2}>
                <div className={styles.icon4}></div>
              </div>
            </div>
            <div className={styles.item3}>Item</div>
            <div className={styles.containerIconRight2}>
              <div className={styles.iconRight2}>
                <div className={styles.icon5}></div>
              </div>
            </div>
            <div className={styles.bgFocus2} />
          </div>
          <div className={styles.item41}>
            <div className={styles.containerIconLeft3}>
              <div className={styles.iconLeft3}>
                <div className={styles.icon6}></div>
              </div>
            </div>
            <div className={styles.item4}>Item</div>
            <div className={styles.containerIconRight3}>
              <div className={styles.iconRight3}>
                <div className={styles.icon7}></div>
              </div>
            </div>
            <div className={styles.bgFocus3} />
          </div>
          <div className={styles.item51}>
            <div className={styles.containerIconLeft4}>
              <div className={styles.iconLeft4}>
                <div className={styles.icon8}></div>
              </div>
            </div>
            <div className={styles.item5}>Item</div>
            <div className={styles.containerIconRight4}>
              <div className={styles.iconRight4}>
                <div className={styles.icon9}></div>
              </div>
            </div>
            <div className={styles.bgFocus4} />
          </div>
          <div className={styles.item61}>
            <div className={styles.containerIconLeft5}>
              <div className={styles.iconLeft5}>
                <div className={styles.icon10}></div>
              </div>
            </div>
            <div className={styles.item6}>Item</div>
            <div className={styles.containerIconRight5}>
              <div className={styles.iconRight5}>
                <div className={styles.icon11}></div>
              </div>
            </div>
            <div className={styles.bgFocus5} />
          </div>
          <div className={styles.item71}>
            <div className={styles.containerIconLeft6}>
              <div className={styles.iconLeft6}>
                <div className={styles.icon12}></div>
              </div>
            </div>
            <div className={styles.item7}>Item</div>
            <div className={styles.containerIconRight6}>
              <div className={styles.iconRight6}>
                <div className={styles.icon13}></div>
              </div>
            </div>
            <div className={styles.bgFocus6} />
          </div>
          <div className={styles.item81}>
            <div className={styles.containerIconLeft7}>
              <div className={styles.iconLeft7}>
                <div className={styles.icon14}></div>
              </div>
            </div>
            <div className={styles.item8}>Item</div>
            <div className={styles.containerIconRight7}>
              <div className={styles.iconRight7}>
                <div className={styles.icon15}></div>
              </div>
            </div>
            <div className={styles.bgFocus7} />
          </div>
          <div className={styles.item91}>
            <div className={styles.containerIconLeft8}>
              <div className={styles.iconLeft8}>
                <div className={styles.icon16}></div>
              </div>
            </div>
            <div className={styles.item9}>Item</div>
            <div className={styles.containerIconRight8}>
              <div className={styles.iconRight8}>
                <div className={styles.icon17}></div>
              </div>
            </div>
            <div className={styles.bgFocus8} />
          </div>
          <div className={styles.item101}>
            <div className={styles.containerIconLeft9}>
              <div className={styles.iconLeft9}>
                <div className={styles.icon18}></div>
              </div>
            </div>
            <div className={styles.item10}>Item</div>
            <div className={styles.containerIconRight9}>
              <div className={styles.iconRight9}>
                <div className={styles.icon19}></div>
              </div>
            </div>
            <div className={styles.bgFocus9} />
          </div>
          <div className={styles.item111}>
            <div className={styles.containerIconLeft10}>
              <div className={styles.iconLeft10}>
                <div className={styles.icon20}></div>
              </div>
            </div>
            <div className={styles.item12}>Item</div>
            <div className={styles.containerIconRight10}>
              <div className={styles.iconRight10}>
                <div className={styles.icon21}></div>
              </div>
            </div>
            <div className={styles.bgFocus10} />
          </div>
          <div className={styles.item121}>
            <div className={styles.containerIconLeft11}>
              <div className={styles.iconLeft11}>
                <div className={styles.icon22}></div>
              </div>
            </div>
            <div className={styles.item13}>Item</div>
            <div className={styles.containerIconRight11}>
              <div className={styles.iconRight11}>
                <div className={styles.icon23}></div>
              </div>
            </div>
            <div className={styles.bgFocus11} />
          </div>
          <div className={styles.item131}>
            <div className={styles.containerIconLeft12}>
              <div className={styles.iconLeft12}>
                <div className={styles.icon24}></div>
              </div>
            </div>
            <div className={styles.item14}>Item</div>
            <div className={styles.containerIconRight12}>
              <div className={styles.iconRight12}>
                <div className={styles.icon25}></div>
              </div>
            </div>
            <div className={styles.bgFocus12} />
          </div>
          <div className={styles.item141}>
            <div className={styles.containerIconLeft13}>
              <div className={styles.iconLeft13}>
                <div className={styles.icon26}></div>
              </div>
            </div>
            <div className={styles.item15}>Item</div>
            <div className={styles.containerIconRight13}>
              <div className={styles.iconRight13}>
                <div className={styles.icon27}></div>
              </div>
            </div>
            <div className={styles.bgFocus13} />
          </div>
          <div className={styles.item151}>
            <div className={styles.containerIconLeft14}>
              <div className={styles.iconLeft14}>
                <div className={styles.icon28}></div>
              </div>
            </div>
            <div className={styles.item16}>Item</div>
            <div className={styles.containerIconRight14}>
              <div className={styles.iconRight14}>
                <div className={styles.icon29}></div>
              </div>
            </div>
            <footer className={styles.bgFocus14} />
          </div>
          <div className={styles.item161}>
            <div className={styles.containerIconLeft15}>
              <div className={styles.iconLeft15}>
                <div className={styles.icon30}></div>
              </div>
            </div>
            <div className={styles.item17}>Item</div>
            <div className={styles.containerIconRight15}>
              <div className={styles.iconRight15}>
                <div className={styles.icon31}></div>
              </div>
            </div>
            <div className={styles.bgFocus15} />
          </div>
          <div className={styles.item171}>
            <div className={styles.containerIconLeft16}>
              <div className={styles.iconLeft16}>
                <div className={styles.icon32}></div>
              </div>
            </div>
            <div className={styles.item18}>Item</div>
            <div className={styles.containerIconRight16}>
              <div className={styles.iconRight16}>
                <div className={styles.icon33}></div>
              </div>
            </div>
            <div className={styles.bgFocus16} />
          </div>
          <div className={styles.item181}>
            <div className={styles.containerIconLeft17}>
              <div className={styles.iconLeft17}>
                <div className={styles.icon34}></div>
              </div>
            </div>
            <div className={styles.item19}>Item</div>
            <div className={styles.containerIconRight17}>
              <div className={styles.iconRight17}>
                <div className={styles.icon35}></div>
              </div>
            </div>
            <div className={styles.bgFocus17} />
          </div>
          <div className={styles.item191}>
            <div className={styles.containerIconLeft18}>
              <div className={styles.iconLeft18}>
                <div className={styles.icon36}></div>
              </div>
            </div>
            <div className={styles.item20}>Item</div>
            <div className={styles.containerIconRight18}>
              <div className={styles.iconRight18}>
                <div className={styles.icon37}></div>
              </div>
            </div>
            <div className={styles.bgFocus18} />
          </div>
          <div className={styles.item201}>
            <div className={styles.containerIconLeft19}>
              <div className={styles.iconLeft19}>
                <div className={styles.icon38}></div>
              </div>
            </div>
            <div className={styles.item22}>Item</div>
            <div className={styles.containerIconRight19}>
              <div className={styles.iconRight19}>
                <div className={styles.icon39}></div>
              </div>
            </div>
            <div className={styles.bgFocus19} />
          </div>
        </div>
        <div className={styles.scrollBar} />
      </div>
    </div>
  );
};

export default DropdownLabelledFill;
