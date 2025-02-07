import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./BasicButtonBlackWhite.module.css";

export type BasicButtonBlackWhiteType = {
  className?: string;
  focus1?: boolean;
  label?: string;
  showButtonPrimary?: boolean;

  /** Variant props */
  icon?: string;
  size?: string;
  state?: string;
  type?: "primary" | "secondary";
  width?: string;

  /** Style props */
  buttonPrimaryAlignSelf?: CSSProperties["alignSelf"];
  buttonPrimaryWidth?: CSSProperties["width"];
};

const BasicButtonBlackWhite: FunctionComponent<BasicButtonBlackWhiteType> = ({
  className = "",
  icon = "none",
  size = "lg",
  state = "default",
  type = "primary",
  width = "hug content",
  focus1 = false,
  label = "Got it",
  buttonPrimaryAlignSelf,
  buttonPrimaryWidth,
  showButtonPrimary,
}) => {
  const buttonPrimaryStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: buttonPrimaryAlignSelf,
      width: buttonPrimaryWidth,
    };
  }, [buttonPrimaryAlignSelf, buttonPrimaryWidth]);

  return (
    showButtonPrimary && (
      <button
        className={[styles.root, className].join(" ")}
        data-icon={icon}
        data-size={size}
        data-state={state}
        data-type={type}
        data-width={width}
        style={buttonPrimaryStyle}
      >
        <b className={styles.label}>{label}</b>
        {focus1 && <div className={styles.bgFocus} />}
      </button>
    )
  );
};

export default BasicButtonBlackWhite;
