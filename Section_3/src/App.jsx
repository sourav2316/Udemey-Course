import "./App.css";
import Header from "./components/Header";
import imageImport from "./assets/react.svg";
import CoreConcept from "./components/CoreConcept";
import TabButton from "./components/TabButton";
import { useState } from "react";
import Section from "./components/Section";
import Tabs from "./components/Tabs";

function App() {
  const [show, setShow] = useState(false);

  const handleShow = (text) => {
    console.log(text);
  };

  return (
    <>
      <Section title="SVIT">
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
      </Section>
      <Section title="TE ESPORTS" id="example">
        <Tabs
          buttonContainer="menu"
          buttons={
            <>
              <TabButton onClick={() => setShow(!show)}>PROPS</TabButton>
              {show ? (
                <>
                  <TabButton onClick={() => handleShow("IT SECTOR 1")}  >
                    JSX COMPONENT 
                  </TabButton>
                  <TabButton onClick={() => handleShow("IT SECTOR 2")}>
                    STATES
                  </TabButton>
                </>
              ) : null}
            </>
          }
        ></Tabs>
      </Section>
    </>
  );
}

export default App;
