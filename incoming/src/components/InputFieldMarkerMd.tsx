import { FunctionComponent } from "react";
import styles from "./InputFieldMarkerMd.module.css";

export type InputFieldMarkerMdType = {
  className?: string;

  /** Variant props */
  type?: string;
};

const InputFieldMarkerMd: FunctionComponent<InputFieldMarkerMdType> = ({
  className = "",
  type = "required",
}) => {
  return (
    <div className={[styles.fieldMarker, className].join(" ")} data-type={type}>
      <div className={styles.label}>*</div>
    </div>
  );
};

export default InputFieldMarkerMd;
