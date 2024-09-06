import { ChangeEvent } from "react";

interface SelectFieldProps {
  title: string;
  options: string[];
  onSelect: (e: ChangeEvent<HTMLSelectElement>) => void;
}
function SelectField({ title, options, onSelect }: SelectFieldProps){
  return (
    <div>
      <label htmlFor={`${title}-select`}>{title}</label>
      <select name={title} id={`${title}-select`} onChange={onSelect}>
        {options.map((option, i) => (
          <option value={i}>{option}</option>
        ))}
      </select>
    </div>
  );
}

export default SelectField