import { ReactNode, createContext, useState } from "react";
import { TabContextState } from "../types";

const ContextDefaultValues: TabContextState = {
  selectedTab: "",
  setSelectedTab: () => {},
};
export const TabsContext = createContext<TabContextState>(ContextDefaultValues);

interface ITabsContextProps {
  children: ReactNode;
}
const TabsProvider = ({ children }: ITabsContextProps) => {
  const [selectedTab, setSelectedTab] = useState<string>(
    ContextDefaultValues.selectedTab
  );

  const values = {
    selectedTab,
    setSelectedTab,
  };
  return <TabsContext.Provider value={values}>{children}</TabsContext.Provider>;
};

export default TabsProvider;
