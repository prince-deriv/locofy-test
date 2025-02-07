import { FunctionComponent } from "react";
import StandaloneSm0Placeholde2 from "./StandaloneSm0Placeholde2";
import InputFieldMarkerMd from "./InputFieldMarkerMd";
import styles from "./TextFieldLabelled.module.css";

export type TextFieldLabelledType = {
  className?: string;
  label?: string;
  message?: boolean;
  messageCharacterCounter?: boolean;
  iconRight?: boolean;
  fieldMarker?: boolean;
  characterCounter?: boolean;
  iconLeft?: boolean;

  /** Variant props */
  input?: boolean;
  state?: string;
  status1?: string;
  type?: string;
};

const TextFieldLabelled: FunctionComponent<TextFieldLabelledType> = ({
  className = "",
  input = false,
  state = "default",
  status1 = "neutral",
  type = "outline",
  label = "Label",
  message = true,
  messageCharacterCounter = true,
  iconRight = true,
  fieldMarker = true,
  characterCounter = true,
  iconLeft = true,
}) => {
  return (
    <div
      className={[styles.typeoutlineStatusneutral, className].join(" ")}
      data-input={input}
      data-state={state}
      data-status={status1}
      data-type={type}
    >
      <div className={styles.field}>
        {iconLeft && <StandaloneSm0Placeholde2 style="regular" icon="" />}
        <div className={styles.labelPlaceholderInputCur}>
          <div className={styles.labelMarker}>
            <a className={styles.label}>{label}</a>
            {fieldMarker && <InputFieldMarkerMd type="required" />}
          </div>
        </div>
        {iconRight && <StandaloneSm0Placeholde2 style="regular" icon="" />}
      </div>
      {messageCharacterCounter && (
        <div className={styles.messageCharacterCounter}>
          {message && <div className={styles.message}>{message}</div>}
          {characterCounter && (
            <a className={styles.characterCounter}>{characterCounter}</a>
          )}
        </div>
      )}
    </div>
  );
};

export default TextFieldLabelled;
