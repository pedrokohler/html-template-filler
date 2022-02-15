import React, { useCallback } from "react";
import { Accordion, Button, Form, InputGroup } from "react-bootstrap";
import { SpecialPropertyType } from "../../../../enums";

import {
  IFeatureWithSpecialProperty,
  ISpecialProperty,
} from "../../../../interfaces";

function TextProperty({
  featuresList,
  setFeaturesList,
  feature,
  property,
}: {
  featuresList: IFeatureWithSpecialProperty[];
  setFeaturesList: React.Dispatch<
    React.SetStateAction<IFeatureWithSpecialProperty[]>
  >;
  feature: IFeatureWithSpecialProperty;
  property: ISpecialProperty;
}) {
  const handleRemoveButtonClick = useCallback(
    ({ featureId, propertyId }) => {
      return () => {
        const feature = featuresList.find(
          (feature) => feature.id === featureId
        );

        if (!feature) {
          return;
        }

        const properties = feature.properties.filter(
          (property) => property.id !== propertyId
        );
        feature.properties = properties;

        setFeaturesList([...featuresList]);
      };
    },
    [featuresList, setFeaturesList]
  );

  const handleUpdateProperty = useCallback(
    ({ featureId, propertyId }) => {
      // @ts-ignore
      return (e) => {
        const { target } = e;
        const section = featuresList.find(
          (section) => section.id === featureId
        );

        if (!section) {
          return;
        }

        const property = section.properties.find(
          (property) => property.id === propertyId
        );

        if (!property) {
          return;
        }

        if (target.name === "content") {
          property.content = target.value;
        }
        if (target.name === "title") {
          property.title = target.value;
        }
        if (target.name === "type") {
          const { value } = target;
          property.type = value;
          if(value === SpecialPropertyType.DEFAULT){
            property.content = "";
          }else {
            property.content = [];
          }
        }

        setFeaturesList([...featuresList]);
      };
    },
    [featuresList, setFeaturesList]
  );

  const { id: propertyId } = property;
  const { id: featureId } = feature;

  return (
    <Accordion.Item eventKey={propertyId} key={propertyId}>
      <Accordion.Header>
        {property.content || "Propriedade Sem Texto"}
      </Accordion.Header>
      <Accordion.Body>
        <InputGroup className="mb-3">
          <InputGroup.Text>Tipo</InputGroup.Text>
          <Form.Select
            name="type"
            value={property.type}
            onChange={handleUpdateProperty({
              featureId,
              propertyId,
            })}
          >
            <option value={SpecialPropertyType.DEFAULT}>Texto</option>
            <option value={SpecialPropertyType.TAGS}>Tags</option>
          </Form.Select>
        </InputGroup>

        <InputGroup className="mb-3">
          <InputGroup.Text>Título</InputGroup.Text>
          <Form.Control
            name="title"
            as="input"
            value={property.title}
            onChange={handleUpdateProperty({
              featureId,
              propertyId,
            })}
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Text>Texto</InputGroup.Text>
          <Form.Control
            name="content"
            as="input"
            value={property.content as string}
            onChange={handleUpdateProperty({
              featureId,
              propertyId,
            })}
          />
        </InputGroup>
        <Button
          className="mt-2"
          variant="danger"
          onClick={handleRemoveButtonClick({
            featureId,
            propertyId,
          })}
        >
          Remover
        </Button>
      </Accordion.Body>
    </Accordion.Item>
  );
}
export default TextProperty;
