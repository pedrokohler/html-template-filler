import React, { useCallback } from "react";
import { Accordion, Button, Form, InputGroup } from "react-bootstrap";

import { IFeature } from "../../../../interfaces";

function FeatureProperties({
  featuresList,
  setFeaturesList,
  feature,
}: {
  featuresList: IFeature[];
  setFeaturesList: React.Dispatch<React.SetStateAction<IFeature[]>>;
  feature: IFeature;
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

        const property = section.properties.find((property) => property.id === propertyId);

        if (!property) {
          return;
        }

        property.text = target.value;

        setFeaturesList([...featuresList]);
      };
    },
    [featuresList, setFeaturesList]
  );

  const { properties, id: featureId } = feature;

  return (
    <Accordion className="mb-3">
      {properties.map((property) => {
        const propertyId = property.id;
        return (
          <Accordion.Item eventKey={propertyId} key={propertyId}>
            <Accordion.Header>
              {property.text || "Propriedade Sem Texto"}
            </Accordion.Header>
            <Accordion.Body>
              <InputGroup className="mb-3">
                <InputGroup.Text>Texto</InputGroup.Text>
                <Form.Control
                  name="text"
                  as="input"
                  value={property.text}
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
      })}
    </Accordion>
  );
}
export default FeatureProperties;
