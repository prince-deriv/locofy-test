import { FunctionComponent } from "react";
import styles from "./AtomSelector.module.css";

export type AtomSelectorType = {
  className?: string;
  prop?: string;

  /** Variant props */
  active?: string;
};

const AtomSelector: FunctionComponent<AtomSelectorType> = ({
  className = "",
  active = "off",
  prop,
}) => {
  return (
    <div
      className={[styles.selector, className].join(" ")}
      data-active={active}
    >
      <div className={styles.div}>{prop}</div>
    </div>
  );
};

export default AtomSelector;
