import { FunctionComponent } from "react";
import SegmentedControlSingleCho1 from "./SegmentedControlSingleCho1";
import TextFieldLabelledFill from "./TextFieldLabelledFill";
import styles from "./ListParametersHorizontal.module.css";

export type ListParametersHorizontalType = {
  className?: string;
  showContractSwitcher?: boolean;
  show5?: boolean;
  show4?: boolean;
  show3?: boolean;

  /** Variant props */
  state?: string;
  type?: string;
};

const ListParametersHorizontal: FunctionComponent<
  ListParametersHorizontalType
> = ({
  className = "",
  state = "simple",
  type = "pair",
  showContractSwitcher = true,
  show5 = false,
  show4 = false,
  show3 = true,
}) => {
  return (
    <div
      className={[styles.listParametersHorizontal, className].join(" ")}
      data-state={state}
      data-type={type}
    >
      {showContractSwitcher && (
        <SegmentedControlSingleCho1
          size="md"
          type="label"
          segment5={false}
          segment4={false}
          segment3={false}
          contractSwitcherAlignSelf="unset"
          contractSwitcherWidth="180px"
        />
      )}
      <TextFieldLabelledFill
        input
        state="default"
        status1="neutral"
        message
        message="Message goes here"
        messageCharacterCounter={false}
        characterCounter="0/0"
        iconRight={false}
        fieldMarker={false}
        input="1 minute"
        characterCounter
        label="Duration"
        iconLeft={false}
        showContractOptions
        contractOptionsAlignSelf="unset"
        contractOptionsWidth="160px"
        labelTextDecoration="unset"
        labelHeight="unset"
        labelWidth="unset"
        labelDisplay="unset"
        placeholderInputCursorBorder="unset"
        placeholderInputCursorOutline="unset"
        placeholderInputCursorBackgroundColor="unset"
        placeholderInputCursorFontFamily="unset"
        placeholderInputCursorFontSize="unset"
        placeholderInputCursorColor="unset"
        propHeight="unset"
        propWidth="unset"
        propDisplay="unset"
      />
      <TextFieldLabelledFill
        input
        state="default"
        status1="neutral"
        message
        message="Message goes here"
        messageCharacterCounter={false}
        characterCounter="0/0"
        iconRight={false}
        fieldMarker={false}
        input="+0.50"
        characterCounter
        label="Barrier"
        iconLeft={false}
        showContractOptions
        contractOptionsAlignSelf="unset"
        contractOptionsWidth="160px"
        labelTextDecoration="none"
        labelHeight="unset"
        labelWidth="unset"
        labelDisplay="unset"
        placeholderInputCursorBorder="unset"
        placeholderInputCursorOutline="unset"
        placeholderInputCursorBackgroundColor="unset"
        placeholderInputCursorFontFamily="unset"
        placeholderInputCursorFontSize="unset"
        placeholderInputCursorColor="unset"
        propHeight="unset"
        propWidth="unset"
        propDisplay="unset"
      />
      {show3 && (
        <TextFieldLabelledFill
          input
          state="default"
          status1="neutral"
          message
          message="Message goes here"
          messageCharacterCounter={false}
          characterCounter="0/0"
          iconRight={false}
          fieldMarker={false}
          input="10 USD"
          characterCounter
          label="Stake"
          iconLeft={false}
          showContractOptions
          contractOptionsAlignSelf="unset"
          contractOptionsWidth="160px"
          labelTextDecoration="unset"
          labelHeight="unset"
          labelWidth="unset"
          labelDisplay="unset"
          placeholderInputCursorBorder="unset"
          placeholderInputCursorOutline="unset"
          placeholderInputCursorBackgroundColor="unset"
          placeholderInputCursorFontFamily="unset"
          placeholderInputCursorFontSize="unset"
          placeholderInputCursorColor="unset"
          propHeight="unset"
          propWidth="unset"
          propDisplay="unset"
        />
      )}
      {show4 && (
        <TextFieldLabelledFill
          input
          state="default"
          status1="neutral"
          message
          message="Message goes here"
          messageCharacterCounter={false}
          characterCounter="0/0"
          iconRight={false}
          fieldMarker={false}
          input="Input"
          characterCounter
          label="Label"
          iconLeft={false}
          showContractOptions={false}
          contractOptionsAlignSelf="unset"
          contractOptionsWidth="160px"
          labelTextDecoration="unset"
          labelHeight="18px"
          labelWidth="30px"
          labelDisplay="inline-block"
          placeholderInputCursorBorder="unset"
          placeholderInputCursorOutline="unset"
          placeholderInputCursorBackgroundColor="unset"
          placeholderInputCursorFontFamily="unset"
          placeholderInputCursorFontSize="unset"
          placeholderInputCursorColor="unset"
          propHeight="24px"
          propWidth="40px"
          propDisplay="inline-block"
        />
      )}
      {show5 && (
        <TextFieldLabelledFill
          input
          state="default"
          status1="neutral"
          message
          message="Message goes here"
          messageCharacterCounter={false}
          characterCounter="0/0"
          iconRight={false}
          fieldMarker={false}
          input="Input"
          characterCounter
          label="Label"
          iconLeft={false}
          showContractOptions={false}
          contractOptionsAlignSelf="unset"
          contractOptionsWidth="160px"
          labelTextDecoration="unset"
          labelHeight="18px"
          labelWidth="30px"
          labelDisplay="inline-block"
          placeholderInputCursorBorder="unset"
          placeholderInputCursorOutline="unset"
          placeholderInputCursorBackgroundColor="unset"
          placeholderInputCursorFontFamily="unset"
          placeholderInputCursorFontSize="unset"
          placeholderInputCursorColor="unset"
          propHeight="24px"
          propWidth="40px"
          propDisplay="inline-block"
        />
      )}
      <div className={styles.spacer} />
    </div>
  );
};

export default ListParametersHorizontal;
