import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import {
  Button,
  Col,
  Container,
  FormControl,
  Row,
  Accordion,
} from "react-bootstrap";

function Footer({
  template,
  children,
}: {
  template: string;
  children: React.ReactNode;
}) {
  return (
    <Container className="my-2 sticky">
      <Row className="my-2">
        <Col>
          <CopyToClipboard text={template}>
            <Button>Copiar HTML</Button>
          </CopyToClipboard>
        </Col>
      </Row>
      <Row className="my-2">
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Ver HTML</Accordion.Header>
            <Accordion.Body>
              <FormControl
                readOnly
                className="html-preview"
                as="textarea"
                value={template}
              />
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Pré-Visualização</Accordion.Header>
            <Accordion.Body>
              {children}
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Row>
    </Container>
  );
}
export default Footer;
