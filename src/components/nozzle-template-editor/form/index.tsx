import React from "react";
import { Form } from "react-bootstrap";
import {
  IDownloadSection,
  IFeatureWithTitle,
  IGenericText,
  IUrlWithText,
  ParagraphWithLinks,
} from "../../../interfaces";
import DescriptionParagraphField from "./description-paragraph";
import DownloadSections from "./download-sections";
import DescriptionBulletPointsSection from "./description-bullet-points-section";
import TagsSection from "./tag-sections";

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
  featuresList: IFeatureWithTitle[];
  setDescriptionParagraph: React.Dispatch<
    React.SetStateAction<ParagraphWithLinks>
  >;
  setDescriptionBulletPoints: React.Dispatch<
    React.SetStateAction<IGenericText[]>
  >;
  setTags: React.Dispatch<React.SetStateAction<IUrlWithText[]>>;
  setDownloadSections: React.Dispatch<React.SetStateAction<IDownloadSection[]>>;
  setFeaturesList: React.Dispatch<React.SetStateAction<IFeatureWithTitle[]>>;
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

      <h5>Tags</h5>
      <TagsSection tags={tags} setTags={setTags}></TagsSection>
      <hr></hr>

      {/*
      <h5>Seções de Características</h5>
      <FeaturesSection
        featuresList={featuresList}
        setFeaturesList={setFeaturesList}
      ></FeaturesSection>
      <hr></hr>


      <Form.Group className="mb-5">
        <Form.Label>Descrição Secundária</Form.Label>
        <Form.Control
          as="textarea"
          value={secondaryDescription}
          onChange={(e) => setSecondaryDescription(e.target.value)}
        />
      </Form.Group>
      <hr></hr>

      <h5>Rodapé</h5>
      <Form.Group className="mb-3">
        <Form.Label>Título do rodapé</Form.Label>
        <Form.Control
          as="input"
          value={footerTitle}
          onChange={(e) => setFooterTitle(e.target.value)}
        />
      </Form.Group>
      <FooterParagraphs
        footerParagraphs={footerParagraphs}
        setFooterParagraphs={setFooterParagraphs}
      ></FooterParagraphs> */}
    </Form>
  );
}
export default NozzleTemplateForm;
