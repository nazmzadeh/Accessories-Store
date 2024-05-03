/* eslint-disable @typescript-eslint/no-unused-vars */
import { useContext, useState } from "react";
import { ITabsProps } from "../../types";
import TabTitle from "./components/TabTitle";
import "./Tabs.scss";
import { TabsContext } from "../../context/TabsProvider";

const Tabs = (props: ITabsProps) => {
  const { selectedTab, setSelectedTab } = useContext(TabsContext);
  const handleTabChange = (tab: string) => {
    setSelectedTab(tab);
  };
  return (
    <>
      {props.tabs.map((t) => (
        <TabTitle
          key={t.id}
          label={t.label}
          id={t.id}
          value={t.value}
          onClick={() => {
            handleTabChange(t.label);
          }}
          className={t.label === selectedTab ? "selected-tab" : "tab"}
        />
      ))}
    </>
  );
};

export default Tabs;
