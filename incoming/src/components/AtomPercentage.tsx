import { FunctionComponent } from "react";
import styles from "./AtomPercentage.module.css";

export type AtomPercentageType = {
  className?: string;
  label?: string;

  /** Variant props */
  type?: "neutral" | "loss" | "profit";
};

const AtomPercentage: FunctionComponent<AtomPercentageType> = ({
  className = "",
  type = "neutral",
  label,
}) => {
  return (
    <div className={[styles.root, className].join(" ")} data-type={type}>
      <div className={styles.label}>{label}</div>
    </div>
  );
};

export default AtomPercentage;
