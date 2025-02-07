import { FunctionComponent } from "react";
import DropdownLabelledFill from "./DropdownLabelledFill";
import StandaloneSmCircleInfo from "./StandaloneSmCircleInfo";
import InputGroupTextFieldAdd from "./InputGroupTextFieldAdd";
import styles from "./AtomParameterField.module.css";

export type AtomParameterFieldType = {
  className?: string;
  inputField2?: boolean;
  infoIcon?: boolean;

  /** Variant props */
  type?: string;
};

const AtomParameterField: FunctionComponent<AtomParameterFieldType> = ({
  className = "",
  type = "dropdown",
  inputField2 = true,
  infoIcon = true,
}) => {
  return (
    <div className={[styles.parameter2, className].join(" ")} data-type={type}>
      <DropdownLabelledFill
        item
        state="default"
        status1="neutral"
        fieldMarker={false}
        iconLeft={false}
        label="Barrier"
        item="Above spot"
        message="Message goes here"
        message={false}
        labelHeight="unset"
        labelWidth="unset"
        labelDisplay="unset"
        labelTextDecoration="none"
        itemWidth="unset"
        itemHeight="unset"
        itemDisplay="unset"
        itemAlignSelf="stretch"
      />
      <StandaloneSmCircleInfo
        style="regular"
        showStandaloneSmCircleInfo
        iconDisplay="unset"
        iconMinWidth="unset"
      />
      {inputField2 && (
        <InputGroupTextFieldAdd
          addon="left"
          input
          size="md"
          state="default"
          status1="neutral"
          addonLeft="+"
          addonRight="Distance to spot"
          iconRight={false}
          addonRight={false}
          messageCharacterCounter={false}
          characterCounter="0/0"
          characterCounter
          message
          message="Message goes here"
          input="0.50"
        />
      )}
    </div>
  );
};

export default AtomParameterField;
