/* eslint-disable @typescript-eslint/no-unused-vars */
import { ITabProps } from "../../../types";

const TabTitle = (props: ITabProps) => {
  return <button onClick={props.onClick} className={props.className}>{props.label}</button>;
};

export default TabTitle;
