import { FunctionComponent } from "react";
import AtomParameterListVert from "./AtomParameterListVert";
import AtomParameterListDeta from "./AtomParameterListDeta";
import styles from "./InputDetails.module.css";

export type InputDetailsType = {
  className?: string;
};

const InputDetails: FunctionComponent<InputDetailsType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.inputDetails, className].join(" ")}>
      <AtomParameterListVert
        showContractSwitcher
        show5={false}
        showLastDigitPrediction={false}
        show4={false}
        show3
      />
      <AtomParameterListDeta show2={false} show3={false} />
    </div>
  );
};

export default InputDetails;
