import React, { useCallback } from "react";
import { Accordion, Button, Col, Form, InputGroup, Row } from "react-bootstrap";
import { v4 as randomUUID } from "uuid";


import { IUrlWithText } from "../../../../interfaces";

function TagsSection({
  tags,
  setTags,
}: {
  tags: IUrlWithText[];
  setTags: React.Dispatch<React.SetStateAction<IUrlWithText[]>>;
}) {
  const handleRemoveTagClick = useCallback(
    (id) => {
      return () => {
        const filteredTags = tags.filter(
          (tag) => tag.id !== id
        );

        setTags([...filteredTags]);
      };
    },
    [tags, setTags]
  );

  const handleUpdateButton = useCallback(
    (id) => {
      // @ts-ignore
      return (e) => {
        const { target } = e;
        const tag = tags.find((tag) => tag.id === id);

        if (!tag) {
          return;
        }

        if (target.name === "text") {
          tag.text = target.value;
        }
        if (target.name === "link") {
          tag.url = target.value;
        }

        setTags([...tags]);
      };
    },
    [tags, setTags]
  );

  const handleAddClick = useCallback(() => {
    setTags([
      ...tags,
      {
        id: randomUUID(),
        text: "",
        url: "",
      },
    ]);
  }, [tags, setTags]);

  return (
    <>
    <Accordion className="mb-3">
      {tags.map((tag) => {
        const { id } = tag;
        return (
          <Accordion.Item eventKey={id} key={id}>
            <Accordion.Header>
              {tag.text || "Tag Sem Texto"}
            </Accordion.Header>
            <Accordion.Body>
              <InputGroup className="mb-3">
                <InputGroup.Text>Texto</InputGroup.Text>
                <Form.Control
                  name="text"
                  as="input"
                  value={tag.text}
                  onChange={handleUpdateButton(id)}
                />
              </InputGroup>
              <InputGroup className="mb-3">
                <InputGroup.Text>Link</InputGroup.Text>
                <Form.Control
                  name="link"
                  as="input"
                  type="url"
                  value={tag.url}
                  onChange={handleUpdateButton(id)}
                />
              </InputGroup>
              <Button
                className="mt-2"
                variant="danger"
                onClick={handleRemoveTagClick(id)}
              >
                Remover
              </Button>
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
export default TagsSection;
