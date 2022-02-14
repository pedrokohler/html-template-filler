import React, { useEffect, useRef, useState } from "react";
import { Form, Overlay, Tooltip } from "react-bootstrap";
import { processUnformattedDescription } from "../../../../helpers/process-unformatted-description";
import { ParagraphWithLinks } from "../../../../templates";

function DescriptionParagraphField({
  setDescriptionParagraph,
}: {
  setDescriptionParagraph: React.Dispatch<
    React.SetStateAction<ParagraphWithLinks>
  >;
}) {
  const [showToolTip, setShowTooltip] = useState(false);
  const [unformattedDescription, setUnformattedDescription] = useState("");
  const tooltipTarget = useRef(null);

  useEffect(() => {
    const paragraphWithLinks = processUnformattedDescription(unformattedDescription);
    setDescriptionParagraph(paragraphWithLinks);
  }, [unformattedDescription, setDescriptionParagraph])
  return (
    <>
      <Form.Group className="mb-3">
        <Form.Label
          ref={tooltipTarget}
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
        >
          Descrição Principal
        </Form.Label>
        <Form.Control
          as="textarea"
          value={unformattedDescription}
          onChange={(e) => setUnformattedDescription(e.target.value)}
        />
      </Form.Group>
      <Overlay
        target={tooltipTarget.current}
        show={showToolTip}
        placement="right"
      >
        {(props) => (
          <Tooltip {...props}>
            Aceita links no formato
            <br />
            [texto](link)
          </Tooltip>
        )}
      </Overlay>
    </>
  );
}
export default DescriptionParagraphField;
