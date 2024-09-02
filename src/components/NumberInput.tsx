import { ChangeEvent } from 'react';
import '../styles/numberInputStyle.scss';


interface NumberInputProps {
  name: string;
  value: number;
  changeValue: (newValue: number) => void;
  min?: number;
}

function NumberInput({ name, value, changeValue, min = 5 }: NumberInputProps) {
  const setValue = (e: ChangeEvent<HTMLInputElement>) => {
    changeValue(Number(e.target.value));
  };
  return (
    <div className="number-input">
      <label htmlFor={`${name}-input`}>{name}</label>
      <input
        type="number"
        id={`${name}-input`}
        name={`${name}-input`}
        min={min}
        value={value}
        onChange={setValue}
      />
    </div>
  );
}

export default NumberInput