import { FunctionComponent } from "react";
import ListParametersHorizontal from "./ListParametersHorizontal";
import ButtonSingle from "./ButtonSingle";
import styles from "./Footer1.module.css";

export type Footer1Type = {
  className?: string;

  /** Variant props */
  state?: string;
  type?: string;
};

const Footer1: FunctionComponent<Footer1Type> = ({
  className = "",
  state = "simple",
  type = "pair",
}) => {
  return (
    <div
      className={[styles.footer, className].join(" ")}
      data-state={state}
      data-type={type}
    >
      <ListParametersHorizontal
        state="simple"
        type="single"
        showContractSwitcher
        show5={false}
        show4={false}
        show3
      />
      <div className={styles.purchaseButtons}>
        <div className={styles.buttonContainer}>
          <ButtonSingle
            state="default"
            type="green"
            showDetails={false}
            value="19.55 USD"
            label="Payout"
            title="Touch"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer1;
