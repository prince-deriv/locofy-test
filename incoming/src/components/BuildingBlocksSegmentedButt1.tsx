import { FunctionComponent } from "react";
import styles from "./BuildingBlocksSegmentedButt1.module.css";

export type BuildingBlocksSegmentedButt1Type = {
  className?: string;
  labelText?: string;

  /** Variant props */
  configuration?: string;
  selected?: boolean;
  state?: string;
};

const BuildingBlocksSegmentedButt1: FunctionComponent<
  BuildingBlocksSegmentedButt1Type
> = ({
  className = "",
  configuration = "Icon only",
  selected = false,
  state = "Disabled",
  labelText = "No Touch",
}) => {
  return (
    <div
      className={[styles.segmentEnd, className].join(" ")}
      data-configuration={configuration}
      data-selected={selected}
      data-state={state}
    >
      <div className={styles.container}>
        <div className={styles.stateLayer}>
          <div className={styles.labelText}>{labelText}</div>
        </div>
      </div>
    </div>
  );
};

export default BuildingBlocksSegmentedButt1;
