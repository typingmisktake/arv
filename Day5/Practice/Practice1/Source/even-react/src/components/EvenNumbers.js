const EvenNumbers = () => {
  const numbers = Array.from({ length: 100 }, (_, x) => {
    return ++x;
  }).filter((x) => x % 2 === 0);
  return numbers.map((value) => (
    <div className="number">
      <span>{value}</span>
    </div>
  ));
};

export default EvenNumbers;
