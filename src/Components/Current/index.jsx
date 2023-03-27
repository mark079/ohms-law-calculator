import { useState } from "react";

export const Current = () => {
  const [voltage, setVoltage] = useState(0);
  const [resistance, setResistance] = useState(0);
  const [result, setResult] = useState('');
  const handleClick = () => {
    if(!voltage || !resistance) return alert('Os dois campos são obrigatórios');
    if(voltage <= 0 || resistance <= 0) return alert('Os valores informados precisam ser positivos');
    const handleResult = Number(voltage) / Number(resistance);
    Number.isInteger(handleResult) ? setResult(`${handleResult}A`) : setResult(`${handleResult.toFixed(2)}A`);
  };
  return (
    <div className="vertical-input-container">
      <input type="number" placeholder='Tensão' onChange={(e) => setVoltage(e.target.value)} />
      <input type="number" placeholder='Resistência' onChange={(e) => setResistance(e.target.value)} />
      <button type="button" onClick={handleClick}>Calcular</button>
      <h2>{result || 'Resultado'}</h2>
    </div>
  );
};
