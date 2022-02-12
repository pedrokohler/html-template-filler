import React from "react";
import { renderToString } from "react-dom/server";
import { html as beautifyHtml } from "js-beautify";
import { Container, Row } from "react-bootstrap";

import { SimpleTemplate } from "../../templates";
import {
  IDownloadSection,
  IFeaturesList,
  IFooterParagraph,
} from "../../interfaces";
import SimpleTemplateForm from "./form";
import Footer from "../footer";

const downloadSections: IDownloadSection[] = [
  {
    id: "1",
    title: "Guia de Peças / Mais Informações",
    buttons: [
      {
        id: "1",
        text: "DOWNLOAD GUIA DE PEÇAS 9303",
        url: "/",
      },
      {
        id: "2",
        text: "DOWNLOAD GUIA DE PEÇAS 9306",
        url: "/",
      },
    ],
  },
  {
    id: "2",
    title: "Manual da Bomba (Inglês)",
    buttons: [
      {
        id: "1",
        text: "DOWNLOAD MANUAL DA BOMBA 9303",
        url: "/",
      },
      {
        id: "2",
        text: "DOWNLOAD MANUAL DA BOMBA 9306",
        url: "/",
      },
    ],
  },
];

const footerParagraphs: IFooterParagraph[] = [
  {
    id: "1",
    text: 'OPERAÇÃO A SECO DANIFICARÁ O SELO MECÂNICO E INVALIDARÁ A GARANTIA DO PRODUTO. EVITE "RODAR A SECO"!',
  },
];

const featuresList: IFeaturesList[] = [
  {
    id: "1",
    title: "Conteúdo do Reparo:",
    properties: [
      {
        id: "1",
        text: "(1) 1 Selo Mecânico Premium LifeGuard, em Carbeto de Silício",
      },
      {
        id: "2",
        text: "(1) O-RING",
      },
    ],
  },
  {
    id: "2",
    title: "Compatível Com:",
    properties: [
      { text: "BOMBAS CENTRÍFUGAS HYPRO DAS SÉRIES:", id: "1" },
      { text: "9200", id: "2" },
      { text: "9300, INCLUINDO 9303 E 9306", id: "3" },
      { text: "9304", id: "4" },
    ],
  },
  {
    id: "3",
    title: "Características:",
    properties: [
      { text: "VIDA ÚTIL 8 VEZES SUPERIOR SOB PRODUTOS ABRASIVOS.", id: "1" },
      { text: "DUAS FACES EM CARBETO DE SILÍCIO.", id: "2" },
      { text: "REDUÇÃO DA NECESSIDADE DE REPOSIÇÃO.", id: "3" },
      { text: "UPGRADE DISPONÍVEL PARA BOMBAS DE FERRO FUNDIDO", id: "4" },
    ],
  },
];

function EditSimpleTemplate() {
  const FilledTemplate = () => (
    <>
      <SimpleTemplate
        downloadSections={downloadSections}
        mainParagraphText="HYPRO é uma marca americana líder no setor que fabrica bombas desde 1947, qualidade testada e comprovada. As bombas centrífugas HYPRO são utilizadas pela maioria dos fabricantes de máquinas agrícolas no Brasil e no mundo."
        secondaryParagraphText="A dureza do Carbeto de Silício se aproxima da do diamante e permite que a vedação tenha uma vida útil de serviço excelente ao bombear soluções abrasivas. Atonge até 8x mais durabilidade quando comparado com o reparo em cerâmica. Os flocos de grafite de carbono são incorporados nas faces de carbeto de silício para reduzir o atrito e proporcionar capacidade de sobrevivência a choque térmico e operação a seco acidentais."
        footerTitle="QUER GARANTIR A VIDA ÚTIL DE SUA BOMBA HYPRO?"
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
          <SimpleTemplateForm></SimpleTemplateForm>
        </Row>
      </Container>

      <Footer template={prettifiedTemplateHtml}>
        <FilledTemplate></FilledTemplate>
      </Footer>
    </>
  );
}
export default EditSimpleTemplate;
