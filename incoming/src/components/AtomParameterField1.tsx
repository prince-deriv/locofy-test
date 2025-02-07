import { FunctionComponent } from "react";
import TextFieldWithSteppersRig from "./TextFieldWithSteppersRig";
import AtomParameterPayoutDeta from "./AtomParameterPayoutDeta";
import styles from "./AtomParameterField1.module.css";

export type AtomParameterField1Type = {
  className?: string;
  payoutDetails?: boolean;

  /** Variant props */
  type?: string;
};

const AtomParameterField1: FunctionComponent<AtomParameterField1Type> = ({
  className = "",
  type = "item list",
  payoutDetails = false,
}) => {
  return (
    <div
      className={[styles.atomParameterField, className].join(" ")}
      data-type={type}
    >
      <TextFieldWithSteppersRig
        input
        state="default"
        status1="neutral"
        fieldMarker={false}
        labelRight="Label"
        message
        characterCounter
        characterCounter="0/0"
        label="Stake (USD)"
        labelRight={false}
        labelLeft="Label"
        labelLeft={false}
        message="Message goes here"
        messageCharacterCounter={false}
        input="10"
      />
      {payoutDetails && (
        <div className={styles.payoutDetails}>
          <AtomParameterPayoutDeta type="stake" />
          <AtomParameterPayoutDeta type="stake" />
          <AtomParameterPayoutDeta type="stake" />
        </div>
      )}
    </div>
  );
};

export default AtomParameterField1;
