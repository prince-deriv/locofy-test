import { FunctionComponent } from "react";
import StandaloneSm0Placeholde1 from "./StandaloneSm0Placeholde1";
import StandaloneSmChevronDown1 from "./StandaloneSmChevronDown1";
import InputsDropdownListDef from "./InputsDropdownListDef";
import styles from "./DropdownLabellessOutline.module.css";

export type DropdownLabellessOutlineType = {
  className?: string;
  placeholder?: string;
  iconLeft?: boolean;
  message?: boolean;

  /** Variant props */
  item?: boolean;
  size?: string;
  state?: string;
  status1?: string;
  textAlignment?: string;
};

const DropdownLabellessOutline: FunctionComponent<
  DropdownLabellessOutlineType
> = ({
  className = "",
  item = false,
  size = "md",
  state = "default",
  status1 = "neutral",
  textAlignment = "left",
  placeholder = "Select trade type",
  iconLeft = false,
  message = false,
}) => {
  return (
    <div
      className={[styles.dropdownLabellessOutline, className].join(" ")}
      data-item={item}
      data-size={size}
      data-state={state}
      data-status={status1}
      data-textAlignment={textAlignment}
    >
      <div className={styles.field}>
        {iconLeft && (
          <div className={styles.containerIconLeft}>
            <StandaloneSm0Placeholde1
              style="regular"
              icon=""
              iconRightDisplay="none"
            />
          </div>
        )}
        <div className={styles.placeholderItemCursor}>
          <div className={styles.placeholder}>{placeholder}</div>
        </div>
        <StandaloneSmChevronDown1 style="regular" />
      </div>
      {message && (
        <div className={styles.message1}>
          <div className={styles.message}>{message}</div>
        </div>
      )}
      <InputsDropdownListDef
        group={false}
        height="md"
        item16
        item8
        item18
        item1
        item20
        item10
        item3
        item11
        item5
        item19
        item4
        item6
        item12
        item14
        item17
        item13
        item2
        item9
        item15
        item7
      />
    </div>
  );
};

export default DropdownLabellessOutline;
