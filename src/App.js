import { useState } from 'react';
import './App.css';
import NumberInput from './NumberInput';

function App() {

  const [satis, setSatis] = useState(0);
  const [indirim, setIndirim] = useState(0);
  const [sonuc, setSonuc] = useState(0);
  const [komisyon, setKomisyon] = useState(0);
  const [kargo, setKargo] = useState(0);
  const [finalSonuc, setFinalSonuc] = useState(0);

  const onSatisChange = (event) => {
    setSatis(event.target.value);
  };

  const onIndirimChange = (event) => {
    setIndirim(event.target.value);
  };

  const onSonucSubmit = () => {
    setSonuc((satis - (satis * indirim / 100)).toFixed(3));
  };

  const onKomisyonChange = (event) => {
    setKomisyon(event.target.value);
  };

  const onKeyPressedForSonuc = (keyInfo) => {
  if(keyInfo.keyCode === 13) onSonucSubmit();
}

  const onKargoChange = (event) => {
    setKargo(event.target.value);
  };

  const onFinalSonucSubmit = () => {
    setFinalSonuc((sonuc - (sonuc * komisyon / 100) - kargo).toFixed(3));
  };

  return (
    <div className="App">
      <div id='container'>
        <NumberInput
          inputText={'Satış Fiyatı'}
          inputId={'satis'}
          inputChange={onSatisChange}
        />
        <NumberInput
          inputText={'İndirim Miktarı %'}
          inputId={'indirim'}
          inputChange={onIndirimChange}
          onKeyPressed={onKeyPressedForSonuc}
        />
        <button onClick={onSonucSubmit}>Onayla</button>
        <h1>SONUÇ : {sonuc}</h1>
        <hr />
        <NumberInput
          inputText={'Komisyon Miktarı %'}
          inputId={'komisyon'}
          inputChange={onKomisyonChange}
        />
        <NumberInput
          inputText={'Kargo Ücreti'}
          inputId={'kargo'}
          inputChange={onKargoChange}
        />
        <button onClick={onFinalSonucSubmit}>Onayla</button>
        <h1>FİNAL SONUÇ : {finalSonuc}</h1>
      </div>
    </div>
  );
}

export default App;
