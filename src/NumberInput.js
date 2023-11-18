function NumberInput({inputText, inputId, inputChange, onKeyPressed}) {
  return (
    <>
      <label htmlFor={inputId}>{inputText}</label>
      <input
        type="number"
        id={inputId}
        onChange={inputChange}
        onKeyDown={onKeyPressed}
      />
    </>
  );
}

export default NumberInput;
