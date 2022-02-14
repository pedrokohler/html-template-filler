import React, { useState } from "react";
import { renderToString } from "react-dom/server";
import { html as beautifyHtml } from "js-beautify";
import { Container, Row } from "react-bootstrap";

import { SimpleTemplate } from "../../templates";
import { IDownloadSection, IFeature, IFooterParagraph } from "../../interfaces";
import SimpleTemplateForm from "./form";
import Footer from "../footer";

function EditSimpleTemplate() {
  const [footerParagraphs, setFooterParagraphs] = useState<IFooterParagraph[]>(
    []
  );
  const [featuresList, setFeaturesList] = useState<IFeature[]>([]);
  const [downloadSections, setDownloadSections] = useState<IDownloadSection[]>(
    []
  );
  const [mainDescription, setMainDescription] = useState("");
  const [footerTitle, setFooterTitle] = useState("");
  const [secondaryDescription, setSecondaryDescription] = useState("");

  const FilledTemplate = () => (
    <>
      <SimpleTemplate
        downloadSections={downloadSections}
        mainParagraphText={mainDescription}
        secondaryParagraphText={secondaryDescription}
        footerTitle={footerTitle}
        footerParagraphs={footerParagraphs}
        featuresList={featuresList}
      ></SimpleTemplate>
    </>
  );
  const prettifiedTemplateHtml = beautifyHtml(
    renderToString(<FilledTemplate></FilledTemplate>)
  );

  return (
    <>
      <Container>
        <h1 className="my-4">Outros Produtos</h1>
        <Row className="my-2">
          <SimpleTemplateForm
            footerParagraphs={footerParagraphs}
            setFooterParagraphs={setFooterParagraphs}
            downloadSections={downloadSections}
            setDownloadSections={setDownloadSections}
            featuresList={featuresList}
            setFeaturesList={setFeaturesList}
            mainDescription={mainDescription}
            setMainDescription={setMainDescription}
            footerTitle={footerTitle}
            setFooterTitle={setFooterTitle}
            secondaryDescription={secondaryDescription}
            setSecondaryDescription={setSecondaryDescription}
          ></SimpleTemplateForm>
        </Row>
      </Container>

      <Footer template={prettifiedTemplateHtml}>
        <FilledTemplate></FilledTemplate>
      </Footer>
    </>
  );
}
export default EditSimpleTemplate;
