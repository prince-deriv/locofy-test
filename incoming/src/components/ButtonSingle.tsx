import { FunctionComponent } from "react";
import styles from "./ButtonSingle.module.css";

export type ButtonSingleType = {
  className?: string;
  showDetails?: boolean;
  value?: string;
  label?: string;
  title?: string;

  /** Variant props */
  state?: string;
  type?: string;
};

const ButtonSingle: FunctionComponent<ButtonSingleType> = ({
  className = "",
  state = "default",
  type = "green",
  showDetails = false,
  value = "19.55 USD",
  label = "Payout",
  title = "Touch",
}) => {
  return (
    <div
      className={[styles.button1, className].join(" ")}
      data-state={state}
      data-type={type}
    >
      <div className={styles.titleDetails}>
        <div className={styles.title}>
          <b className={styles.label}>{title}</b>
        </div>
        {showDetails && (
          <div className={styles.details}>
            <div className={styles.label2}>
              <div className={styles.label1}>{label}</div>
            </div>
            <div className={styles.value1}>
              <div className={styles.value}>{value}</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ButtonSingle;
