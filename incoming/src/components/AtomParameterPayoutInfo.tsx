import { FunctionComponent } from "react";
import styles from "./AtomParameterPayoutInfo.module.css";

export type AtomParameterPayoutInfoType = {
  className?: string;
  value?: string;
  label?: string;
  showPayoutInfo1?: boolean;
};

const AtomParameterPayoutInfo: FunctionComponent<
  AtomParameterPayoutInfoType
> = ({
  className = "",
  value = "19.65 USD",
  label = "Payout:",
  showPayoutInfo1,
}) => {
  return (
    showPayoutInfo1 && (
      <div className={[styles.payoutInfo1, className].join(" ")}>
        <div className={styles.label}>{label}</div>
        <b className={styles.label}>{value}</b>
      </div>
    )
  );
};

export default AtomParameterPayoutInfo;
