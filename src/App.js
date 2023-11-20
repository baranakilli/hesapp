import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRotateLeft } from '@fortawesome/free-solid-svg-icons';
import './App.css';
import ArrayCalcPage from './Components/ArrayCalcPage';
import MainCalcPage from './Components/MainCalcPage';

function App() {
  const [route, setRoute] = useState('array');
  const [satis, setSatis] = useState(0);
  const [indirim, setIndirim] = useState(0);
  const [komisyon, setKomisyon] = useState(0);
  const [kargo, setKargo] = useState(0);
  const [sonuc, setSonuc] = useState(0);
  const [finalSonuc, setFinalSonuc] = useState(0);

  const onReset = () => {
    setSatis(0);
    setIndirim(0);
    setKomisyon(0);
    setKargo(0);
    setSonuc(0);
    setFinalSonuc(0);
  };

  const onRouteChange = (event) => {
    setRoute(event.target.value);
    onReset();
  };

  const clearInput = (event) => {
    if (event.target.value === '0') {
      event.target.value = '';
    }
  };

  return (
    <div className="App">
      <div id="container">
        {route === 'array' ? (
          <ArrayCalcPage
            satis={satis}
            setSatis={setSatis}
            komisyon={komisyon}
            setKomisyon={setKomisyon}
            kargo={kargo}
            setKargo={setKargo}
            sonuc={sonuc}
            setSonuc={setSonuc}
            clearInput={clearInput}
          />
        ) : route === 'main' ? (
          <MainCalcPage
            satis={satis}
            setSatis={setSatis}
            indirim={indirim}
            setIndirim={setIndirim}
            komisyon={komisyon}
            setKomisyon={setKomisyon}
            kargo={kargo}
            setKargo={setKargo}
            sonuc={sonuc}
            setSonuc={setSonuc}
            finalSonuc={finalSonuc}
            setFinalSonuc={setFinalSonuc}
            clearInput={clearInput}
          />
        ) : (
          <h1>ERROR</h1>
        )}
        <div id="form">
          <div>
            <div className="input-box">
              <input
                type="radio"
                id="toplu"
                value="array"
                defaultChecked={route === 'array'}
                name="routeChanger"
                onClick={onRouteChange}
              />
              <label htmlFor="toplu">Toplu Hesaplama</label>
            </div>
            <div className="input-box">
              <input
                type="radio"
                id="tekli"
                value="main"
                defaultChecked={route === 'main'}
                name="routeChanger"
                onClick={onRouteChange}
              />
              <label htmlFor="tekli">Tekli Hesaplama</label>
            </div>
          </div>
          <button onClick={onReset}>
            <FontAwesomeIcon icon={faArrowRotateLeft} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
