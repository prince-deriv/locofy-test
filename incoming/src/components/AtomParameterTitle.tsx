import { FunctionComponent } from "react";
import LabelPairedSmPresentati from "./LabelPairedSmPresentati";
import styles from "./AtomParameterTitle.module.css";

export type AtomParameterTitleType = {
  className?: string;
};

const AtomParameterTitle: FunctionComponent<AtomParameterTitleType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.atomParameterTitle, className].join(" ")}>
      <div className={styles.title}>
        <a className={styles.setYourTrade}>Set your trade</a>
      </div>
      <button className={styles.basicButtonBlackwhite}>
        <LabelPairedSmPresentati style="bold" />
        <a className={styles.label}>Guide</a>
        <div className={styles.bgFocus} />
      </button>
    </div>
  );
};

export default AtomParameterTitle;
