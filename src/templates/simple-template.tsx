import './styles.css';
export interface IDownloadSectionButton {
  text: string;
  url: string;
}

export interface IDownloadSection {
  title: string;
  buttons: IDownloadSectionButton[]
}

export function SimpleTemplate({
  mainParagraphText,
  secondaryParagraphText,
  footerTitle,
  footerParagraphTexts,
  downloadSections,
}: {
  mainParagraphText?: string;
  secondaryParagraphText?: string;
  footerTitle?: string;
  footerParagraphTexts?: string[];
  downloadSections?: IDownloadSection[];
}) {
  return (
    <div className="container">
      <div className="texto-descr-produto">
        <p></p>
        {downloadSections?.map((section) => (
          <>
            <h3 style={{ textAlign: "center" }}>
              {section.title}
            </h3>
          </>
        ))}
        <h3 style={{ textAlign: "center" }}>
          Guia de Peças / Mais Informações
        </h3>
        <p style={{ textAlign: "center" }}>
          <a
            className="btn btn-success btn-lg"
            href="https://cdn.awsli.com.br/1887/1887835/arquivos/L-1547-9303-_RevB_10-15__PT-BR.pdf"
            type="button"
          >
            DOWNLOAD GUIA DE PEÇAS 9303
          </a>
        </p>
        <p> </p>
        <p style={{ textAlign: "center" }}>
          <a
            className="btn btn-success btn-lg"
            href="https://cdn.awsli.com.br/1887/1887835/arquivos/L-1546-9306-_RevC_1-16_PT-BR.pdf"
            type="button"
          >
            DOWNLOAD GUIA DE PEÇAS 9306
          </a>
        </p>
        <p> </p>
        <h3 style={{ textAlign: "center" }}>Manual da Bomba (Inglês)</h3>
        <p style={{ textAlign: "center" }}>
          <a
            className="btn btn-success btn-lg"
            href="https://cdn.awsli.com.br/1887/1887835/arquivos/L-0325C-9303C-SP-Centrifugal-Pump-Parts-Breakdown-1.pdf"
            type="button"
          >
            DOWNLOAD MANUAL DA BOMBA 9303
          </a>
        </p>
        <p> </p>
        <p style={{ textAlign: "center" }}>
          <a
            className="btn btn-success btn-lg"
            href="https://cdn.awsli.com.br/1887/1887835/arquivos/L-1546C-9306C-Series-Centrifugal-Pump-Parts-Breakdown-1.pdf"
            type="button"
          >
            DOWNLOAD MANUAL DA BOMBA 9306
          </a>
        </p>
      </div>
      <div className="tab-content">
        <div className="texto-descr-produto">
          <p>
            {mainParagraphText ?? ""}
          </p>
          <p> </p>
          <ul className="abas-custom tab-content">
            <li className="abas-custom tab-content">
              <strong>Conteúdo do Reparo:</strong>
            </li>
            <li className="abas-custom tab-content">
              (1) 1 Selo Mecânico Premium LifeGuard, em Carbeto de Silício
            </li>
            <li className="abas-custom tab-content">
              <strong>Compatível com:</strong>
            </li>
            <li className="abas-custom tab-content">
              Bombas Centrífugas HYPRO das Séries:
            </li>
            <li className="abas-custom tab-content">9200</li>
            <li className="abas-custom tab-content">
              9300, incluindo 9303 e 9306
            </li>
            <li className="abas-custom tab-content">9304</li>
          </ul>
          <h4>Características</h4>
          <ul className="abas-custom tab-content">
            <li className="abas-custom tab-content">
              Vida útil 8 vezes superior sob produtos abrasivos.
            </li>
            <li className="abas-custom tab-content">
              Design exclusivo de pressão controlada.
            </li>
            <li className="abas-custom tab-content">
              Duas faces em Carbeto de Silício.
            </li>
            <li className="abas-custom tab-content">
              Redução da necessidade de reposição.
            </li>
            <li className="abas-custom tab-content">
              Upgrade disponível para bombas de Ferro Fundido
            </li>
          </ul>
          <p>
            {secondaryParagraphText ?? ""}
          </p>
          <h4>{footerTitle}</h4>
          {footerParagraphTexts?.map((paragraphText: string) => (
            <p>{paragraphText}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
