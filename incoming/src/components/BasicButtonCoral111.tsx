import { FunctionComponent } from "react";
import styles from "./BasicButtonCoral111.module.css";

export type BasicButtonCoral111Type = {
  className?: string;
  showRightIcon?: boolean;
  rightIcon?: string;
  showLeftIcon?: boolean;
  label?: string;
  leftIcon?: string;
  isLoading?: boolean;
  showLabel?: boolean;
  isfocus?: boolean;

  /** Variant props */
  size?: string;
  state?: string;
  style?: string;
  width?: string;
};

const BasicButtonCoral111: FunctionComponent<BasicButtonCoral111Type> = ({
  className = "",
  size = "lg",
  state = "default",
  style = "primary",
  width = "hug content",
  showRightIcon = true,
  rightIcon = "",
  showLeftIcon = true,
  label = "Label",
  leftIcon = "",
  isLoading = true,
  showLabel = true,
  isfocus = true,
}) => {
  return (
    <div
      className={[styles.styleprimarySizelgWidth, className].join(" ")}
      data-size={size}
      data-state={state}
      data-style={style}
      data-width={width}
    >
      <div className={styles.containerIcon}>
        {showLeftIcon && <div className={styles.lefticon}>{leftIcon}</div>}
      </div>
      {showLabel && <a className={styles.label}>{label}</a>}
      <div className={styles.containerIcon1}>
        {showRightIcon && <div className={styles.righticon}>{rightIcon}</div>}
      </div>
      {isfocus && <div className={styles.bgFocus} />}
      {isLoading && <div className={styles.icon}></div>}
    </div>
  );
};

export default BasicButtonCoral111;
