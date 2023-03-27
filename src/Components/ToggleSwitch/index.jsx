import './styles.css';

export const ToggleSwitch = ({buttonSelected, setButtonSelected}) => {
  return (
    <div className="toggle-area">
      <button type='button' className={`btn ${buttonSelected === 0 ? 'isActive': ''}`} onClick={() => setButtonSelected(0)}>Corrente</button>
      <button type='button' className={`btn ${buttonSelected === 1 ? 'isActive': ''}`} onClick={() => setButtonSelected(1)}>Tensão</button>
      <button type='button' className={`btn ${buttonSelected === 2 ? 'isActive': ''}`} onClick={() => setButtonSelected(2)}>Resistência</button>
    </div>
  );
};
