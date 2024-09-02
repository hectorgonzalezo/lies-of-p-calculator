import '../styles/numberInputStyle.scss';


interface NumberInputProps {
  name: string;
}

function NumberInput({ name }: NumberInputProps) {
  return (
    <div className="number-input">
      <label htmlFor={`${name}-input`}>{name}</label>
      <input type="number" id={`${name}-input`} name={`${name}-input`} min={0} />
    </div>
  );
}

export default NumberInput