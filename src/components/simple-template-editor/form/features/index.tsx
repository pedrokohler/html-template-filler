import React, { useCallback } from "react";
import { Accordion, Button, Col, Form, InputGroup, Row } from "react-bootstrap";
import { v4 as randomUUID } from "uuid";

import { IFeature } from "../../../../interfaces";
import FeatureProperties from "./properties";

function FeaturesSection({
  featuresList,
  setFeaturesList,
}: {
  featuresList: IFeature[];
  setFeaturesList: React.Dispatch<React.SetStateAction<IFeature[]>>;
}) {
  const handleAddClick = useCallback(() => {
    setFeaturesList([
      ...featuresList,
      {
        id: randomUUID(),
        title: "",
        properties: [],
      },
    ]);
  }, [featuresList, setFeaturesList]);

  const handleRemoveClick = useCallback(
    (id) => {
      return () => {
        const features = featuresList.filter((section) => section.id !== id);
        setFeaturesList(features);
      };
    },
    [featuresList, setFeaturesList]
  );

  const handleUpdate = useCallback(
    (id) => {
      // @ts-ignore
      return (e) => {
        const { target } = e;
        const feature = featuresList.find((feature) => feature.id === id);

        if (!feature) {
          return;
        }

        if (target.name === "title") {
          feature.title = target.value;
        }
        if (target.name === "property") {
          feature.properties = [
            ...feature.properties,
            {
              id: randomUUID(),
              text: "",
            },
          ];
        }

        setFeaturesList([...featuresList]);
      };
    },
    [featuresList, setFeaturesList]
  );

  return (
    <>
      <Accordion className="mb-3">
        {featuresList.map((feature) => {
          const { id, title } = feature;
          return (
            <Accordion.Item eventKey={id}>
              <Accordion.Header>
                Seção de Características - {title || "Sem Título"}
              </Accordion.Header>
              <Accordion.Body>
                <Form.Group className="mb-3" key={feature.id}>
                  <InputGroup className="mb-3">
                    <InputGroup.Text>Título</InputGroup.Text>
                    <Form.Control
                      name="title"
                      as="input"
                      value={title}
                      onChange={handleUpdate(id)}
                    />
                  </InputGroup>
                  <FeatureProperties
                    featuresList={featuresList}
                    setFeaturesList={setFeaturesList}
                    feature={feature}
                  ></FeatureProperties>
                  <Button
                    className="mt-2"
                    variant="danger"
                    onClick={handleRemoveClick(id)}
                  >
                    Remover
                  </Button>
                  <Button
                    name="property"
                    className="mt-2 mx-2"
                    onClick={handleUpdate(id)}
                  >
                    Adicionar Propriedade
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
            Adicionar Seção de Características
          </Button>
        </Col>
      </Row>
    </>
  );
}
export default FeaturesSection;
