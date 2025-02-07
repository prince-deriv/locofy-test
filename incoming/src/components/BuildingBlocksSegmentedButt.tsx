import { FunctionComponent } from "react";
import styles from "./BuildingBlocksSegmentedButt.module.css";

export type BuildingBlocksSegmentedButtType = {
  className?: string;
  labelText?: string;

  /** Variant props */
  configuration?: string;
  selected?: boolean;
  state?: string;
};

const BuildingBlocksSegmentedButt: FunctionComponent<
  BuildingBlocksSegmentedButtType
> = ({
  className = "",
  configuration = "Icon only",
  selected = false,
  state = "Disabled",
  labelText = "Touch",
}) => {
  return (
    <div
      className={[styles.segmentStart, className].join(" ")}
      data-configuration={configuration}
      data-selected={selected}
      data-state={state}
    >
      <div className={styles.container}>
        <div className={styles.stateLayer}>
          <img
            className={styles.selectedIcon}
            loading="lazy"
            alt=""
            src="/selected-icon.svg"
          />
          <div className={styles.switcherLabel}>{labelText}</div>
        </div>
      </div>
    </div>
  );
};

export default BuildingBlocksSegmentedButt;
