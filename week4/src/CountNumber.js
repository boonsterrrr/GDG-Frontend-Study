function CountNumber({
  count,
  onIncrease,
  onDecrease,
  onIncrease10,
  onDecrease10,
  onReset,
}) {
  function coloredNumber() {
    if (count > 0) {
      return `rgb(${count},0,0)`;
    }
  }
  const h2Style = {
    fontSize: "30px",
    color: `${coloredNumber()}`,
  };
  return (
    <div>
      <h2 style={h2Style}>{count}</h2>

      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
      <button onClick={onIncrease10}>+10</button>
      <button onClick={onDecrease10}>-10</button>
      <button onClick={onReset}>Reset</button>
    </div>
  );
}
export default CountNumber;
