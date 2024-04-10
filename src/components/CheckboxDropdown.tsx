import Select, {
  OptionProps,
  OptionsOrGroups,
  components,
  MultiValue,
  GroupBase,
  ValueContainerProps,
} from "react-select";
import { useState } from "react";

const ValueContainer = (props: ValueContainerProps<Option>) => {
  const length = props.getValue().length;
  return (
    <components.ValueContainer {...props}>
      {length === 0
        ? props.children
        : length === 1
        ? "1 item"
        : `${length} items`}
    </components.ValueContainer>
  );
};

const DropdownOption = (props: OptionProps<Option>) => {
  return (
    <components.Option {...props}>
      <input type="checkbox" checked={props.isSelected} onChange={() => null} />
      <label>{props.label}</label>
    </components.Option>
  );
};

export type Option = {
  value: string;
  label: string;
};

type GroupOptions = GroupBase<Option>;

export type Options = OptionsOrGroups<Option, GroupOptions>;

type Props = {
  options: Options;
  handleChange: (selected: MultiValue<Option>) => void;
  isGrouped?: boolean;
  placeholder: string;
};

export default function CheckboxDropdown({
  options,
  handleChange,
  placeholder,
}: Props) {
  const [selectedOptions, setSelectedOptions] = useState<MultiValue<Option>>(
    []
  );

  return (
    <Select
      styles={{
        control: (styles) => ({
          ...styles,
          width: 171.5,
          fontSize: 14,
          fontFamily: "Roboto",
          height: 35,
        }),
        dropdownIndicator: (base) => ({
          ...base,
          color: "#ED6B1F",
        }),
      }}
      isMulti
      closeMenuOnSelect={false}
      hideSelectedOptions={false}
      placeholder={placeholder}
      onChange={(selected) => {
        setSelectedOptions(selected);
        handleChange(selected);
      }}
      components={{
        Option: DropdownOption,
        ValueContainer: ValueContainer,
      }}
      options={options}
      isOptionSelected={(o) => {
        return selectedOptions.find((selected) => selected.value === o.value)
          ? true
          : false;
      }}
    />
  );
}
