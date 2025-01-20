import "./App.css";
import Header from "./components/Header";
import imageImport from "./assets/react.svg";
import CoreConcept from "./components/CoreConcept";
import TabButton from "./components/TabButton";
import { useState } from "react";

function App() {
  const [show, setShow] = useState(false);

  const handleShow = (text) => {
    console.log(text);
  };

  return (
    <>
      <section>
        <Header />
        <CoreConcept img={imageImport} title="React" desc="Udemy Course" />
        <CoreConcept
          img={imageImport}
          title="Redux"
          desc="Udemy Course Part 2"
        />
        <CoreConcept
          img={imageImport}
          title="Next JS"
          desc="Udemy Course Part 3"
        />
      </section>
      <section id="example">
        <menu>
          <TabButton onSelect={() => setShow(!show)}>PROPS</TabButton>
          {show ? (
            <>
              <TabButton onSelect={() => handleShow("IT SECTOR 1")}>
                JSX COMPONENT
              </TabButton>
              <TabButton onSelect={() => handleShow("IT SECTOR 2")}>
                STATES
              </TabButton>
            </>
          ) : null}
        </menu>
      </section>
    </>
  );
}

export default App;
