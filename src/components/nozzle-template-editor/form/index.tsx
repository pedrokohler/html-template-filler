import React from "react";
import { Form } from "react-bootstrap";
import {
  IDownloadSection,
  IFeatureWithSpecialProperty,
  IGenericText,
  IUrlWithText,
  ParagraphWithLinks,
} from "../../../interfaces";
import DescriptionParagraphField from "./description-paragraph";
import DownloadSections from "./download-sections";
import DescriptionBulletPointsSection from "./description-bullet-points-section";
import TagsSection from "./tag-sections";
import FeaturesSection from "./features";

function NozzleTemplateForm({
  descriptionBulletPoints,
  tags,
  downloadSections,
  featuresList,
  setDescriptionParagraph,
  setDescriptionBulletPoints,
  setTags,
  setDownloadSections,
  setFeaturesList,
}: {
  descriptionBulletPoints: IGenericText[];
  tags: IUrlWithText[];
  downloadSections: IDownloadSection[];
  featuresList: IFeatureWithSpecialProperty[];
  setDescriptionParagraph: React.Dispatch<
    React.SetStateAction<ParagraphWithLinks>
  >;
  setDescriptionBulletPoints: React.Dispatch<
    React.SetStateAction<IGenericText[]>
  >;
  setTags: React.Dispatch<React.SetStateAction<IUrlWithText[]>>;
  setDownloadSections: React.Dispatch<React.SetStateAction<IDownloadSection[]>>;
  setFeaturesList: React.Dispatch<React.SetStateAction<IFeatureWithSpecialProperty[]>>;
}) {
  return (
    <Form>
      <h5>Seções de Download</h5>
      <DownloadSections
        downloadSections={downloadSections}
        setDownloadSections={setDownloadSections}
      ></DownloadSections>
      <hr></hr>

      <h5>Descrições</h5>
      <DescriptionParagraphField
        setDescriptionParagraph={setDescriptionParagraph}
      ></DescriptionParagraphField>

      <DescriptionBulletPointsSection
        descriptionBulletPoints={descriptionBulletPoints}
        setDescriptionBulletPoints={setDescriptionBulletPoints}
      ></DescriptionBulletPointsSection>
      <hr></hr>

      <h5>Seções de Características</h5>
      <FeaturesSection
        featuresList={featuresList}
        setFeaturesList={setFeaturesList}
      ></FeaturesSection>
      <hr></hr>

      <h5>Tags</h5>
      <TagsSection tags={tags} setTags={setTags}></TagsSection>
    </Form>
  );
}
export default NozzleTemplateForm;
