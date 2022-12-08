import Hello from "./components/Hello";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div>
      <Hello name={name} />
      <input
        onChange={handleChange}
        value={name}
        placeholder="Enter your name..."
      />
    </div>
  );
}

export default App;
