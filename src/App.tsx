import React from "react";
import { Container, Tabs, Tab } from "react-bootstrap";
import EditNozzleTemplate from "./components/nozzle-template-editor";

import EditSimpleTemplate from "./components/simple-template-editor";

function App() {
  return (
    <Container>
      <Tabs defaultActiveKey="nozzle" className="mb-3">
        <Tab eventKey="nozzle" title="Bicos">
          <EditNozzleTemplate></EditNozzleTemplate>
        </Tab>
        <Tab eventKey="other" title="Outros">
          <EditSimpleTemplate></EditSimpleTemplate>
        </Tab>
      </Tabs>
    </Container>
  );
}
export default App;
