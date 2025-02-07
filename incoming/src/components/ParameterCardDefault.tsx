import { FunctionComponent } from "react";
import AtomParameterTitle from "./AtomParameterTitle";
import InputDetails from "./InputDetails";
import styles from "./ParameterCardDefault.module.css";

export type ParameterCardDefaultType = {
  className?: string;
};

const ParameterCardDefault: FunctionComponent<ParameterCardDefaultType> = ({
  className = "",
}) => {
  return (
    <form className={[styles.parameterCardDefault, className].join(" ")}>
      <div className={styles.header}>
        <AtomParameterTitle />
      </div>
      <InputDetails />
    </form>
  );
};

export default ParameterCardDefault;
