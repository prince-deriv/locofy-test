import { FunctionComponent } from "react";
import InputFieldMarkerCaption from "./InputFieldMarkerCaption";
import BasicIconButtonBlackWhite1 from "./BasicIconButtonBlackWhite1";
import styles from "./TextFieldWithSteppersRig.module.css";

export type TextFieldWithSteppersRigType = {
  className?: string;
  fieldMarker?: boolean;
  characterCounter?: boolean;
  label?: string;
  labelRight?: string;
  labelLeft?: string;
  message?: boolean;
  messageCharacterCounter?: boolean;

  /** Variant props */
  state?: string;
  status1?: string;
  input?: boolean;
};

const TextFieldWithSteppersRig: FunctionComponent<
  TextFieldWithSteppersRigType
> = ({
  className = "",
  state = "default",
  status1 = "neutral",
  input = false,
  fieldMarker = false,
  characterCounter = true,
  label = "Stake (USD)",
  labelRight = "Label",
  labelLeft = "Label",
  message = true,
  messageCharacterCounter = false,
}) => {
  return (
    <div
      className={[styles.textFieldWithSteppersRig, className].join(" ")}
      data-input={input}
      data-state={state}
      data-status={status1}
    >
      <div className={styles.field}>
        <div className={styles.labelPlaceholderInputCur}>
          <div className={styles.labelMarker}>
            <a className={styles.label}>{label}</a>
            {fieldMarker && (
              <InputFieldMarkerCaption
                type="required"
                inputFieldMarkerCaptionDisplay="flex"
              />
            )}
          </div>
          <div className={styles.labelLeftPlaceholderInp}>
            {labelLeft && (
              <div className={styles.containerLabelLeft}>
                <div className={styles.labelLeft}>{labelLeft}</div>
              </div>
            )}
            <div className={styles.placeholderInputCursor}>
              <div className={styles.input}>{input}</div>
            </div>
            {labelRight && (
              <div className={styles.containerLabelRight}>
                <div className={styles.labelRight}>{labelRight}</div>
              </div>
            )}
          </div>
        </div>
        <div className={styles.buttonPlusButtonMinus}>
          <BasicIconButtonBlackWhite1
            size="md"
            state="default"
            style="tertiary"
            width="hug content"
            focus1={false}
          />
          <BasicIconButtonBlackWhite1
            size="md"
            state="default"
            style="tertiary"
            width="hug content"
            focus1={false}
          />
        </div>
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

export default TextFieldWithSteppersRig;
