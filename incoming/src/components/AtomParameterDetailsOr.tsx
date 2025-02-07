import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./AtomParameterDetailsOr.module.css";

export type AtomParameterDetailsOrType = {
  className?: string;
  value?: string;
  title?: string;
  showDetailValues?: boolean;

  /** Variant props */
  type?: string;

  /** Style props */
  detailValuesAlignSelf?: CSSProperties["alignSelf"];
  detailValuesWidth?: CSSProperties["width"];
};

const AtomParameterDetailsOr: FunctionComponent<AtomParameterDetailsOrType> = ({
  className = "",
  type = "detail",
  value = "45.38 USD",
  title = "Payout",
  showDetailValues,
  detailValuesAlignSelf,
  detailValuesWidth,
}) => {
  const detailValuesStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: detailValuesAlignSelf,
      width: detailValuesWidth,
    };
  }, [detailValuesAlignSelf, detailValuesWidth]);

  return (
    showDetailValues && (
      <div
        className={[styles.detailValues, className].join(" ")}
        data-type={type}
        style={detailValuesStyle}
      >
        <div className={styles.title}>
          <div className={styles.message}>{title}</div>
        </div>
        <div className={styles.value}>
          <b className={styles.message1}>{value}</b>
        </div>
      </div>
    )
  );
};

export default AtomParameterDetailsOr;
