function Display(props) {
  if (props.name) return <h1>Hello, {props.name}.</h1>;
  return <h1>Enter your name 👇.</h1>;
}

export default Display;
