import { useState } from "react";

const Calc = (props) => {
  let [result, setResult] = useState(0);

  const calculate = () => {
    const num1 = parseInt(props.num1);
    const num2 = parseInt(props.num2);
    switch (props.operator) {
      case "+":
        setResult(num1 + num2);
        break;
      case "-":
        setResult(num1 - num2);
        break;
      case "*":
        setResult(num1 * num2);
        break;
      case "/":
        setResult(num1 / num2);
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <button onClick={calculate}>Calculate</button>
      <h1>{result}</h1>
    </div>
  );
};

export default Calc;
