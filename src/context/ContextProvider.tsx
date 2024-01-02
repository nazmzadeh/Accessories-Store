import { ReactNode, createContext } from "react";
import { useState } from "react";
import { MobileNavContextState } from "../types";

const ContextDefaultValues: MobileNavContextState = {
  mobile: false,
  setMobile: () => {},
  openSearch: false,
  setOpenSearch: () => {},
  openNav: false,
  setOpenNav: () => {},
  toggleSearchDrawer: () => {},
  toggleNavDrawer: () => {},
};
export const MobileNavContext =
  createContext<MobileNavContextState>(ContextDefaultValues);

interface IContextProviderProps {
  children: ReactNode;
}
const ContextProvider = ({ children }: IContextProviderProps) => {
  const [mobile, setMobile] = useState<boolean>(ContextDefaultValues.mobile);
  const [openSearch, setOpenSearch] = useState<boolean>(
    ContextDefaultValues.openSearch
  );
  const [openNav, setOpenNav] = useState<boolean>(ContextDefaultValues.openNav);
  const toggleSearchDrawer = () => {
    setOpenSearch(!openSearch);
  };
  const toggleNavDrawer = () => {
    setOpenNav(!openNav);
  };

  const values = {
    mobile,
    setMobile,
    openSearch,
    setOpenSearch,
    openNav,
    setOpenNav,
    toggleNavDrawer,
    toggleSearchDrawer
  };
  return (
    <MobileNavContext.Provider value={values}>
      {children}
    </MobileNavContext.Provider>
  );
};

export default ContextProvider;
