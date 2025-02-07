import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./InputFieldMarkerXs.module.css";

export type InputFieldMarkerXsType = {
  className?: string;

  /** Variant props */
  type?: string;

  /** Style props */
  fieldMarkerDisplay?: CSSProperties["display"];
};

const InputFieldMarkerXs: FunctionComponent<InputFieldMarkerXsType> = ({
  className = "",
  type = "required",
  fieldMarkerDisplay,
}) => {
  const fieldMarkerStyle: CSSProperties = useMemo(() => {
    return {
      display: fieldMarkerDisplay,
    };
  }, [fieldMarkerDisplay]);

  return (
    <div
      className={[styles.fieldMarker, className].join(" ")}
      data-type={type}
      style={fieldMarkerStyle}
    >
      <div className={styles.label}>*</div>
    </div>
  );
};

export default InputFieldMarkerXs;
