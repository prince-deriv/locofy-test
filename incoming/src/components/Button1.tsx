import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Button1.module.css";

export type Button1Type = {
  className?: string;
  labelText?: string;

  /** Variant props */
  showIcon?: boolean;
  state?: string;
  style?: string;

  /** Style props */
  buttonAlignSelf?: CSSProperties["alignSelf"];
};

const Button1: FunctionComponent<Button1Type> = ({
  className = "",
  showIcon = true,
  state = "Disabled",
  style = "Tonal",
  labelText = "Deposit",
  buttonAlignSelf,
}) => {
  const buttonStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: buttonAlignSelf,
    };
  }, [buttonAlignSelf]);

  return (
    <div
      className={[styles.button, className].join(" ")}
      data-showIcon={showIcon}
      data-state={state}
      data-style={style}
      style={buttonStyle}
    >
      <div className={styles.stateLayer}>
        <div className={styles.labelText}>{labelText}</div>
      </div>
    </div>
  );
};

export default Button1;
