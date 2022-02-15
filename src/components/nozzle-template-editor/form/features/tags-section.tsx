import React, { useCallback } from "react";
import { Accordion, Button, Form, InputGroup } from "react-bootstrap";

import {
  IColoredTag,
  IFeatureWithSpecialProperty,
  ISpecialProperty,
} from "../../../../interfaces";

function TagsSection({
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
    ({ featureId, propertyId, tagId }) => {
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

        const tags = property.content as IColoredTag[];
        const tag = tags.find((tag) => tag.id === tagId);
        if (!tag) {
          return;
        }

        if (target.name === "text") {
          tag.text = target.value;
        }
        if (target.name === "link") {
          tag.url = target.value;
        }
        if (target.name === "backgroundColor") {
          tag.backgroundColor = target.value;
        }
        if (target.name === "textColor") {
          tag.textColor = target.value;
        }

        setFeaturesList([...featuresList]);
      };
    },
    [featuresList, setFeaturesList]
  );

  const { id: propertyId, content: tags } = property;
  const { id: featureId } = feature;

  return (
    <Accordion className="mb-3">
      {(tags as IColoredTag[]).map((tag) => {
        const { id: tagId } = tag;
        return (
          <Accordion.Item eventKey={tagId} key={tagId}>
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
                  onChange={handleUpdateProperty({
                    featureId,
                    propertyId,
                    tagId,
                  })}
                />
              </InputGroup>
              <InputGroup className="mb-3">
                <InputGroup.Text>Link</InputGroup.Text>
                <Form.Control
                  name="link"
                  as="input"
                  value={tag.url}
                  onChange={handleUpdateProperty({
                    featureId,
                    propertyId,
                    tagId,
                  })}
                />
              </InputGroup>
              <Button
                className="mt-2"
                variant="danger"
                onClick={handleRemoveButtonClick({
                  featureId,
                  propertyId,
                  tagId
                })}
              >
                Remover
              </Button>
            </Accordion.Body>
          </Accordion.Item>
        );
      })}
    </Accordion>
  );
}
export default TagsSection;
