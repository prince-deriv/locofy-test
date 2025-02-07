import { FunctionComponent } from "react";
import BuildingBlocksNavItem from "./BuildingBlocksNavItem";
import NavigationSidebarGroup from "./NavigationSidebarGroup";
import MenuNavigationSidebar from "./MenuNavigationSidebar";
import styles from "./NavigationSidebarFixed1.module.css";

export type NavigationSidebarFixed1Type = {
  className?: string;
};

const NavigationSidebarFixed1: FunctionComponent<
  NavigationSidebarFixed1Type
> = ({ className = "" }) => {
  return (
    <div className={[styles.navigationSidebarFixed, className].join(" ")}>
      <div className={styles.groupItemTop}>
        <BuildingBlocksNavItem
          badge="None"
          label
          selected={false}
          state="Enabled"
          labelText="Positions"
        />
        <div className={styles.containerDivider}>
          <div className={styles.divider} />
        </div>
        <NavigationSidebarGroup
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
        <div className={styles.containerDivider}>
          <div className={styles.divider1} />
        </div>
        <NavigationSidebarGroup
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
        <div className={styles.group1}>
          <BuildingBlocksNavItem
            badge="None"
            label
            selected={false}
            state="Enabled"
            labelText="Limits"
          />
          <BuildingBlocksNavItem
            badge="None"
            label
            selected={false}
            state="Enabled"
            labelText="Help"
          />
          <BuildingBlocksNavItem
            badge="None"
            label
            selected={false}
            state="Enabled"
            labelText="Theme"
          />
          <BuildingBlocksNavItem
            badge="None"
            label
            selected={false}
            state="Enabled"
            labelText="Language"
          />
          <BuildingBlocksNavItem
            badge="None"
            label
            selected={false}
            state="Enabled"
            labelText="Regulatory"
          />
          <MenuNavigationSidebar
            selected={false}
            state="default"
            label="Label"
            badgeNotification={false}
            focus1={false}
            showItem1={false}
            item1AlignSelf="unset"
            item1Width="72px"
            labelTextDecoration="unset"
            labelAlignSelf="unset"
            labelWidth="72px"
          />
          <MenuNavigationSidebar
            selected={false}
            state="default"
            label="Label"
            badgeNotification={false}
            focus1={false}
            showItem1={false}
            item1AlignSelf="unset"
            item1Width="72px"
            labelTextDecoration="unset"
            labelAlignSelf="unset"
            labelWidth="72px"
          />
          <MenuNavigationSidebar
            selected={false}
            state="default"
            label="Label"
            badgeNotification={false}
            focus1={false}
            showItem1={false}
            item1AlignSelf="unset"
            item1Width="72px"
            labelTextDecoration="unset"
            labelAlignSelf="unset"
            labelWidth="72px"
          />
          <MenuNavigationSidebar
            selected={false}
            state="default"
            label="Label"
            badgeNotification={false}
            focus1={false}
            showItem1={false}
            item1AlignSelf="unset"
            item1Width="72px"
            labelTextDecoration="unset"
            labelAlignSelf="unset"
            labelWidth="72px"
          />
          <MenuNavigationSidebar
            selected={false}
            state="default"
            label="Label"
            badgeNotification={false}
            focus1={false}
            showItem1={false}
            item1AlignSelf="unset"
            item1Width="72px"
            labelTextDecoration="unset"
            labelAlignSelf="unset"
            labelWidth="72px"
          />
        </div>
      </div>
    </div>
  );
};

export default NavigationSidebarFixed1;
