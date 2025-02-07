import { FunctionComponent } from "react";
import SegmentedControlSingleCho1 from "./SegmentedControlSingleCho1";
import InputFieldMarkerXs from "./InputFieldMarkerXs";
import AtomSelector from "./AtomSelector";
import AtomPercentage from "./AtomPercentage";
import TextFieldLabelledFill from "./TextFieldLabelledFill";
import styles from "./AtomParameterListVert.module.css";

export type AtomParameterListVertType = {
  className?: string;
  showContractSwitcher?: boolean;
  show5?: boolean;
  showLastDigitPrediction?: boolean;
  show4?: boolean;
  show3?: boolean;
};

const AtomParameterListVert: FunctionComponent<AtomParameterListVertType> = ({
  className = "",
  showContractSwitcher = true,
  show5 = false,
  showLastDigitPrediction = false,
  show4 = false,
  show3 = true,
}) => {
  return (
    <div className={[styles.atomParameterListVert, className].join(" ")}>
      {showContractSwitcher && (
        <SegmentedControlSingleCho1
          size="md"
          type="label"
          segment5={false}
          segment4={false}
          segment3={false}
        />
      )}
      {showLastDigitPrediction && (
        <div className={styles.lastDigitPrediction}>
          <div className={styles.labelMarker}>
            <div className={styles.label}>Last digit prediction</div>
            <InputFieldMarkerXs type="required" />
          </div>
          <div className={styles.container}>
            <div className={styles.row}>
              <div className={styles.div}>
                <AtomSelector active="off" prop="0" />
                <AtomPercentage type="neutral" label="9.6%" />
              </div>
              <div className={styles.div}>
                <AtomSelector active="off" prop="1" />
                <AtomPercentage type="loss" label="8.1%" />
              </div>
              <div className={styles.div}>
                <AtomSelector active="off" prop="2" />
                <AtomPercentage type="neutral" label="9.9%" />
              </div>
              <div className={styles.div}>
                <AtomSelector active="off" prop="3" />
                <AtomPercentage type="neutral" label="8.6%" />
              </div>
              <div className={styles.div}>
                <AtomSelector active="off" prop="4" />
                <AtomPercentage type="neutral" label="9.2%" />
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.div}>
                <AtomSelector active="off" prop="5" />
                <AtomPercentage type="neutral" label="10.6%" />
              </div>
              <div className={styles.div}>
                <AtomSelector active="off" prop="6" />
                <AtomPercentage type="neutral" label="11.2%" />
              </div>
              <div className={styles.div}>
                <AtomSelector active="off" prop="7" />
                <AtomPercentage type="neutral" label="9.5%" />
              </div>
              <div className={styles.div}>
                <AtomSelector active="off" prop="8" />
                <AtomPercentage type="neutral" label="8.6%" />
              </div>
              <div className={styles.div}>
                <AtomSelector active="off" prop="9" />
                <AtomPercentage type="profit" label="12.6%" />
              </div>
            </div>
          </div>
        </div>
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
        characterCounter
        label="Duration"
        iconLeft={false}
        showContractOptions
        placeholder="59 seconds"
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
        characterCounter
        label="Barrier"
        iconLeft={false}
        showContractOptions
        contractOptionsAlignSelf="stretch"
        contractOptionsWidth="unset"
        labelTextDecoration="none"
        labelHeight="unset"
        labelWidth="unset"
        labelDisplay="unset"
        placeholder="+0.6127"
        placeholderInputCursorBorder="none"
        placeholderInputCursorOutline="none"
        placeholderInputCursorBackgroundColor="transparent"
        placeholderInputCursorFontFamily="'IBM Plex Sans'"
        placeholderInputCursorFontSize="16px"
        placeholderInputCursorColor="rgba(0, 0, 0, 0.72)"
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
        characterCounter
        label="Stake"
        iconLeft={false}
        showContractOptions
        contractOptionsAlignSelf="stretch"
        contractOptionsWidth="unset"
        labelTextDecoration="unset"
        labelHeight="unset"
        labelWidth="unset"
        labelDisplay="unset"
        placeholder="10.00 USD"
        placeholderInputCursorBorder="none"
        placeholderInputCursorOutline="none"
        placeholderInputCursorBackgroundColor="transparent"
        placeholderInputCursorFontFamily="'IBM Plex Sans'"
        placeholderInputCursorFontSize="16px"
        placeholderInputCursorColor="rgba(0, 0, 0, 0.72)"
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
        input="Input"
        characterCounter
        label="Label"
        iconLeft={false}
        showContractOptions={false}
        contractOptionsAlignSelf="unset"
        contractOptionsWidth="328px"
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
        contractOptionsWidth="328px"
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
    </div>
  );
};

export default AtomParameterListVert;
