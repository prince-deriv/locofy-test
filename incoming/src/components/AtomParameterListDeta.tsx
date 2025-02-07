import { FunctionComponent } from "react";
import AtomParameterDetailsOr from "./AtomParameterDetailsOr";
import styles from "./AtomParameterListDeta.module.css";

export type AtomParameterListDetaType = {
  className?: string;
  show2?: boolean;
  show3?: boolean;
};

const AtomParameterListDeta: FunctionComponent<AtomParameterListDetaType> = ({
  className = "",
  show2 = false,
  show3 = false,
}) => {
  return (
    <div className={[styles.atomParameterListDeta, className].join(" ")}>
      <AtomParameterDetailsOr
        type="detail"
        value="45.38 USD"
        title="Payout"
        showDetailValues
      />
      {show2 && (
        <AtomParameterDetailsOr
          type="detail"
          value="[Value]"
          title="[Title]"
          showDetailValues={false}
          detailValuesAlignSelf="unset"
          detailValuesWidth="360px"
        />
      )}
      {show3 && (
        <AtomParameterDetailsOr
          type="detail"
          value="[Value]"
          title="[Title]"
          showDetailValues={false}
          detailValuesAlignSelf="unset"
          detailValuesWidth="360px"
        />
      )}
    </div>
  );
};

export default AtomParameterListDeta;
