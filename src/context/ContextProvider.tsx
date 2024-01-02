import { ReactNode, createContext } from "react";
import { useState } from "react";
import { MobileNavContextState } from "../types";

const ContextDefaultValues: MobileNavContextState = {
  mobile: false,
  setMobile: () => {},
};
export const MobileNavContext =
  createContext<MobileNavContextState>(ContextDefaultValues);

interface IContextProviderProps {
  children: ReactNode;
}
const ContextProvider = ({ children }: IContextProviderProps) => {
  const [mobile, setMobile] = useState<boolean>(ContextDefaultValues.mobile);
  const values = {
    mobile,
    setMobile,
  };
  return (
    <MobileNavContext.Provider value={values}>
      {children}
    </MobileNavContext.Provider>
  );
};

export default ContextProvider;
