/* eslint-disable @typescript-eslint/no-unused-vars */
import { ITabsProps } from "../../types";
import TabTitle from "./components/TabTitle";
import "./Tabs.scss";

const Tabs = (props: ITabsProps) => {
  return (
    <>
      {props.tabs.map((t) => (
        <TabTitle
          key={t.id}
          label={t.label}
          id={t.id}
          value={t.value}
          onClick={() => {
            props.handleTabChange(t.label);
          }}
          className={t.label === props.selectedTab ? "tab selected-tab" : "tab"}
        />
      ))}
    </>
  );
};

export default Tabs;
