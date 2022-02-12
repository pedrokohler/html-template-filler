import React from "react";
import { renderToString } from "react-dom/server";
import { html as beautifyHtml } from "js-beautify";
import {
  Container,
  Row,
} from "react-bootstrap";

import { SimpleTemplate } from "../../templates";
import { IDownloadSection, IFeaturesList } from "../../interfaces";
import SimpleTemplateForm from "./form";
import Footer from "../footer";

const downloadSections: IDownloadSection[] = [
  {
    title: "Guia de Peças / Mais Informações",
    buttons: [
      {
        text: "DOWNLOAD GUIA DE PEÇAS 9303",
        url: "/",
      },
      {
        text: "DOWNLOAD GUIA DE PEÇAS 9306",
        url: "/",
      },
    ],
  },
  {
    title: "Manual da Bomba (Inglês)",
    buttons: [
      {
        text: "DOWNLOAD MANUAL DA BOMBA 9303",
        url: "/",
      },
      {
        text: "DOWNLOAD MANUAL DA BOMBA 9306",
        url: "/",
      },
    ],
  },
];

const footerParagraphTexts = [
  'OPERAÇÃO A SECO DANIFICARÁ O SELO MECÂNICO E INVALIDARÁ A GARANTIA DO PRODUTO. EVITE "RODAR A SECO"!',
];

const featuresList: IFeaturesList[] = [
  {
    title: "Conteúdo do Reparo:",
    properties: [
      "(1) 1 Selo Mecânico Premium LifeGuard, em Carbeto de Silício",
      "(1) O-RING",
    ],
  },
  {
    title: "Compatível Com:",
    properties: [
      "BOMBAS CENTRÍFUGAS HYPRO DAS SÉRIES:",
      "9200",
      "9300, INCLUINDO 9303 E 9306",
      "9304",
    ],
  },
  {
    title: "Características:",
    properties: [
      "VIDA ÚTIL 8 VEZES SUPERIOR SOB PRODUTOS ABRASIVOS.",
      "DUAS FACES EM CARBETO DE SILÍCIO.",
      "REDUÇÃO DA NECESSIDADE DE REPOSIÇÃO.",
      "UPGRADE DISPONÍVEL PARA BOMBAS DE FERRO FUNDIDO",
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
        footerParagraphTexts={footerParagraphTexts}
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
