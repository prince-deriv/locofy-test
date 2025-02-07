import { FunctionComponent } from "react";
import styles from "./Resizer.module.css";

export type ResizerType = {
  className?: string;

  /** Variant props */
  type?: string;
};

const Resizer: FunctionComponent<ResizerType> = ({
  className = "",
  type = "width",
}) => {
  return (
    <div className={[styles.resizer, className].join(" ")} data-type={type}>
      <div className={styles.left} />
      <div className={styles.right} />
    </div>
  );
};

export default Resizer;
