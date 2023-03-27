import { useState } from 'react';
import './App.css';
import { ToggleSwitch } from './Components/ToggleSwitch';
import { Current } from './Components/Current';
import { Voltage } from './Components/Voltage';
import { Resistance } from './Components/Resistance';
function App() {
  /**
   * 0 Current
   * 1 Voltage
   * 2 Resistance
  */
  const [buttonSelected, setButtonSelected] = useState(0);
  return (
    <div className="App">
      <header>
        <h1>Lei de Ohm</h1>
      </header>
      <div className='container'>
        <ToggleSwitch buttonSelected={buttonSelected} setButtonSelected={setButtonSelected} />
        {buttonSelected === 0 && <Current />}
        {buttonSelected === 1 && <Voltage />}
        {buttonSelected === 2 && <Resistance />}
      </div>
    </div>
  );
}

export default App;
