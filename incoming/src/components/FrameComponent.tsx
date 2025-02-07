import { FunctionComponent } from "react";
import DropdownLabellessOutline from "./DropdownLabellessOutline";
import AtomParameterField from "./AtomParameterField";
import AtomParameterField1 from "./AtomParameterField1";
import ButtonPair from "./ButtonPair";
import styles from "./FrameComponent.module.css";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
}) => {
  return (
    <div
      className={[styles.dropdownLabellessOutlineParent, className].join(" ")}
    >
      <DropdownLabellessOutline
        item={false}
        size="md"
        state="default"
        status1="neutral"
        textAlignment="left"
        placeholder="Select trade type"
        iconLeft={false}
        message={false}
        message="Message goes here"
      />
      <AtomParameterField type="dropdown" inputField2 infoIcon />
      <AtomParameterField1 type="stake" payoutDetails={false} />
      <div className={styles.purchaseButtons}>
        <ButtonPair
          state="default"
          type="green"
          value="[value]"
          showDetails={false}
          label="[label]"
          title="Touch"
        />
      </div>
    </div>
  );
};

export default FrameComponent;
