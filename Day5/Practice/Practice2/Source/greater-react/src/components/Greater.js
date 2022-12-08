import { useState } from "react";

import "./Greater.css";

const Greater = () => {
  const [form, setForm] = useState({ num1: undefined, num2: undefined });
  return (
    <div>
      <div>
        <form action="">
          <input
            type="number"
            name="num1"
            id="num1"
            onChange={(e) => {
              setForm({ ...form, num1: parseInt(e.target.value) });
            }}
            value={form.num1}
          />
          <input
            type="number"
            name="num2"
            id="num2"
            onChange={(e) => {
              setForm({ ...form, num2: parseInt(e.target.value) });
            }}
            value={form.num2}
          />
        </form>
      </div>
      {!isNaN(form.num1) && !isNaN(form.num2) && (
        <h1>
          {form.num1 > form.num2 ? (
            form.num1
          ) : (
            <>{form.num2 > form.num1 ? form.num2 : "Equal"}</>
          )}
        </h1>
      )}
    </div>
  );
};

export default Greater;
