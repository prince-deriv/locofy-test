import { FunctionComponent, useMemo, type CSSProperties } from "react";
import SegmentedControlSingleCho from "./SegmentedControlSingleCho";
import styles from "./SegmentedControlSingleCho1.module.css";

export type SegmentedControlSingleCho1Type = {
  className?: string;
  segment5?: boolean;
  segment4?: boolean;
  segment3?: boolean;

  /** Variant props */
  size?: string;
  type?: string;

  /** Style props */
  contractSwitcherAlignSelf?: CSSProperties["alignSelf"];
  contractSwitcherWidth?: CSSProperties["width"];
};

const SegmentedControlSingleCho1: FunctionComponent<
  SegmentedControlSingleCho1Type
> = ({
  className = "",
  size = "sm",
  type = "label and icon",
  segment5 = false,
  segment4 = false,
  segment3 = false,
  contractSwitcherAlignSelf,
  contractSwitcherWidth,
}) => {
  const contractSwitcherStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: contractSwitcherAlignSelf,
      width: contractSwitcherWidth,
    };
  }, [contractSwitcherAlignSelf, contractSwitcherWidth]);

  return (
    <div
      className={[styles.contractSwitcher, className].join(" ")}
      data-size={size}
      data-type={type}
      style={contractSwitcherStyle}
    >
      <SegmentedControlSingleCho
        state="selected"
        focus1={false}
        label="Touch"
        showSegment2
        segment2Flex="1"
        segment2Width="unset"
        labelTextDecoration="none"
        labelHeight="unset"
        labelWidth="unset"
        labelDisplay="unset"
      />
      <SegmentedControlSingleCho
        state="default"
        focus1={false}
        label="No Touch"
        showSegment2
      />
      <SegmentedControlSingleCho
        state="default"
        focus1={false}
        label="Label"
        showSegment2={false}
        segment2Flex="unset"
        segment2Width="72px"
        labelTextDecoration="unset"
        labelHeight="24px"
        labelWidth="39px"
        labelDisplay="inline-block"
      />
      <SegmentedControlSingleCho
        state="default"
        focus1={false}
        label="Label"
        showSegment2={false}
        segment2Flex="unset"
        segment2Width="72px"
        labelTextDecoration="unset"
        labelHeight="24px"
        labelWidth="39px"
        labelDisplay="inline-block"
      />
      <SegmentedControlSingleCho
        state="default"
        focus1={false}
        label="Label"
        showSegment2={false}
        segment2Flex="unset"
        segment2Width="72px"
        labelTextDecoration="unset"
        labelHeight="24px"
        labelWidth="39px"
        labelDisplay="inline-block"
      />
    </div>
  );
};

export default SegmentedControlSingleCho1;
