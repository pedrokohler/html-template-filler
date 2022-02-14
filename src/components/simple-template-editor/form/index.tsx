import React from "react";
import { Form } from "react-bootstrap";
import {
  IDownloadSection,
  IFeature,
  IFooterParagraph,
} from "../../../interfaces";
import DownloadSections from "./download-sections";
import FeaturesSection from "./features";
import FooterParagraphs from "./footer-paragraphs";

function SimpleTemplateForm({
  footerParagraphs,
  setFooterParagraphs,
  featuresList,
  setFeaturesList,
  downloadSections,
  setDownloadSections,
  mainDescription,
  setMainDescription,
  footerTitle,
  setFooterTitle,
  secondaryDescription,
  setSecondaryDescription,
}: {
  footerParagraphs: IFooterParagraph[];
  featuresList: IFeature[];
  downloadSections: IDownloadSection[];
  setFooterParagraphs: React.Dispatch<React.SetStateAction<IFooterParagraph[]>>;
  setFeaturesList: React.Dispatch<React.SetStateAction<IFeature[]>>;
  setDownloadSections: React.Dispatch<React.SetStateAction<IDownloadSection[]>>;
  mainDescription: string;
  setMainDescription: React.Dispatch<React.SetStateAction<string>>;
  footerTitle: string;
  setFooterTitle: React.Dispatch<React.SetStateAction<string>>;
  secondaryDescription: string;
  setSecondaryDescription: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <Form>
      <h5>Seções de Download</h5>
      <DownloadSections
        downloadSections={downloadSections}
        setDownloadSections={setDownloadSections}
      ></DownloadSections>
      <hr></hr>

      <h5>Seções de Características</h5>
      <FeaturesSection
        featuresList={featuresList}
        setFeaturesList={setFeaturesList}
      ></FeaturesSection>
      <hr></hr>

      <h5>Descrições</h5>
      <Form.Group className="mb-3">
        <Form.Label>Descrição Principal</Form.Label>
        <Form.Control
          as="textarea"
          value={mainDescription}
          onChange={(e) => setMainDescription(e.target.value)}
        />
      </Form.Group>

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
      ></FooterParagraphs>
    </Form>
  );
}
export default SimpleTemplateForm;
