import { FunctionComponent } from "react";
import styles from "./IconButton.module.css";

export type IconButtonType = {
  className?: string;

  /** Variant props */
  state?: string;
  style?: string;
};

const IconButton: FunctionComponent<IconButtonType> = ({
  className = "",
  state = "Disabled",
  style = "Outlined",
}) => {
  return (
    <div
      className={[styles.trailingIcon, className].join(" ")}
      data-state={state}
      data-style={style}
    >
      <div className={styles.container}>
        <div className={styles.stateLayer}>
          <img
            className={styles.icon}
            loading="lazy"
            alt=""
            src="/icon-10.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default IconButton;
