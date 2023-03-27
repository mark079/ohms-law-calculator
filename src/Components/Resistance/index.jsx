import { useState } from "react";

export const Resistance = () => {
  const [voltage, setVoltage] = useState(0);
  const [current, setCurrent] = useState(0);
  const [result, setResult] = useState('');
  const handleClick = () => {
    if(voltage <= 0 || current <= 0) return alert('Os valores informados precisam ser positivos');
    if(!voltage || !current) return alert('Os dois campos são obrigatórios');
    const handleResult = Number(voltage) / Number(current);
    Number.isInteger(handleResult) ? setResult(`${handleResult}Ω`) : setResult(`${handleResult.toFixed(2)}Ω`);
  };
  return (
    <div className="vertical-input-container">
      <input type="number" placeholder='Tensão' onChange={(e) => setVoltage(e.target.value)} />
      <input type="number" placeholder='Corrente' onChange={(e) => setCurrent(e.target.value)} />
      <button type="button" onClick={handleClick}>Calcular</button>
      <h2>{result || 'Resultado'}</h2>
    </div>
  );
};
