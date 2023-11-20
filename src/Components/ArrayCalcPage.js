import { useState } from "react";

function ArrayCalcPage(props) {
  const {
    satis,
    setSatis,
    komisyon,
    setKomisyon,
    kargo,
    setKargo,
    sonuc,
    setSonuc,
    clearInput
  } = props;

  const [index, setIndex] = useState('');

  const onSonucSubmit = () => {
    let satisArr = [0];
    let komisyonArr = [0];
    if (satis !== 0) satisArr = satis.replace(/,/g, '.').split(' ');
    if (komisyon !== 0) komisyonArr = komisyon.replace(/,/g, '.').split(' ');
    if (satisArr.length > komisyonArr.length) {
      while (satisArr.length > komisyonArr.length) {
        komisyonArr.push(komisyonArr[komisyonArr.length - 1]);
      }
    }
    let resultsArray = [];
    for (let i = 0; i <= satisArr.length - 1; i++) {
      resultsArray[i] =
        satisArr[i] - (satisArr[i] * komisyonArr[i]) / 100 - kargo;
    }
    const maxResult = Math.max(...resultsArray);
    const indexOfMaxResult = resultsArray.findIndex(
      (resultsArray) => resultsArray === maxResult
    );
    setIndex(indexOfMaxResult + 1)
    setSonuc(maxResult);
  };

  const onKeyPressedForSonuc = (keyInfo) => {
    if (keyInfo.keyCode === 13) onSonucSubmit();
  };

  return (
    <div id="comp-container">
      <label htmlFor="satis">Satış Fiyatı</label>
      <input
        type="text"
        id="satis"
        value={satis}
        placeholder="0"
        onFocus={clearInput}
        onChange={(event) => setSatis(event.target.value)}
        onKeyDown={onKeyPressedForSonuc}
      />
      <label htmlFor="komisyon">Komisyon Miktarı %</label>
      <input
        type="text"
        id="komisyon"
        value={komisyon}
        placeholder="0"
        onFocus={clearInput}
        onChange={(event) => setKomisyon(event.target.value)}
        onKeyDown={onKeyPressedForSonuc}
      />
      <label htmlFor="kargo">Kargo Ücreti</label>
      <input
        type="text"
        id="kargo"
        value={kargo}
        placeholder="0"
        onFocus={clearInput}
        onChange={(event) => setKargo(event.target.value)}
        onKeyDown={onKeyPressedForSonuc}
      />
      <button onClick={onSonucSubmit}>Onayla</button>
      <h1>
        {index}SONUÇ: {sonuc}
      </h1>
    </div>
  );
}

export default ArrayCalcPage;
