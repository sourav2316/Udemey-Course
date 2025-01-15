import "./App.css";

function App() {
  const array = ["Sourav", "manish", "vaibhav"];

  function genRandomNumber(num) {
    return Math.floor(Math.random() * (num + 1));
  }

  return <h1>{array[genRandomNumber(2)]} Hello World Kida vayi mundeyaaaa</h1>;
}

export default App;
