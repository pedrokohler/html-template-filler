import "./styles.css";
export interface IDownloadSectionButton {
  text: string;
  url: string;
}
export interface IDownloadSection {
  title: string;
  buttons: IDownloadSectionButton[];
}

export interface IFeaturesList {
  title: string;
  properties: string[];
}

export function SimpleTemplate({
  mainParagraphText,
  secondaryParagraphText,
  footerTitle,
  footerParagraphTexts,
  downloadSections,
  featuresList,
}: {
  mainParagraphText?: string;
  secondaryParagraphText?: string;
  footerTitle?: string;
  footerParagraphTexts?: string[];
  downloadSections?: IDownloadSection[];
  featuresList?: IFeaturesList[];
}) {
  return (
    <div className="container">
      <div className="texto-descr-produto">
        {downloadSections?.map((section) => (
          <>
            <p></p>
            <h3 style={{ textAlign: "center" }}>{section.title}</h3>
            {section.buttons.map((button) => (
              <>
                <p></p>
                <p style={{ textAlign: "center" }}>
                  <a
                    className="btn btn-success btn-lg"
                    href={button.url}
                    type="button"
                  >
                    {button.text}
                  </a>
                </p>
              </>
            ))}
          </>
        ))}
      </div>
      <div className="tab-content">
        <div className="texto-descr-produto">
          <p>{mainParagraphText ?? ""}</p>
          <p></p>
          {featuresList?.map((feature) => (
            <>
              <h4>{feature.title}</h4>
              <ul className="abas-custom tab-content">
                {feature.properties.map((property) => (
                  <li className="abas-custom tab-content"><strong>{property}</strong></li>
                ))}
              </ul>
            </>
          ))}
          <p>{secondaryParagraphText ?? ""}</p>
          <h4>{footerTitle}</h4>
          {footerParagraphTexts?.map((paragraphText: string) => (
            <p>{paragraphText}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
