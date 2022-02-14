import React, { useCallback } from "react";
import { Accordion, Button, Col, Form, InputGroup, Row } from "react-bootstrap";
import { v4 as randomUUID } from "uuid";

import { IDownloadSection } from "../../../../interfaces";
import DownloadSectionButtons from "./buttons";

function DownloadSections({
  downloadSections,
  setDownloadSections,
}: {
  downloadSections: IDownloadSection[];
  setDownloadSections: React.Dispatch<React.SetStateAction<IDownloadSection[]>>;
}) {
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

  return (
    <>
      <Accordion className="mb-3">
        {downloadSections.map((section) => {
          const { id, title } = section;
          return (
            <Accordion.Item eventKey={id}>
              <Accordion.Header>
                Seção de Downloads - {title || "Sem Título"}
              </Accordion.Header>
              <Accordion.Body>
                <Form.Group className="mb-3" key={section.id}>
                  <InputGroup className="mb-3">
                    <InputGroup.Text>Título</InputGroup.Text>
                    <Form.Control
                      name="title"
                      as="input"
                      value={title}
                      onChange={handleUpdate(id)}
                    />
                  </InputGroup>
                  <DownloadSectionButtons
                    downloadSections={downloadSections}
                    setDownloadSections={setDownloadSections}
                    section={section}
                  ></DownloadSectionButtons>
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
