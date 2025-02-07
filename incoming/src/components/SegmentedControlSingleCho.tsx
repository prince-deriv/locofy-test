import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./SegmentedControlSingleCho.module.css";

export type SegmentedControlSingleChoType = {
  className?: string;
  focus1?: boolean;
  label?: string;
  showSegment2?: boolean;

  /** Variant props */
  state?: "default" | "selected";

  /** Style props */
  segment2Flex?: CSSProperties["flex"];
  segment2Width?: CSSProperties["width"];
  labelTextDecoration?: CSSProperties["textDecoration"];
  labelHeight?: CSSProperties["height"];
  labelWidth?: CSSProperties["width"];
  labelDisplay?: CSSProperties["display"];
};

const SegmentedControlSingleCho: FunctionComponent<
  SegmentedControlSingleChoType
> = ({
  className = "",
  state = "default",
  focus1 = false,
  label = "No Touch",
  showSegment2,
  segment2Flex,
  segment2Width,
  labelTextDecoration,
  labelHeight,
  labelWidth,
  labelDisplay,
}) => {
  const segment2Style: CSSProperties = useMemo(() => {
    return {
      flex: segment2Flex,
      width: segment2Width,
    };
  }, [segment2Flex, segment2Width]);

  const labelStyle: CSSProperties = useMemo(() => {
    return {
      textDecoration: labelTextDecoration,
      height: labelHeight,
      width: labelWidth,
      display: labelDisplay,
    };
  }, [labelTextDecoration, labelHeight, labelWidth, labelDisplay]);

  return (
    showSegment2 && (
      <div
        className={[styles.root, className].join(" ")}
        data-state={state}
        style={segment2Style}
      >
        <a className={styles.label} style={labelStyle}>
          {label}
        </a>
        {focus1 && <div className={styles.bgFocus} />}
      </div>
    )
  );
};

export default SegmentedControlSingleCho;
