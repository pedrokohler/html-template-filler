import React, { useState } from "react";
import { Form } from "react-bootstrap";
import DownloadSections from "./download-sections";
import FooterParagraphs from "./footer-paragraphs";

function SimpleTemplateForm() {
  const [mainDescription, setMainDescription] = useState("");
  const [footerTitle, setFooterTitle] = useState("");
  const [secondaryDescription, setSecondaryDescription] = useState("");

  return (
    <Form>
      <DownloadSections></DownloadSections>
      <Form.Group className="mb-3">
        <Form.Label>Descrição Principal</Form.Label>
        <Form.Control
          as="textarea"
          value={mainDescription}
          onChange={(e) => setMainDescription(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Descrição Secundária</Form.Label>
        <Form.Control
          as="textarea"
          value={secondaryDescription}
          onChange={(e) => setSecondaryDescription(e.target.value)}
        />
      </Form.Group>

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
