import React from "react";
import { Accordion } from "react-bootstrap";
import { SpecialPropertyType } from "../../../../enums";

import { IFeatureWithSpecialProperty } from "../../../../interfaces";
import TextProperty from "./text-properties";

function FeatureProperties({
  featuresList,
  setFeaturesList,
  feature,
}: {
  featuresList: IFeatureWithSpecialProperty[];
  setFeaturesList: React.Dispatch<React.SetStateAction<IFeatureWithSpecialProperty[]>>;
  feature: IFeatureWithSpecialProperty;
}) {
  const { properties } = feature;

  return (
    <Accordion className="mb-3">
      {properties.map((property) => {
        const propertyId = property.id;
        if(property.type === SpecialPropertyType.DEFAULT){
          return (
            <TextProperty
              featuresList={featuresList}
              setFeaturesList={setFeaturesList}
              feature={feature}
              property={property}
            ></TextProperty>
          );
        }else {
          return (
            <span key={propertyId}>Not implemented :(</span>
          )
        }
      })}
    </Accordion>
  );
}
export default FeatureProperties;
