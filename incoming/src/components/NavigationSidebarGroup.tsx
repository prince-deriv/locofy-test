import { FunctionComponent, useMemo, type CSSProperties } from "react";
import MenuNavigationSidebar from "./MenuNavigationSidebar";
import styles from "./NavigationSidebarGroup.module.css";

export type NavigationSidebarGroupType = {
  className?: string;
  item7?: boolean;
  item6?: boolean;
  item10?: boolean;
  item5?: boolean;
  item9?: boolean;
  item4?: boolean;
  item8?: boolean;
  item3?: boolean;
  item2?: boolean;
  showGroup1?: boolean;

  /** Variant props */
  itemBottom?: boolean;

  /** Style props */
  group1AlignSelf?: CSSProperties["alignSelf"];
  group1Width?: CSSProperties["width"];
};

const NavigationSidebarGroup: FunctionComponent<NavigationSidebarGroupType> = ({
  className = "",
  itemBottom = true,
  item7 = false,
  item6 = false,
  item10 = false,
  item5 = false,
  item9 = false,
  item4 = false,
  item8 = false,
  item3 = false,
  item2 = false,
  showGroup1,
  group1AlignSelf,
  group1Width,
}) => {
  const group1Style: CSSProperties = useMemo(() => {
    return {
      alignSelf: group1AlignSelf,
      width: group1Width,
    };
  }, [group1AlignSelf, group1Width]);

  return (
    showGroup1 && (
      <div
        className={[styles.group1, className].join(" ")}
        data-itemBottom={itemBottom}
        style={group1Style}
      >
        <MenuNavigationSidebar
          selected={false}
          state="default"
          label="Positions"
          badgeNotification={false}
          focus1={false}
          showItem1
        />
        {item2 && (
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
        )}
        {item3 && (
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
        )}
        {item4 && (
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
        )}
        {item5 && (
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
        )}
        {item6 && (
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
        )}
        {item7 && (
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
        )}
        {item8 && (
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
        )}
        {item9 && (
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
        )}
        {item10 && (
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
        )}
      </div>
    )
  );
};

export default NavigationSidebarGroup;
