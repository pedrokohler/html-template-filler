import { SpecialPropertyType, TextOrLinkType } from "../enums";
import {
  IColoredTag,
  IDownloadSection,
  IFeatureWithTitle,
  IGenericText,
  ITag,
  ParagraphWithLinks
} from "../interfaces";

export function NozzleTemplate({
  descriptionParagraph,
  descriptionBulletPoints,
  tags,
  downloadSections,
  featuresList,
}: {
  descriptionParagraph?: ParagraphWithLinks;
  descriptionBulletPoints?: IGenericText[];
  tags?: ITag[];
  downloadSections?: IDownloadSection[];
  featuresList?: IFeatureWithTitle[];
}) {
  return (
    <div className="product-charity">
      <div className="abas-custom">
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
      </div>
      <div className="texto-descr-produto">
        <p>
          {descriptionParagraph?.map((textOrLink) => {
            if (textOrLink.type === TextOrLinkType.TEXT) {
              return textOrLink.value;
            } else {
              return (
                <a href={textOrLink?.url} key={textOrLink.id}>
                  {textOrLink.value}
                </a>
              );
            }
          })}
        </p>
        <div className="disc">
          {descriptionBulletPoints?.map((bulletPoint) => (
            <p key={bulletPoint.id}>{bulletPoint.text}</p>
          ))}
        </div>
      </div>
      <div className="texto-descr-produto">
        {featuresList?.map((feature) => (
          <div key={feature.id}>
            <h2>{feature.title}</h2>
            <ul className="abas-custom tab-content">
              {feature.properties.map((specialProperty) => {
                const { type } = specialProperty;

                if (type === SpecialPropertyType.DEFAULT) {
                  const content = specialProperty.content as string;
                  return (
                    <li key={specialProperty.id}>
                      <strong>{`${specialProperty.title}: `}</strong>
                      {content}
                    </li>
                  );
                }

                const tags = specialProperty.content as IColoredTag[];
                return (
                  <li key={specialProperty.id}>
                    {specialProperty.title}
                    <ul className="keywords-tags">
                      {tags.map((tag) => (
                        <li
                          key={tag.id}
                          style={{
                            backgroundColor: tag.backgroundColor,
                          }}
                        >
                          <span
                            style={{
                              color: tag.textColor,
                            }}
                          >
                            <a
                              href={tag.url}
                              style={{
                                color: tag.textColor,
                              }}
                            >
                              {tag.text}
                            </a>
                          </span>
                        </li>
                      ))}
                    </ul>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
      {tags && tags.length > 0 && (
        <div className="texto-descr-produto">
          <h2>
            <strong>Tags</strong>
          </h2>
          <ul className="keywords-tags">
            {tags?.map((tag) => (
              <li id={tag.id}>
                <strong>
                  <a href={tag.url}>
                    {tag.text}
                  </a>
                </strong>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
