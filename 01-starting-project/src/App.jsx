import { useState } from "react";

import { CORE_CONCEPTS } from "./data.js";
import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcept.jsx";
import TabButton from "./components/TabButton.jsx";
import componentsImg from "./assets/components.png";
import { EXAMPLES } from "./data.js";

function App() {
  const [selectedTopic, setSelectedTopic] = useState("");
  // const [selectedTopic, setSelectedTopic] = useState("NULL");

  function handleSelect(selectButton) {
    // selectButton => "components, jxs, props, state"
    setSelectedTopic(selectButton);
    //console.log(selectedTopic);

    //let tabContent = <p> Please select a topic. </p>;
    //if(selectedTopic) {
    //tabContent=  THE ALL DIV FROM THE EXAMPLES;
    //ITS ANOTHER WAY OF WRITING IT
    //}
  }

  return (
    <div>
      <Header />
      {/*ou <header><header/> */}
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept
              title="Components"
              description="The core UI building block"
              image={componentsImg}
            />
            <CoreConcept
              title={CORE_CONCEPTS[1].title}
              description={CORE_CONCEPTS[1].description}
              image={CORE_CONCEPTS[1].image}
            />
            {/* <CoreConcept{...CORE_CONCEPTS[1]} esta linha de código ira substituir aquelas 3 de cima*/}
            <CoreConcept
              title={CORE_CONCEPTS[2].title}
              description={CORE_CONCEPTS[2].description}
              image={CORE_CONCEPTS[2].image}
            />
            <CoreConcept
              title={CORE_CONCEPTS[3].title}
              description={CORE_CONCEPTS[3].description}
              image={CORE_CONCEPTS[3].image}
            />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => handleSelect("components")}>
              Components
            </TabButton>
            <TabButton onSelect={() => handleSelect("jsx")}>JSX</TabButton>
            <TabButton onSelect={() => handleSelect("props")}>Props</TabButton>
            <TabButton onSelect={() => handleSelect("state")}>State</TabButton>
          </menu>
          {/* or{selectedTopic === undefined <p>Please select a topic.</p> : null}*/}
          {/* or{!selectedTopic && <p>Please select a topic.</p>}*/}
          {!selectedTopic ? <p>Please select a topic.</p> : null}
          {selectedTopic ? (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
              </pre>
            </div>
          ) : null}
        </section>
      </main>
    </div>
  );
}

export default App;
