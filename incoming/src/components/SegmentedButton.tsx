import { FunctionComponent } from "react";
import BuildingBlocksSegmentedButt from "./BuildingBlocksSegmentedButt";
import BuildingBlocksSegmentedButt1 from "./BuildingBlocksSegmentedButt1";
import styles from "./SegmentedButton.module.css";

export type SegmentedButtonType = {
  className?: string;

  /** Variant props */
  density?: 0;
  segments?: 2;
};

const SegmentedButton: FunctionComponent<SegmentedButtonType> = ({
  className = "",
  density = -3,
  segments = 5,
}) => {
  return (
    <div
      className={[styles.segmentedButton, className].join(" ")}
      data-density={density}
      data-segments={segments}
    >
      <BuildingBlocksSegmentedButt
        configuration="Label only"
        selected
        state="Enabled"
        labelText="Touch"
      />
      <BuildingBlocksSegmentedButt1
        configuration="Label only"
        selected={false}
        state="Enabled"
        labelText="No Touch"
      />
    </div>
  );
};

export default SegmentedButton;
