import { FunctionComponent, useMemo, type CSSProperties } from "react";
import LabelPairedSm0Placehol from "./LabelPairedSm0Placehol";
import styles from "./ChipSelectable.module.css";

export type ChipSelectableType = {
  className?: string;
  labelTag?: string;
  focus1?: boolean;
  label?: string;
  icon?: boolean;
  showChipLabels?: boolean;

  /** Variant props */
  size?: string;
  state?: string;

  /** Style props */
  chipLabelsBackgroundColor?: CSSProperties["backgroundColor"];
  labelHeight?: CSSProperties["height"];
  labelWidth?: CSSProperties["width"];
  labelDisplay?: CSSProperties["display"];
};

const ChipSelectable: FunctionComponent<ChipSelectableType> = ({
  className = "",
  size = "sm",
  state = "default",
  labelTag = "label-tag",
  focus1 = false,
  label = "Rise/Fall",
  icon = false,
  chipLabelsBackgroundColor,
  showChipLabels,
  labelHeight,
  labelWidth,
  labelDisplay,
}) => {
  const chipLabelsStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: chipLabelsBackgroundColor,
    };
  }, [chipLabelsBackgroundColor]);

  const label5Style: CSSProperties = useMemo(() => {
    return {
      height: labelHeight,
      width: labelWidth,
      display: labelDisplay,
    };
  }, [labelHeight, labelWidth, labelDisplay]);

  return (
    showChipLabels && (
      <div
        className={[styles.chipLabels, className].join(" ")}
        data-size={size}
        data-state={state}
        style={chipLabelsStyle}
      >
        {icon && (
          <LabelPairedSm0Placehol style="regular" icon="" iconDisplay="flex" />
        )}
        <div className={styles.label} style={label5Style}>
          {label}
        </div>
        {labelTag && <b className={styles.labelTag}>{labelTag}</b>}
        {focus1 && <div className={styles.bgFocus} />}
      </div>
    )
  );
};

export default ChipSelectable;
