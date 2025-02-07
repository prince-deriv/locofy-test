import { FunctionComponent } from "react";
import Description from "./Description";
import BasicButtonBlackWhite from "./BasicButtonBlackWhite";
import BasicIconButtonBlackWhite from "./BasicIconButtonBlackWhite";
import styles from "./ModalOverlay.module.css";

export type ModalOverlayType = {
  className?: string;
  title?: string;
  buttonSecondary?: boolean;
  buttonClose?: boolean;

  /** Variant props */
  height?: string;
  type?: string;
};

const ModalOverlay: FunctionComponent<ModalOverlayType> = ({
  className = "",
  height = "hug-content",
  type = "text",
  title = "Trade types",
  buttonSecondary = false,
  buttonClose = true,
}) => {
  return (
    <div
      className={[styles.modalOverlay, className].join(" ")}
      data-height={height}
      data-type={type}
    >
      <section className={styles.body}>
        <div className={styles.titlecontent}>
          <a className={styles.title}>{title}</a>
          <Description type="touchno touch" showChips />
        </div>
      </section>
      <section className={styles.buttonGroup}>
        <BasicButtonBlackWhite
          icon="none"
          size="lg"
          state="default"
          type="primary"
          width="fill container"
          focus1={false}
          label="Got it"
          showButtonPrimary
        />
        {buttonSecondary && (
          <BasicButtonBlackWhite
            icon="none"
            size="lg"
            state="default"
            type="secondary"
            width="fill container"
            focus1={false}
            label="Label"
            buttonPrimaryAlignSelf="unset"
            buttonPrimaryWidth="448px"
            showButtonPrimary={false}
          />
        )}
      </section>
      {buttonClose && (
        <BasicIconButtonBlackWhite
          size="lg"
          state="default"
          style="tertiary"
          width="hug content"
          focus1={false}
          buttonLeftWidth="48px"
          buttonLeftHeight="48px"
          buttonLeftPosition="absolute"
          buttonLeftMinWidth="48px"
          buttonLeftMinHeight="48px"
          buttonLeftTop="16px"
          buttonLeftRight="16px"
        />
      )}
    </div>
  );
};

export default ModalOverlay;
