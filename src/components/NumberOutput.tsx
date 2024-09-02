interface NumberOutputProps {
  name: string;
  value: number;
}

function NumberOutput({ name, value }: NumberOutputProps) {
  return (
    <div className="number-output">
      <label htmlFor={`${name}-output`}>{name}</label>
      <input
        type="text"
        id={`${name}-output`}
        name={`${name}-output`}
        value={value}
        readOnly
      />
    </div>
  );
}

export default NumberOutput