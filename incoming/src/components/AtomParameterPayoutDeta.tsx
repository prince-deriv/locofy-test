import { FunctionComponent } from "react";
import styles from "./AtomParameterPayoutDeta.module.css";

export type AtomParameterPayoutDetaType = {
  className?: string;

  /** Variant props */
  type?: string;
};

const AtomParameterPayoutDeta: FunctionComponent<
  AtomParameterPayoutDetaType
> = ({ className = "", type = "item list" }) => {
  return (
    <div className={[styles.div, className].join(" ")} data-type={type}>
      <div className={styles.label}>Label</div>
      <div className={styles.value}>[Value]</div>
    </div>
  );
};

export default AtomParameterPayoutDeta;
