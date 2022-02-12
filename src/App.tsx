import React from "react";
import { Container, Tabs, Tab } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import EditSimpleTemplate from "./components/simple-template-editor";

function App() {
  return (
    <Container>
      <Tabs defaultActiveKey="nozzle" className="mb-3">
        <Tab eventKey="nozzle" title="Bicos">
          <Container>
            <h1 className="my-4">Bicos</h1>
          </Container>
        </Tab>
        <Tab eventKey="other" title="Outros">
          <EditSimpleTemplate></EditSimpleTemplate>
        </Tab>
      </Tabs>
    </Container>
  );
}
export default App;
