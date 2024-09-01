import '../styles/numberInputStyle.scss';


interface NumberInputProps {
  name: string;
  img?: string;
}

function NumberInput({ name, img }: NumberInputProps) {
  return (
    <div className="number-input">
      <label htmlFor={`${name}-input`}>{name}</label>
      {img ?  <img src={img} alt={name}/> : null}
      <input type="number" id={`${name}-input`} name={`${name}-input`} min={0} />
    </div>
  );
}

export default NumberInput