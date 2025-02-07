import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./InputFieldMarkerCaption.module.css";

export type InputFieldMarkerCaptionType = {
  className?: string;

  /** Variant props */
  type?: string;

  /** Style props */
  inputFieldMarkerCaptionDisplay?: CSSProperties["display"];
};

const InputFieldMarkerCaption: FunctionComponent<
  InputFieldMarkerCaptionType
> = ({ className = "", type = "required", inputFieldMarkerCaptionDisplay }) => {
  const inputFieldMarkerCaptionStyle: CSSProperties = useMemo(() => {
    return {
      display: inputFieldMarkerCaptionDisplay,
    };
  }, [inputFieldMarkerCaptionDisplay]);

  return (
    <div
      className={[styles.inputFieldMarkerCaption, className].join(" ")}
      data-type={type}
      style={inputFieldMarkerCaptionStyle}
    >
      <div className={styles.label}>*</div>
    </div>
  );
};

export default InputFieldMarkerCaption;
