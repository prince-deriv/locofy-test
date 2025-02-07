import { FunctionComponent, useMemo, type CSSProperties } from "react";
import StandaloneSm0Placeholde from "./StandaloneSm0Placeholde";
import InputFieldMarkerXs from "./InputFieldMarkerXs";
import styles from "./TextFieldLabelledFill.module.css";

export type TextFieldLabelledFillType = {
  className?: string;
  message?: boolean;
  messageCharacterCounter?: boolean;
  iconRight?: boolean;
  fieldMarker?: boolean;
  characterCounter?: string;
  label?: string;
  iconLeft?: boolean;
  showContractOptions?: boolean;
  placeholder?: string;

  /** Variant props */
  state?: string;
  status1?: string;
  input?: boolean;

  /** Style props */
  contractOptionsAlignSelf?: CSSProperties["alignSelf"];
  contractOptionsWidth?: CSSProperties["width"];
  labelTextDecoration?: CSSProperties["textDecoration"];
  labelHeight?: CSSProperties["height"];
  labelWidth?: CSSProperties["width"];
  labelDisplay?: CSSProperties["display"];
  placeholderInputCursorBorder?: CSSProperties["border"];
  placeholderInputCursorOutline?: CSSProperties["outline"];
  placeholderInputCursorBackgroundColor?: CSSProperties["backgroundColor"];
  placeholderInputCursorFontFamily?: CSSProperties["fontFamily"];
  placeholderInputCursorFontSize?: CSSProperties["fontSize"];
  placeholderInputCursorColor?: CSSProperties["color"];
  propHeight?: CSSProperties["height"];
  propWidth?: CSSProperties["width"];
  propDisplay?: CSSProperties["display"];
};

const TextFieldLabelledFill: FunctionComponent<TextFieldLabelledFillType> = ({
  className = "",
  state = "default",
  status1 = "neutral",
  input = false,
  message = true,
  messageCharacterCounter = false,
  iconRight = false,
  fieldMarker = false,
  characterCounter = "0/0",
  label = "Duration",
  iconLeft = false,
  showContractOptions,
  contractOptionsAlignSelf,
  contractOptionsWidth,
  labelTextDecoration,
  labelHeight,
  labelWidth,
  labelDisplay,
  placeholder,
  placeholderInputCursorBorder,
  placeholderInputCursorOutline,
  placeholderInputCursorBackgroundColor,
  placeholderInputCursorFontFamily,
  placeholderInputCursorFontSize,
  placeholderInputCursorColor,
  propHeight,
  propWidth,
  propDisplay,
}) => {
  const contractOptionsStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: contractOptionsAlignSelf,
      width: contractOptionsWidth,
    };
  }, [contractOptionsAlignSelf, contractOptionsWidth]);

  const label1Style: CSSProperties = useMemo(() => {
    return {
      textDecoration: labelTextDecoration,
      height: labelHeight,
      width: labelWidth,
      display: labelDisplay,
    };
  }, [labelTextDecoration, labelHeight, labelWidth, labelDisplay]);

  const placeholderInputCursorStyle: CSSProperties = useMemo(() => {
    return {
      border: placeholderInputCursorBorder,
      outline: placeholderInputCursorOutline,
      backgroundColor: placeholderInputCursorBackgroundColor,
      fontFamily: placeholderInputCursorFontFamily,
      fontSize: placeholderInputCursorFontSize,
      color: placeholderInputCursorColor,
    };
  }, [
    placeholderInputCursorBorder,
    placeholderInputCursorOutline,
    placeholderInputCursorBackgroundColor,
    placeholderInputCursorFontFamily,
    placeholderInputCursorFontSize,
    placeholderInputCursorColor,
  ]);

  const Style: CSSProperties = useMemo(() => {
    return {
      height: propHeight,
      width: propWidth,
      display: propDisplay,
    };
  }, [propHeight, propWidth, propDisplay]);

  return (
    showContractOptions && (
      <div
        className={[styles.contractOptions, className].join(" ")}
        data-input={input}
        data-state={state}
        data-status={status1}
        style={contractOptionsStyle}
      >
        <div className={styles.field}>
          {iconLeft && <StandaloneSm0Placeholde style="regular" icon="" />}
          <div className={styles.labelPlaceholderInputCur}>
            <div className={styles.labelMarker}>
              <a className={styles.label} style={label1Style}>
                {label}
              </a>
              {fieldMarker && (
                <InputFieldMarkerXs type="required" fieldMarkerDisplay="flex" />
              )}
            </div>
            <input
              className={styles.placeholderInputCursor}
              placeholder={placeholder}
              type="text"
              style={placeholderInputCursorStyle}
            />
          </div>
          {iconRight && (
            <StandaloneSm0Placeholde
              style="regular"
              icon=""
              iconLeftDisplay="flex"
            />
          )}
        </div>
        {messageCharacterCounter && (
          <div className={styles.messageCharacterCounter}>
            {message && <div className={styles.message}>{message}</div>}
            {characterCounter && (
              <div className={styles.characterCounter}>{characterCounter}</div>
            )}
          </div>
        )}
      </div>
    )
  );
};

export default TextFieldLabelledFill;
