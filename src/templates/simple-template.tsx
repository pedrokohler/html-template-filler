import React from 'react';
import {
  IDownloadSection,
  IFeature,
  IGenericText,
} from "../interfaces";

export function SimpleTemplate({
  mainParagraphText,
  secondaryParagraphText,
  footerTitle,
  footerParagraphs,
  downloadSections,
  featuresList,
}: {
  mainParagraphText?: string;
  secondaryParagraphText?: string;
  footerTitle?: string;
  footerParagraphs?: IGenericText[];
  downloadSections?: IDownloadSection[];
  featuresList?: IFeature[];
}) {
  return (
    <div className="container">
      <div className="texto-descr-produto">
        {downloadSections?.map((section) => (
          <div key={section.id}>
            <p></p>
            <h3 style={{ textAlign: "center" }}>{section.title}</h3>
            {section.buttons.map((button) => (
              <div key={button.id}>
                <p></p>
                <p style={{ textAlign: "center" }}>
                  <a
                    className="btn btn-success btn-lg"
                    href={button.url}
                    target="_blank"
                    type="button"
                    rel="noreferrer"
                  >
                    {button.text}
                  </a>
                </p>
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="tab-content">
        <div className="texto-descr-produto">
          <p>{mainParagraphText ?? ""}</p>
          <p></p>
          {featuresList?.map((feature) => (
            <div key={feature.id}>
              <h4>{feature.title}</h4>
              <ul className="abas-custom tab-content">
                {feature.properties.map((property) => (
                  <li key={property.id} className="abas-custom tab-content">
                    <strong>{property.text}</strong>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <p>{secondaryParagraphText ?? ""}</p>
          <h4>{footerTitle}</h4>
          {footerParagraphs?.map((paragraph: IGenericText) => (
            <p key={paragraph.id}>{paragraph.text}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
