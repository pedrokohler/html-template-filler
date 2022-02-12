import React, { useCallback, useState } from "react";
import { Accordion, Button, Col, Form, InputGroup, Row } from "react-bootstrap";
import { v4 as randomUUID } from "uuid";

import { IDownloadSection } from "../../../interfaces";

function DownloadSections() {
  const [downloadSections, setDownloadSections] = useState<IDownloadSection[]>(
    []
  );

  const handleAddClick = useCallback(() => {
    setDownloadSections([
      ...downloadSections,
      {
        id: randomUUID(),
        title: "",
        buttons: [],
      },
    ]);
  }, [downloadSections, setDownloadSections]);

  const handleRemoveClick = useCallback(
    (id) => {
      return () => {
        const sections = downloadSections.filter(
          (section) => section.id !== id
        );
        setDownloadSections(sections);
      };
    },
    [downloadSections, setDownloadSections]
  );

  const handleRemoveButtonClick = useCallback(
    ({ sectionId, buttonId }) => {
      return () => {
        const section = downloadSections.find(
          (section) => section.id === sectionId
        );

        if (!section) {
          return;
        }

        const buttons = section.buttons.filter(
          (button) => button.id !== buttonId
        );
        section.buttons = buttons;

        setDownloadSections([...downloadSections]);
      };
    },
    [downloadSections, setDownloadSections]
  );

  const handleUpdate = useCallback(
    (id) => {
      // @ts-ignore
      return (e) => {
        const { target } = e;
        const section = downloadSections.find((section) => section.id === id);

        if (!section) {
          return;
        }

        if (target.name === "title") {
          section.title = target.value;
        }
        if (target.name === "button") {
          section.buttons = [
            ...section.buttons,
            {
              id: randomUUID(),
              text: "",
              url: "",
            },
          ];
        }

        setDownloadSections([...downloadSections]);
      };
    },
    [downloadSections, setDownloadSections]
  );

  const handleUpdateButton = useCallback(
    ({ sectionId, buttonId }) => {
      // @ts-ignore
      return (e) => {
        const { target } = e;
        const section = downloadSections.find(
          (section) => section.id === sectionId
        );

        if (!section) {
          return;
        }

        const button = section.buttons.find((button) => button.id === buttonId);

        if (!button) {
          return;
        }

        if (target.name === "text") {
          button.text = target.value;
        }
        if (target.name === "link") {
          button.url = target.value;
        }

        setDownloadSections([...downloadSections]);
      };
    },
    [downloadSections, setDownloadSections]
  );

  return (
    <>
      <Accordion className="mb-3">
        {downloadSections.map((section) => {
          const { id, title, buttons } = section;
          return (
            <Accordion.Item eventKey={id}>
              <Accordion.Header>
                Seção de Downloads - {title || "Sem Título"}
              </Accordion.Header>
              <Accordion.Body>
                <Form.Group className="mb-3" key={section.id}>
                  <Form.Label>
                  </Form.Label>
                  <InputGroup className="mb-3">
                    <InputGroup.Text>Título</InputGroup.Text>
                    <Form.Control
                      name="title"
                      as="input"
                      value={title}
                      onChange={handleUpdate(id)}
                    />
                  </InputGroup>
                  <Accordion className="mb-3">
                    {buttons.map((button) => (
                      <Accordion.Item eventKey={button.id}>
                        <Accordion.Header>
                          {button.text || "Botão Sem Texto"}
                        </Accordion.Header>
                        <Accordion.Body>
                          <InputGroup className="mb-3">
                            <InputGroup.Text>Texto</InputGroup.Text>
                            <Form.Control
                              name="text"
                              as="input"
                              value={button.text}
                              onChange={handleUpdateButton({
                                sectionId: id,
                                buttonId: button.id,
                              })}
                            />
                          </InputGroup>
                          <InputGroup className="mb-3">
                            <InputGroup.Text>Link</InputGroup.Text>
                            <Form.Control
                              name="link"
                              as="input"
                              type="url"
                              value={button.url}
                              onChange={handleUpdateButton({
                                sectionId: id,
                                buttonId: button.id,
                              })}
                            />
                          </InputGroup>
                          <Button
                            className="mt-2"
                            variant="danger"
                            onClick={handleRemoveButtonClick({
                              sectionId: id,
                              buttonId: button.id,
                            })}
                          >
                            Remover
                          </Button>
                        </Accordion.Body>
                      </Accordion.Item>
                    ))}
                  </Accordion>
                  <Button
                    className="mt-2"
                    variant="danger"
                    onClick={handleRemoveClick(id)}
                  >
                    Remover
                  </Button>
                  <Button
                    name="button"
                    className="mt-2 mx-2"
                    onClick={handleUpdate(id)}
                  >
                    Adicionar Botão
                  </Button>
                </Form.Group>
              </Accordion.Body>
            </Accordion.Item>
          );
        })}
      </Accordion>
      <Row className="mb-5">
        <Col>
          <Button onClick={handleAddClick}>Adicionar Seção de Downloads</Button>
        </Col>
      </Row>
    </>
  );
}
export default DownloadSections;
