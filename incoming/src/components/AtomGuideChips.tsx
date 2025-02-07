import { FunctionComponent } from "react";
import ChipSelectable from "./ChipSelectable";
import LabelPairedSm0Placehol from "./LabelPairedSm0Placehol";
import BasicIconButtonBlackWhite from "./BasicIconButtonBlackWhite";
import styles from "./AtomGuideChips.module.css";

export type AtomGuideChipsType = {
  className?: string;
  leftChevron?: boolean;
  rightChevron?: boolean;

  /** Variant props */
  type?: string;
};

const AtomGuideChips: FunctionComponent<AtomGuideChipsType> = ({
  className = "",
  type = "rise/fall",
  leftChevron = false,
  rightChevron = true,
}) => {
  return (
    <div
      className={[styles.atomGuideChips, className].join(" ")}
      data-type={type}
    >
      <ChipSelectable
        size="md"
        state="default"
        labelTag="label-tag"
        labelTag={false}
        focus1={false}
        label="Rise/Fall"
        icon={false}
        showChipLabels
      />
      <ChipSelectable
        size="md"
        state="default"
        labelTag="label-tag"
        labelTag={false}
        focus1={false}
        label="Accumulators"
        icon={false}
        chipLabelsBackgroundColor="unset"
        showChipLabels
        labelHeight="unset"
        labelWidth="unset"
        labelDisplay="unset"
      />
      <ChipSelectable
        size="md"
        state="default"
        labelTag="label-tag"
        labelTag={false}
        focus1={false}
        label="Multipliers"
        icon={false}
        chipLabelsBackgroundColor="unset"
        showChipLabels
        labelHeight="unset"
        labelWidth="unset"
        labelDisplay="unset"
      />
      <ChipSelectable
        size="md"
        state="default"
        labelTag="label-tag"
        labelTag={false}
        focus1={false}
        label="Vanillas"
        icon={false}
        chipLabelsBackgroundColor="transparent"
        showChipLabels
        labelHeight="unset"
        labelWidth="unset"
        labelDisplay="unset"
      />
      <ChipSelectable
        size="md"
        state="default"
        labelTag="label-tag"
        labelTag={false}
        focus1={false}
        label="Turbos"
        icon={false}
        chipLabelsBackgroundColor="transparent"
        showChipLabels
        labelHeight="unset"
        labelWidth="unset"
        labelDisplay="unset"
      />
      <ChipSelectable
        size="md"
        state="default"
        labelTag="label-tag"
        labelTag={false}
        focus1={false}
        label="Higher/Lower"
        icon={false}
        chipLabelsBackgroundColor="transparent"
        showChipLabels
        labelHeight="unset"
        labelWidth="unset"
        labelDisplay="unset"
      />
      <button className={styles.chipInstance}>
        <LabelPairedSm0Placehol style="regular" icon="" iconDisplay="none" />
        <div className={styles.label}>Touch/No touch</div>
        <div className={styles.bgFocus} />
        <b className={styles.labelTag}>label-tag</b>
      </button>
      <ChipSelectable
        size="md"
        state="default"
        labelTag="label-tag"
        labelTag={false}
        focus1={false}
        label="Matches/Differs"
        icon={false}
        chipLabelsBackgroundColor="unset"
        showChipLabels
        labelHeight="unset"
        labelWidth="unset"
        labelDisplay="unset"
      />
      <ChipSelectable
        size="md"
        state="default"
        labelTag="label-tag"
        labelTag={false}
        focus1={false}
        label="Even/Odd"
        icon={false}
        chipLabelsBackgroundColor="unset"
        showChipLabels
        labelHeight="unset"
        labelWidth="unset"
        labelDisplay="unset"
      />
      <ChipSelectable
        size="md"
        state="default"
        labelTag="label-tag"
        labelTag={false}
        focus1={false}
        label="Over/Under"
        icon={false}
        chipLabelsBackgroundColor="unset"
        showChipLabels
        labelHeight="unset"
        labelWidth="unset"
        labelDisplay="unset"
      />
      {leftChevron && (
        <div className={styles.navButtonLeft}>
          <BasicIconButtonBlackWhite
            size="md"
            state="default"
            style="tertiary"
            width="hug content"
            focus1={false}
          />
        </div>
      )}
      {rightChevron && (
        <div className={styles.navButtonRight}>
          <BasicIconButtonBlackWhite
            size="md"
            state="default"
            style="tertiary"
            width="hug content"
            focus1={false}
            buttonLeftWidth="32px"
            buttonLeftHeight="32px"
            buttonLeftPosition="relative"
            buttonLeftMinWidth="32px"
            buttonLeftMinHeight="32px"
            buttonLeftTop="unset"
            buttonLeftRight="unset"
          />
        </div>
      )}
    </div>
  );
};

export default AtomGuideChips;
