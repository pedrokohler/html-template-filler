import React, { useState } from "react";
import { Form } from "react-bootstrap";
import DownloadSections from "./download-sections";
import FeaturesSection from "./features";
import FooterParagraphs from "./footer-paragraphs";

function SimpleTemplateForm() {
  const [mainDescription, setMainDescription] = useState("");
  const [footerTitle, setFooterTitle] = useState("");
  const [secondaryDescription, setSecondaryDescription] = useState("");

  return (
    <Form>
      <h4>Seções de Download</h4>
      <DownloadSections></DownloadSections>
      <hr></hr>

      <h4>Seções de Características</h4>
      <FeaturesSection></FeaturesSection>
      <hr></hr>

      <h4>Descrições</h4>
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

      <h4>Rodapé</h4>
      <Form.Group className="mb-3">
        <Form.Label>Título do rodapé</Form.Label>
        <Form.Control
          as="input"
          value={footerTitle}
          onChange={(e) => setFooterTitle(e.target.value)}
        />
      </Form.Group>
      <FooterParagraphs></FooterParagraphs>
    </Form>
  );
}
export default SimpleTemplateForm;
