import { FunctionComponent } from "react";
import StandaloneMdPlayMd from "./StandaloneMdPlayMd";
import styles from "./Thumbnail.module.css";

export type ThumbnailType = {
  className?: string;

  /** Variant props */
  type?: string;
};

const Thumbnail: FunctionComponent<ThumbnailType> = ({
  className = "",
  type = "accumulators",
}) => {
  return (
    <div className={[styles.thumbnail, className].join(" ")} data-type={type}>
      <div className={styles.video}>
        <div className={styles.shot2}>
          <div className={styles.touch1}>
            <div className={styles.touchChild} />
            <img className={styles.intersectIcon} alt="" />
            <b className={styles.touch}>Touch</b>
            <img className={styles.highsLowsTouch} loading="lazy" alt="" />
          </div>
          <div className={styles.overlay} />
          <div className={styles.playIcon}>
            <StandaloneMdPlayMd style="fill" />
          </div>
        </div>
      </div>
      <div className={styles.desc}>
        <b className={styles.howToTrade}>How to trade Touch/No touch?</b>
        <div className={styles.watchThisVideo}>
          Watch this video to learn about this trade type.
        </div>
      </div>
    </div>
  );
};

export default Thumbnail;
