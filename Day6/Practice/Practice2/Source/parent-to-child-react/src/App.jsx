import { useState } from "react";
import Display from "./components/Display";
function App() {
  const [name, setName] = useState("");

  return (
    <div>
      <Display name={name} />
      <input
        type="text"
        name="name"
        id="name"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
        placeholder="Enter your name..."
      />
    </div>
  );
}

export default App;
