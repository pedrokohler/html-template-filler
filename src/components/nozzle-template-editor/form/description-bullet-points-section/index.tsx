import React, { useCallback } from "react";
import { Accordion, Button, Col, Form, InputGroup, Row } from "react-bootstrap";
import { v4 as randomUUID } from "uuid";
import { IGenericText } from "../../../../interfaces";

function DescriptionBulletPoints({
  descriptionBulletPoints,
  setDescriptionBulletPoints,
}: {
  descriptionBulletPoints: IGenericText[];
  setDescriptionBulletPoints: React.Dispatch<React.SetStateAction<IGenericText[]>>;
}) {
  const handleAddClick = useCallback(() => {
    setDescriptionBulletPoints([
      ...descriptionBulletPoints,
      {
        id: randomUUID(),
        text: "",
      },
    ]);
  }, [descriptionBulletPoints, setDescriptionBulletPoints]);

  const handleRemoveClick = useCallback(
    (id) => {
      return () => {
        const sections = descriptionBulletPoints.filter(
          (section) => section.id !== id
        );
        setDescriptionBulletPoints(sections);
      };
    },
    [descriptionBulletPoints, setDescriptionBulletPoints]
  );

  const handleUpdate = useCallback(
    (id) => {
      // @ts-ignore
      return (e) => {
        const { target } = e;
        const paragraph = descriptionBulletPoints.find((section) => section.id === id);

        if (!paragraph) {
          return;
        }

        paragraph.text = target.value;

        setDescriptionBulletPoints([...descriptionBulletPoints]);
      };
    },
    [descriptionBulletPoints, setDescriptionBulletPoints]
  );

  return (
    <>
      <Accordion className="mt-3 mb-3">
        {descriptionBulletPoints.map((section) => {
          const { id, text } = section;
          const excerpt = text.slice(0, 20);
          const previewText = text.length > 20 ? `${excerpt}...` : excerpt;
          return (
            <Accordion.Item eventKey={id} key={id}>
              <Accordion.Header>
                Ponto lista - {previewText || "Sem Texto"}
              </Accordion.Header>
              <Accordion.Body>
                <Form.Group className="mb-3" key={section.id}>
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
          <Button onClick={handleAddClick}>
            Adicionar Ponto Lista
          </Button>
        </Col>
      </Row>
    </>
  );
}
export default DescriptionBulletPoints;
