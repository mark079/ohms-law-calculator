import { useState } from "react";

export const Voltage = () => {
  const [current, setCurrent] = useState(0);
  const [resistance, setResistance] = useState(0);
  const [result, setResult] = useState('');
  const handleClick = () => {
    if(!current || !resistance) return alert('Os dois campos são obrigatórios');
    const handleResult = Number(current) * Number(resistance);
    Number.isInteger(handleResult) ? setResult(`${handleResult}v`) : setResult(`${handleResult.toFixed(2)}v`);
  };
  return (
    <div className="vertical-input-container">
      <input type="number" placeholder='Corrente' onChange={(e) => setCurrent(e.target.value)} />
      <input type="number" placeholder='Resistência' onChange={(e) => setResistance(e.target.value)} />
      <button type="button" onClick={handleClick}>Calcular</button>
      <h2>{result || 'Resultado'}</h2>
    </div>
  );
};
