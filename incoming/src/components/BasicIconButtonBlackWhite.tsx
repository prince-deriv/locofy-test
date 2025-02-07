import { FunctionComponent, useMemo, type CSSProperties } from "react";
import LabelPairedSmChevronLe from "./LabelPairedSmChevronLe";
import styles from "./BasicIconButtonBlackWhite.module.css";

export type BasicIconButtonBlackWhiteType = {
  className?: string;
  focus1?: boolean;

  /** Variant props */
  size?: "md" | "lg";
  state?: string;
  style?: string;
  width?: string;

  /** Style props */
  buttonLeftWidth?: CSSProperties["width"];
  buttonLeftHeight?: CSSProperties["height"];
  buttonLeftPosition?: CSSProperties["position"];
  buttonLeftMinWidth?: CSSProperties["minWidth"];
  buttonLeftMinHeight?: CSSProperties["minHeight"];
  buttonLeftTop?: CSSProperties["top"];
  buttonLeftRight?: CSSProperties["right"];
};

const BasicIconButtonBlackWhite: FunctionComponent<
  BasicIconButtonBlackWhiteType
> = ({
  className = "",
  size = "lg",
  state = "default",
  style = "primary",
  width = "hug content",
  focus1 = false,
  buttonLeftWidth,
  buttonLeftHeight,
  buttonLeftPosition,
  buttonLeftMinWidth,
  buttonLeftMinHeight,
  buttonLeftTop,
  buttonLeftRight,
}) => {
  const buttonLeftStyle: CSSProperties = useMemo(() => {
    return {
      width: buttonLeftWidth,
      height: buttonLeftHeight,
      position: buttonLeftPosition,
      minWidth: buttonLeftMinWidth,
      minHeight: buttonLeftMinHeight,
      top: buttonLeftTop,
      right: buttonLeftRight,
    };
  }, [
    buttonLeftWidth,
    buttonLeftHeight,
    buttonLeftPosition,
    buttonLeftMinWidth,
    buttonLeftMinHeight,
    buttonLeftTop,
    buttonLeftRight,
  ]);

  return (
    <div
      className={[styles.root, className].join(" ")}
      data-size={size}
      data-state={state}
      data-style={style}
      data-width={width}
      style={buttonLeftStyle}
    >
      <LabelPairedSmChevronLe style="bold" />
      {focus1 && <div className={styles.bgFocus} />}
    </div>
  );
};

export default BasicIconButtonBlackWhite;
