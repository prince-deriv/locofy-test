import { FunctionComponent } from "react";
import Resizer from "./Resizer";
import InputsDropdownItemTex from "./InputsDropdownItemTex";
import styles from "./InputsDropdownListDef.module.css";

export type InputsDropdownListDefType = {
  className?: string;
  item16?: boolean;
  item8?: boolean;
  item18?: boolean;
  item1?: boolean;
  item20?: boolean;
  item10?: boolean;
  item3?: boolean;
  item11?: boolean;
  item5?: boolean;
  item19?: boolean;
  item4?: boolean;
  item6?: boolean;
  item12?: boolean;
  item14?: boolean;
  item17?: boolean;
  item13?: boolean;
  item2?: boolean;
  item9?: boolean;
  item15?: boolean;
  item7?: boolean;

  /** Variant props */
  group?: boolean;
  height?: string;
};

const InputsDropdownListDef: FunctionComponent<InputsDropdownListDefType> = ({
  className = "",
  group = false,
  height = "sm",
  item16 = true,
  item8 = true,
  item18 = true,
  item1 = true,
  item20 = true,
  item10 = true,
  item3 = true,
  item11 = true,
  item5 = true,
  item19 = true,
  item4 = true,
  item6 = true,
  item12 = true,
  item14 = true,
  item17 = true,
  item13 = true,
  item2 = true,
  item9 = true,
  item15 = true,
  item7 = true,
}) => {
  return (
    <div
      className={[styles.dropdownList, className].join(" ")}
      data-group={group}
      data-height={height}
    >
      <Resizer type="width" />
      <div className={styles.listItems}>
        {item1 && (
          <InputsDropdownItemTex
            select={false}
            state="default"
            item="Item"
            focus1={false}
            iconRight={false}
            iconLeft={false}
          />
        )}
        {item2 && (
          <InputsDropdownItemTex
            select={false}
            state="default"
            item="Item"
            focus1={false}
            iconRight={false}
            iconLeft={false}
            itemTextDecoration="unset"
          />
        )}
        {item3 && (
          <InputsDropdownItemTex
            select={false}
            state="default"
            item="Item"
            focus1={false}
            iconRight={false}
            iconLeft={false}
            itemTextDecoration="unset"
          />
        )}
        {item4 && (
          <InputsDropdownItemTex
            select={false}
            state="default"
            item="Item"
            focus1={false}
            iconRight={false}
            iconLeft={false}
            itemTextDecoration="unset"
          />
        )}
        {item5 && (
          <InputsDropdownItemTex
            select={false}
            state="default"
            item="Item"
            focus1={false}
            iconRight={false}
            iconLeft={false}
            itemTextDecoration="unset"
          />
        )}
        {item6 && (
          <InputsDropdownItemTex
            select={false}
            state="default"
            item="Item"
            focus1={false}
            iconRight={false}
            iconLeft={false}
            itemTextDecoration="unset"
          />
        )}
        {item7 && (
          <InputsDropdownItemTex
            select={false}
            state="default"
            item="Item"
            focus1={false}
            iconRight={false}
            iconLeft={false}
            itemTextDecoration="unset"
          />
        )}
        {item8 && (
          <InputsDropdownItemTex
            select={false}
            state="default"
            item="Item"
            focus1={false}
            iconRight={false}
            iconLeft={false}
            itemTextDecoration="unset"
          />
        )}
        {item9 && (
          <InputsDropdownItemTex
            select={false}
            state="default"
            item="Item"
            focus1={false}
            iconRight={false}
            iconLeft={false}
            itemTextDecoration="unset"
          />
        )}
        {item10 && (
          <InputsDropdownItemTex
            select={false}
            state="default"
            item="Item"
            focus1={false}
            iconRight={false}
            iconLeft={false}
            itemTextDecoration="unset"
          />
        )}
        {item11 && (
          <InputsDropdownItemTex
            select={false}
            state="default"
            item="Item"
            focus1={false}
            iconRight={false}
            iconLeft={false}
            itemTextDecoration="unset"
          />
        )}
        {item12 && (
          <InputsDropdownItemTex
            select={false}
            state="default"
            item="Item"
            focus1={false}
            iconRight={false}
            iconLeft={false}
            itemTextDecoration="unset"
          />
        )}
        {item13 && (
          <InputsDropdownItemTex
            select={false}
            state="default"
            item="Item"
            focus1={false}
            iconRight={false}
            iconLeft={false}
            itemTextDecoration="unset"
          />
        )}
        {item14 && (
          <InputsDropdownItemTex
            select={false}
            state="default"
            item="Item"
            focus1={false}
            iconRight={false}
            iconLeft={false}
            itemTextDecoration="unset"
          />
        )}
        {item15 && (
          <InputsDropdownItemTex
            select={false}
            state="default"
            item="Item"
            focus1={false}
            iconRight={false}
            iconLeft={false}
            itemTextDecoration="unset"
          />
        )}
        {item16 && (
          <InputsDropdownItemTex
            select={false}
            state="default"
            item="Item"
            focus1={false}
            iconRight={false}
            iconLeft={false}
            itemTextDecoration="unset"
          />
        )}
        {item17 && (
          <InputsDropdownItemTex
            select={false}
            state="default"
            item="Item"
            focus1={false}
            iconRight={false}
            iconLeft={false}
            itemTextDecoration="unset"
          />
        )}
        {item18 && (
          <InputsDropdownItemTex
            select={false}
            state="default"
            item="Item"
            focus1={false}
            iconRight={false}
            iconLeft={false}
            itemTextDecoration="unset"
          />
        )}
        {item19 && (
          <InputsDropdownItemTex
            select={false}
            state="default"
            item="Item"
            focus1={false}
            iconRight={false}
            iconLeft={false}
            itemTextDecoration="unset"
          />
        )}
        {item20 && (
          <InputsDropdownItemTex
            select={false}
            state="default"
            item="Item"
            focus1={false}
            iconRight={false}
            iconLeft={false}
            itemTextDecoration="unset"
          />
        )}
      </div>
      <div className={styles.scrollBar} />
    </div>
  );
};

export default InputsDropdownListDef;
