import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./ButtonPair.module.css";

export type ButtonPairType = {
  className?: string;
  value?: string;
  showDetails?: boolean;
  label?: string;
  title?: string;

  /** Variant props */
  state?: string;
  type?: string;

  /** Style props */
  button1Width?: CSSProperties["width"];
  button1AlignSelf?: CSSProperties["alignSelf"];
  button1Height?: CSSProperties["height"];
};

const ButtonPair: FunctionComponent<ButtonPairType> = ({
  className = "",
  state = "default",
  type = "green",
  value = "[value]",
  showDetails = false,
  label = "[label]",
  title = "Touch",
  button1Width,
  button1AlignSelf,
  button1Height,
}) => {
  const button1Style: CSSProperties = useMemo(() => {
    return {
      width: button1Width,
      alignSelf: button1AlignSelf,
      height: button1Height,
    };
  }, [button1Width, button1AlignSelf, button1Height]);

  return (
    <div
      className={[styles.root, className].join(" ")}
      data-state={state}
      data-type={type}
      style={button1Style}
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

export default ButtonPair;
