import { v4 as randomUUID } from 'uuid';
import { ParagraphWithLinks, TextOrLinkType } from '../templates';

export function processUnformattedDescription(unformattedParagraph: string): ParagraphWithLinks {
  const marker = randomUUID();
  const urlPattern = /\[([^()[\]]*)\]\(([^()[\]]*)\)/gm;
  const splitPattern = new RegExp(`(?=${marker})|(?<=${marker})`);

  const splitTextWithMarkedLinks = unformattedParagraph.replace(urlPattern, marker).split(splitPattern);
  const urlMatches = unformattedParagraph.matchAll(urlPattern);

  const processedDescription = splitTextWithMarkedLinks.map((textOrMarker) => {
    if(textOrMarker === marker){
      const [, text, url] = urlMatches.next().value;
      return {
        id: randomUUID(),
        type: TextOrLinkType.LINK,
        value: text,
        url,
      }
    }

    return {
      id: randomUUID(),
      type: TextOrLinkType.TEXT,
      value: textOrMarker,
    }
  });
  return processedDescription;
}