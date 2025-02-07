import { FunctionComponent } from "react";
import styles from "./TextField.module.css";

export type TextFieldType = {
  className?: string;
  inputText?: string;
  supportingText?: string;
  labelText?: string;
  showSupportingText?: boolean;

  /** Variant props */
  leadingIcon?: boolean;
  state?: string;
  style?: string;
  textConfigurations?: string;
  trailingIcon?: boolean;
};

const TextField: FunctionComponent<TextFieldType> = ({
  className = "",
  leadingIcon = true,
  state = "Disabled",
  style = "Outlined",
  textConfigurations = "Placeholder text",
  trailingIcon = false,
  inputText = "1 minute",
  supportingText = "Supporting text",
  labelText = "Duration",
  showSupportingText = false,
}) => {
  return (
    <div
      className={[styles.textField1, className].join(" ")}
      data-leadingIcon={leadingIcon}
      data-state={state}
      data-style={style}
      data-textConfigurations={textConfigurations}
      data-trailingIcon={trailingIcon}
    >
      <div className={styles.textField}>
        <div className={styles.stateLayer}>
          <div className={styles.content}>
            <div className={styles.labelTextContainer}>
              <div className={styles.labelText}>{labelText}</div>
            </div>
            <div className={styles.inputTextContainer}>
              <div className={styles.inputText}>{inputText}</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.activeIndicator} />
      {showSupportingText && (
        <div className={styles.supportingText1}>
          <div className={styles.supportingText}>{supportingText}</div>
        </div>
      )}
    </div>
  );
};

export default TextField;
