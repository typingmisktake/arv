import { useState } from "react";
import Calc from "./components/Calc";

function App() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [operator, setOperator] = useState("+");
  return (
    <main>
      <div>
        <div>
          <label htmlFor="num1">Number 1</label>
          <input
            type="number"
            name="num1"
            id="num1"
            value={num1}
            onChange={(e) => {
              setNum1(e.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="num1">Number 2</label>
          <input
            type="number"
            name="num2"
            id="num2"
            value={num2}
            onChange={(e) => {
              setNum2(e.target.value);
            }}
          />
        </div>
        <div>
          <select
            name="operator"
            id="operator"
            value={operator}
            onChange={(e) => {
              setOperator(e.target.value);
            }}
          >
            <option value="+">+</option>
            <option value="-">-</option>
            <option value="*">*</option>
            <option value="/">/</option>
          </select>
        </div>
      </div>
      <Calc num1={num1} num2={num2} operator={operator}></Calc>
    </main>
  );
}

export default App;
