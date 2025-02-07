import { FunctionComponent } from "react";
import StandaloneSm0Placeholde1 from "./StandaloneSm0Placeholde1";
import styles from "./InputGroupTextFieldAdd.module.css";

export type InputGroupTextFieldAddType = {
  className?: string;
  addonLeft?: string;
  iconRight?: boolean;
  addonRight?: string;
  messageCharacterCounter?: boolean;
  characterCounter?: string;
  message?: boolean;

  /** Variant props */
  addon?: string;
  size?: string;
  state?: string;
  status1?: string;
  input?: boolean;
};

const InputGroupTextFieldAdd: FunctionComponent<InputGroupTextFieldAddType> = ({
  className = "",
  addon = "left",
  size = "sm",
  state = "default",
  status1 = "neutral",
  input = false,
  addonLeft = "+",
  iconRight = false,
  addonRight = "Distance to spot",
  messageCharacterCounter = false,
  characterCounter = "0/0",
  message = true,
}) => {
  return (
    <div
      className={[styles.inputGroupTextFieldAdd, className].join(" ")}
      data-addon={addon}
      data-input={input}
      data-size={size}
      data-state={state}
      data-status={status1}
    >
      <div className={styles.field}>
        <div className={styles.addonLeft}>
          <div className={styles.label}>{addonLeft}</div>
        </div>
        <div className={styles.textfield}>
          <div className={styles.placeholderInputCursor}>
            <div className={styles.input}>{input}</div>
          </div>
          {iconRight && (
            <StandaloneSm0Placeholde1
              style="regular"
              icon=""
              iconRightDisplay="flex"
            />
          )}
        </div>
        {addonRight && (
          <div className={styles.addonRight}>
            <div className={styles.label1}>{addonRight}</div>
          </div>
        )}
      </div>
      {messageCharacterCounter && (
        <div className={styles.message1}>
          {message && <div className={styles.message}>{message}</div>}
          {characterCounter && (
            <div className={styles.characterCounter}>{characterCounter}</div>
          )}
        </div>
      )}
    </div>
  );
};

export default InputGroupTextFieldAdd;
