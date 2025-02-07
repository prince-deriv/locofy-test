import { FunctionComponent } from "react";
import styles from "./BuildingBlocksNavItem.module.css";

export type BuildingBlocksNavItemType = {
  className?: string;
  labelText?: string;

  /** Variant props */
  badge?: string;
  label?: boolean;
  selected?: boolean;
  state?: string;
};

const BuildingBlocksNavItem: FunctionComponent<BuildingBlocksNavItemType> = ({
  className = "",
  badge = "None",
  label = false,
  selected = false,
  state = "Enabled",
  labelText = "Positions",
}) => {
  return (
    <div
      className={[styles.buildingBlocksnavItem, className].join(" ")}
      data-badge={badge}
      data-label={label}
      data-selected={selected}
      data-state={state}
    >
      <div className={styles.container}>
        <div className={styles.stateLayer}>
          <img
            className={styles.icon}
            loading="lazy"
            alt=""
            src="/icon-4.svg"
          />
        </div>
      </div>
      <div className={styles.label}>{labelText}</div>
    </div>
  );
};

export default BuildingBlocksNavItem;
