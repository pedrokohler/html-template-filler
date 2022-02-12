import React, { useCallback, useState } from "react";
import { Accordion, Button, Col, Form, InputGroup, Row } from "react-bootstrap";
import { v4 as randomUUID } from "uuid";
import { IFooterParagraph } from "../../../../interfaces";

function FooterParagraphs() {
  const [footerParagraphs, setFooterParagraphs] = useState<IFooterParagraph[]>(
    []
  );

  const handleAddClick = useCallback(() => {
    setFooterParagraphs([
      ...footerParagraphs,
      {
        id: randomUUID(),
        text: "",
      },
    ]);
  }, [footerParagraphs, setFooterParagraphs]);

  const handleRemoveClick = useCallback(
    (id) => {
      return () => {
        const sections = footerParagraphs.filter(
          (section) => section.id !== id
        );
        setFooterParagraphs(sections);
      };
    },
    [footerParagraphs, setFooterParagraphs]
  );

  const handleUpdate = useCallback(
    (id) => {
      // @ts-ignore
      return (e) => {
        const { target } = e;
        const paragraph = footerParagraphs.find((section) => section.id === id);

        if (!paragraph) {
          return;
        }

        paragraph.text = target.value;

        setFooterParagraphs([...footerParagraphs]);
      };
    },
    [footerParagraphs, setFooterParagraphs]
  );

  return (
    <>
      <Accordion className="mt-3 mb-3">
        {footerParagraphs.map((section) => {
          const { id, text } = section;
          const excerpt = text.slice(0, 20);
          const previewText = text.length > 20 ? `${excerpt}...` : excerpt;
          return (
            <Accordion.Item eventKey={id}>
              <Accordion.Header>
                Parágrafo do Rodapé - {previewText || "Sem Texto"}
              </Accordion.Header>
              <Accordion.Body>
                <Form.Group className="mb-3" key={section.id}>
                  <Form.Label>
                  </Form.Label>
                  <InputGroup className="mb-3">
                    <InputGroup.Text>Texto</InputGroup.Text>
                    <Form.Control
                      as="textarea"
                      value={text}
                      onChange={handleUpdate(id)}
                    />
                  </InputGroup>
                  <Button
                    className="mt-2"
                    variant="danger"
                    onClick={handleRemoveClick(id)}
                  >
                    Remover
                  </Button>
                </Form.Group>
              </Accordion.Body>
            </Accordion.Item>
          );
        })}
      </Accordion>
      <Row className="mb-5">
        <Col>
          <Button onClick={handleAddClick}>Adicionar Parágrafo do Rodapé</Button>
        </Col>
      </Row>
    </>
  );
}
export default FooterParagraphs;
