import "./App.css";

function App() {
  const array = ["Sourav", "manish", "vaibhav"];
  //////////////////////////////
  function genRandomNumber(num) {
    return Math.floor(Math.random() * (num + 1));
  }

  const descriptions = array[genRandomNumber(2)];

  return <h1>{descriptions} Hello World Kida vayi mundeyaaaa</h1>;
}

export default App;
