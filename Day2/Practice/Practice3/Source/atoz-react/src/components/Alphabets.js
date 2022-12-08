import "./alphabets.css";

const Alphabets = () => {
  const alphabets = [];
  for (let i = 65; i < 91; i++) {
    alphabets.push(String.fromCharCode(i));
  }

  return (
    <ul className="alphabets">
      {alphabets.map((value) => (
        <li>{value}</li>
      ))}
    </ul>
  );
};

export default Alphabets;
