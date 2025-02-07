import { FunctionComponent } from "react";
import LabelPairedSmMinusSm from "./LabelPairedSmMinusSm";
import styles from "./BasicIconButtonBlackWhite1.module.css";

export type BasicIconButtonBlackWhite1Type = {
  className?: string;
  focus1?: boolean;

  /** Variant props */
  size?: string;
  state?: string;
  style?: string;
  width?: string;
};

const BasicIconButtonBlackWhite1: FunctionComponent<
  BasicIconButtonBlackWhite1Type
> = ({
  className = "",
  size = "lg",
  state = "default",
  style = "primary",
  width = "hug content",
  focus1 = false,
}) => {
  return (
    <div
      className={[styles.buttonMinus, className].join(" ")}
      data-size={size}
      data-state={state}
      data-style={style}
      data-width={width}
    >
      <LabelPairedSmMinusSm style="bold" />
      {focus1 && <div className={styles.bgFocus} />}
    </div>
  );
};

export default BasicIconButtonBlackWhite1;
