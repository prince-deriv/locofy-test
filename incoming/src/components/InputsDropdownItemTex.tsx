import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./InputsDropdownItemTex.module.css";

export type InputsDropdownItemTexType = {
  className?: string;
  item?: string;
  focus1?: boolean;
  iconRight?: boolean;
  iconLeft?: boolean;

  /** Variant props */
  select?: boolean;
  state?: string;

  /** Style props */
  itemTextDecoration?: CSSProperties["textDecoration"];
};

const InputsDropdownItemTex: FunctionComponent<InputsDropdownItemTexType> = ({
  className = "",
  select = false,
  state = "default",
  item = "Item",
  focus1 = false,
  iconRight = false,
  iconLeft = false,
  itemTextDecoration,
}) => {
  const item2Style: CSSProperties = useMemo(() => {
    return {
      textDecoration: itemTextDecoration,
    };
  }, [itemTextDecoration]);

  return (
    <div
      className={[styles.item1, className].join(" ")}
      data-select={select}
      data-state={state}
    >
      {iconLeft && (
        <div className={styles.containerIconLeft}>
          <div className={styles.iconLeft}>
            <div className={styles.icon}></div>
          </div>
        </div>
      )}
      <a className={styles.item} style={item2Style}>
        {item}
      </a>
      {iconRight && (
        <div className={styles.containerIconRight}>
          <div className={styles.iconRight}>
            <div className={styles.icon1}></div>
          </div>
        </div>
      )}
      {focus1 && <div className={styles.bgFocus} />}
    </div>
  );
};

export default InputsDropdownItemTex;
