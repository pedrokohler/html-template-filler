import React, { useCallback } from "react";
import { Accordion, Button, Col, Form, InputGroup, Row } from "react-bootstrap";
import { ColorResult, CirclePicker } from "react-color";

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

  const findTag = useCallback(
    ({ featureId, propertyId, tagId }) => {
      const section = featuresList.find((section) => section.id === featureId);
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
      return tag;
    },
    [featuresList]
  );

  const handleUpdateProperty = useCallback(
    ({ featureId, propertyId, tagId }) => {
      // @ts-ignore
      return (e) => {
        const { target } = e;
        const tag = findTag({ featureId, propertyId, tagId });

        if (!tag) {
          return;
        }

        if (target.name === "text") {
          tag.text = target.value;
        }
        if (target.name === "link") {
          tag.url = target.value;
        }

        setFeaturesList([...featuresList]);
      };
    },
    [featuresList, setFeaturesList, findTag]
  );

  const handleChangeColor = useCallback(
    ({
      featureId,
      propertyId,
      tagId,
      colorProp,
    }: {
      featureId: string;
      propertyId: string;
      tagId: string;
      colorProp: keyof IColoredTag;
    }) => {
      return (color: ColorResult) => {
        const tag = findTag({ featureId, propertyId, tagId });

        if (!tag) {
          return;
        }

        tag[colorProp] = color.hex;

        setFeaturesList([...featuresList]);
      };
    },
    [findTag, setFeaturesList, featuresList]
  );

  const { id: propertyId, content: tags } = property;
  const { id: featureId } = feature;

  return (
    <Accordion className="mb-3">
      {(tags as IColoredTag[]).map((tag) => {
        const { id: tagId } = tag;
        return (
          <Accordion.Item eventKey={tagId} key={tagId}>
            <Accordion.Header>{tag.text || "Tag Sem Texto"}</Accordion.Header>
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
              <Row className="mb-3">
                <Col>
                  <InputGroup.Text>Cor de fundo</InputGroup.Text>
                  <div className="mb-3 color-picker-container">
                    <CirclePicker
                      color={tag.backgroundColor}
                      colors={[
                        "#E74F3A",
                        "#308957",
                        "#F6C53A",
                        "#794488",
                        "#215282",
                        "#5F1823",
                        "#A42928",
                        "#4A2B21",
                        "#8C8F8F",
                        "#EDEDE2",
                        "#398BB9",
                      ]}
                      onChangeComplete={handleChangeColor({
                        featureId,
                        propertyId,
                        tagId,
                        colorProp: "backgroundColor",
                      })}
                    ></CirclePicker>
                  </div>
                </Col>
                <Col>
                  <InputGroup.Text>Cor do texto</InputGroup.Text>
                  <div className="mb-3 color-picker-container">
                    <CirclePicker
                      color={tag.textColor}
                      colors={["#000000", "#FFFFFF"]}
                      onChangeComplete={handleChangeColor({
                        featureId,
                        propertyId,
                        tagId,
                        colorProp: "textColor",
                      })}
                    ></CirclePicker>
                  </div>
                </Col>
              </Row>

              <div className="mb-3"></div>

              <Button
                className="mt-2"
                variant="danger"
                onClick={handleRemoveButtonClick({
                  featureId,
                  propertyId,
                  tagId,
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
