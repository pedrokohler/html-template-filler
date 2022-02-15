import React, { useCallback } from "react";
import { Accordion, Button, Form, InputGroup } from "react-bootstrap";
import { v4 as randomUUID } from "uuid";

import { SpecialPropertyType } from "../../../../enums";
import {
  IColoredTag,
  IFeatureWithSpecialProperty,
  ISpecialProperty,
} from "../../../../interfaces";
import TagsSection from "./tags-section";

function TagProperty({
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
          if (value === SpecialPropertyType.DEFAULT) {
            property.content = "";
          } else {
            property.content = [];
          }
        }

        setFeaturesList([...featuresList]);
      };
    },
    [featuresList, setFeaturesList]
  );

  const handleAddTagClick = useCallback(
    ({ featureId, propertyId }) => {
      return () => {
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
        const tags = property.content as IColoredTag[];
        property.content = [
          ...tags,
          {
            id: randomUUID(),
            backgroundColor: "white",
            textColor: "black",
            text: "",
            url: "",
          },
        ];

        setFeaturesList([...featuresList]);
      }
  }, [featuresList, setFeaturesList]);

  const { id: propertyId } = property;
  const { id: featureId } = feature;

  return (
    <Accordion.Item eventKey={propertyId} key={propertyId}>
      <Accordion.Header>
        {property.title || "Propriedade Sem Título"}
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

        <TagsSection
          featuresList={featuresList}
          setFeaturesList={setFeaturesList}
          feature={feature}
          property={property}
        ></TagsSection>

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

        <Button
          name="property"
          className="mt-2 mx-2"
          onClick={handleAddTagClick({
            featureId,
            propertyId,
          })}
        >
          Adicionar Tag
        </Button>
      </Accordion.Body>
    </Accordion.Item>
  );
}
export default TagProperty;
