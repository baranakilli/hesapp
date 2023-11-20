function MainCalcPage(props) {
  const {
    satis,
    setSatis,
    indirim,
    setIndirim,
    komisyon,
    setKomisyon,
    kargo,
    setKargo,
    sonuc,
    setSonuc,
    finalSonuc,
    setFinalSonuc,
    clearInput
  } = props;

  const onSonucSubmit = () => {
    setSonuc((satis - (satis * indirim) / 100).toFixed(3));
  };

  const onKeyPressedForSonuc = (keyInfo) => {
    if (keyInfo.keyCode === 13) onSonucSubmit();
  };

  const onKeyPressedForFinalSonuc = (keyInfo) => {
    if (keyInfo.keyCode === 13) onFinalSonucSubmit();
  };

  const onFinalSonucSubmit = () => {
    setFinalSonuc((sonuc - (sonuc * komisyon) / 100 - kargo).toFixed(3));
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
      <label htmlFor="indirim">İndirim Miktarı</label>
      <input
        type="text"
        id="indirim"
        value={indirim}
        placeholder="0"
        onFocus={clearInput}
        onChange={(event) => setIndirim(event.target.value)}
        onKeyDown={onKeyPressedForSonuc}
      />
      <button onClick={onSonucSubmit}>Onayla</button>
      <h1>SONUÇ : {sonuc}</h1>
      <hr />
      <label htmlFor="komisyon">Komisyon Miktarı %</label>
      <input
        type="text"
        id="komisyon"
        value={komisyon}
        placeholder="0"
        onFocus={clearInput}
        onChange={(event) => setKomisyon(event.target.value)}
        onKeyDown={onKeyPressedForFinalSonuc}
      />
      <label htmlFor="kargo">Kargo Ücreti</label>
      <input
        type="text"
        id="kargo"
        value={kargo}
        placeholder="0"
        onFocus={clearInput}
        onChange={(event) => setKargo(event.target.value)}
        onKeyDown={onKeyPressedForFinalSonuc}
      />
      <button onClick={onFinalSonucSubmit}>Onayla</button>
      <h1>FİNAL SONUÇ : {finalSonuc}</h1>
    </div>
  );
}

export default MainCalcPage;
