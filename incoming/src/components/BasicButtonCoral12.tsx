import { FunctionComponent } from "react";
import styles from "./BasicButtonCoral12.module.css";

export type BasicButtonCoral12Type = {
  className?: string;
  label?: string;

  /** Variant props */
  icon?: string;
  size?: string;
  state?: string;
  style?: string;
  width?: string;
};

const BasicButtonCoral12: FunctionComponent<BasicButtonCoral12Type> = ({
  className = "",
  icon = "left",
  size = "lg",
  state = "default",
  style = "primary",
  width = "hug content",
  label = "Label",
}) => {
  return (
    <div
      className={[styles.styleprimarySizelgWidth, className].join(" ")}
      data-icon={icon}
      data-size={size}
      data-state={state}
      data-style={style}
      data-width={width}
    >
      <div className={styles.icon}></div>
      <a className={styles.label}>{label}</a>
      <div className={styles.icon1}></div>
      <div className={styles.icon2}></div>
    </div>
  );
};

export default BasicButtonCoral12;
