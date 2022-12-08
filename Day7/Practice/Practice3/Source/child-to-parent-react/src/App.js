import { useState } from "react";
import Profile from "./components/Profile";

const App = () => {
  const [Name, setName] = useState("");

  const handleNameChange = (value) => {
    setName(value);
  };
  return (
    <div className="flex items-center justify-center min-h-screen text-white bg-gradient-to-b from-sky-600 via-sky-500 to-sky-400">
      <div className="text-center">
        {Name && <h1 className="mb-3 text-2xl">Hello, {Name}.</h1>}
        <Profile onNameChange={handleNameChange} />
      </div>
    </div>
  );
};

export default App;
