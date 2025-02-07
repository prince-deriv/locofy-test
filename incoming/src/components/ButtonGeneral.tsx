import { FunctionComponent } from "react";
import styles from "./ButtonGeneral.module.css";

export type ButtonGeneralType = {
  className?: string;

  /** Variant props */
  labelIcon?: string;
  size?: string;
  states?: string;
  theme?: string;
  type?: string;
};

const ButtonGeneral: FunctionComponent<ButtonGeneralType> = ({
  className = "",
  labelIcon = "label",
  size = "24px",
  states = "default",
  theme = "light",
  type = "primary",
}) => {
  return (
    <div
      className={[styles.buttonUpgrade, className].join(" ")}
      data-labelIcon={labelIcon}
      data-size={size}
      data-states={states}
      data-theme={theme}
      data-type={type}
    >
      <a className={styles.label}>Deposit</a>
    </div>
  );
};

export default ButtonGeneral;
