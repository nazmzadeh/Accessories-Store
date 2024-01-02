/* eslint-disable @typescript-eslint/no-unused-vars */
import { Select } from "antd";
import "./Select.scss";
import { SelectValue } from "antd/es/select";

export interface IOptionProps {
  id: number;
  value: string;
  label: string;
}
interface ISelectProps {
  items: IOptionProps[];
  onSelectChange: (value: SelectValue) => void;
}
const { Option: AntdOption } = Select;

const SelectOption = ({ items, onSelectChange }: ISelectProps) => {
  console.log(items[0].value);
  return (
    <>
      <Select
        defaultValue={items[0].value}
        style={{ width: 120 }}
        onChange={onSelectChange}
        options={items}
        className="select"
      >
        {items.map((item) => (
          <AntdOption key={item.id} value={item.value}>
            {item.label}
          </AntdOption>
        ))}
      </Select>
    </>
  );
};

export default SelectOption;
