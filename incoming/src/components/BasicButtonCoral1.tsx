import { FunctionComponent } from "react";
import styles from "./BasicButtonCoral1.module.css";

export type BasicButtonCoral1Type = {
  className?: string;
};

const BasicButtonCoral1: FunctionComponent<BasicButtonCoral1Type> = ({
  className = "",
}) => {
  return (
    <div className={[styles.basicbuttonCoral, className].join(" ")}>
      <div className={styles.containerIcon}>
        <div className={styles.lefticon}></div>
      </div>
      <a className={styles.label}>Label</a>
      <div className={styles.containerIcon1}>
        <div className={styles.lefticon}></div>
      </div>
      <div className={styles.bgFocus} />
      <div className={styles.icon}></div>
    </div>
  );
};

export default BasicButtonCoral1;
