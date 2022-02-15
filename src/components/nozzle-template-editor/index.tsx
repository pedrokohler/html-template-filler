import React, { useState } from "react";
import { renderToString } from "react-dom/server";
import { html as beautifyHtml } from "js-beautify";
import { Container, Row } from "react-bootstrap";

import { NozzleTemplate } from "../../templates";
import {
  IDownloadSection,
  IFeatureWithSpecialProperty,
  IGenericText,
  IUrlWithText,
  ParagraphWithLinks,
} from "../../interfaces";
import NozzleTemplateForm from "./form";
import Footer from "../footer";

function EditNozzleTemplate() {
  const [featuresList, setFeaturesList] = useState<IFeatureWithSpecialProperty[]>([]);
  const [descriptionParagraph, setDescriptionParagraph] =
    useState<ParagraphWithLinks>([]);
  const [descriptionBulletPoints, setDescriptionBulletPoints] = useState<
    IGenericText[]
  >([]);
  const [tags, setTags] = useState<IUrlWithText[]>([]);
  const [downloadSections, setDownloadSections] = useState<IDownloadSection[]>(
    []
  );

  const FilledTemplate = () => (
    <NozzleTemplate
      descriptionParagraph={descriptionParagraph}
      descriptionBulletPoints={descriptionBulletPoints}
      tags={tags}
      downloadSections={downloadSections}
      featuresList={featuresList}
    />
  );
  const prettifiedTemplateHtml = beautifyHtml(
    renderToString(<FilledTemplate></FilledTemplate>)
  );

  return (
    <>
      <Container>
        <h1 className="my-4">Bicos</h1>
        <Row className="my-2">
          <NozzleTemplateForm
            descriptionBulletPoints={descriptionBulletPoints}
            tags={tags}
            downloadSections={downloadSections}
            featuresList={featuresList}
            setDescriptionParagraph={setDescriptionParagraph}
            setDescriptionBulletPoints={setDescriptionBulletPoints}
            setTags={setTags}
            setDownloadSections={setDownloadSections}
            setFeaturesList={setFeaturesList}
          ></NozzleTemplateForm>
        </Row>
      </Container>

      <Footer template={prettifiedTemplateHtml}>
        <FilledTemplate></FilledTemplate>
      </Footer>
    </>
  );
}
export default EditNozzleTemplate;
