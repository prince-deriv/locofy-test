import { FunctionComponent } from "react";
import NavigationSidebarGroup from "./NavigationSidebarGroup";
import styles from "./NavigationSidebarFixed.module.css";

export type NavigationSidebarFixedType = {
  className?: string;
  group2?: boolean;
  group3?: boolean;

  /** Variant props */
  itemBottom?: boolean;
};

const NavigationSidebarFixed: FunctionComponent<NavigationSidebarFixedType> = ({
  className = "",
  itemBottom = true,
  group2 = false,
  group3 = false,
}) => {
  return (
    <div
      className={[styles.navigationSidebarFixed, className].join(" ")}
      data-itemBottom={itemBottom}
    >
      <div className={styles.groupItemTop}>
        <NavigationSidebarGroup
          itemBottom
          item7={false}
          item6={false}
          item10={false}
          item5={false}
          item9={false}
          item4={false}
          item8={false}
          item3={false}
          item2={false}
          showGroup1
        />
        {group2 && (
          <div className={styles.containerDivider}>
            <div className={styles.divider} />
          </div>
        )}
        <NavigationSidebarGroup
          itemBottom
          item7={false}
          item6={false}
          item10={false}
          item5={false}
          item9={false}
          item4
          item8={false}
          item3
          item2
          showGroup1={false}
          group1AlignSelf="unset"
          group1Width="72px"
        />
        {group3 && (
          <div className={styles.containerDivider1}>
            <div className={styles.divider1} />
          </div>
        )}
        <NavigationSidebarGroup
          itemBottom
          item7={false}
          item6={false}
          item10={false}
          item5={false}
          item9={false}
          item4
          item8={false}
          item3
          item2
          showGroup1={false}
          group1AlignSelf="unset"
          group1Width="72px"
        />
      </div>
      <div className={styles.containerDivider2}>
        <div className={styles.divider2} />
      </div>
      <div className={styles.groupItemBottom}>
        <NavigationSidebarGroup
          itemBottom
          item7={false}
          item6={false}
          item10={false}
          item5
          item9={false}
          item4
          item8={false}
          item3
          item2
          showGroup1
          group1AlignSelf="stretch"
          group1Width="unset"
        />
      </div>
    </div>
  );
};

export default NavigationSidebarFixed;
