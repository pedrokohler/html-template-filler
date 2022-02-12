import React, { useCallback } from "react";
import { Accordion, Button, Form, InputGroup } from "react-bootstrap";

import { IDownloadSection } from "../../../../interfaces";

function DownloadSectionButtons({
  downloadSections,
  setDownloadSections,
  section,
}: {
  downloadSections: IDownloadSection[];
  setDownloadSections: React.Dispatch<React.SetStateAction<IDownloadSection[]>>;
  section: IDownloadSection;
}) {
  const handleRemoveButtonClick = useCallback(
    ({ sectionId, buttonId }) => {
      return () => {
        const section = downloadSections.find(
          (section) => section.id === sectionId
        );

        if (!section) {
          return;
        }

        const buttons = section.buttons.filter(
          (button) => button.id !== buttonId
        );
        section.buttons = buttons;

        setDownloadSections([...downloadSections]);
      };
    },
    [downloadSections, setDownloadSections]
  );

  const handleUpdateButton = useCallback(
    ({ sectionId, buttonId }) => {
      // @ts-ignore
      return (e) => {
        const { target } = e;
        const section = downloadSections.find(
          (section) => section.id === sectionId
        );

        if (!section) {
          return;
        }

        const button = section.buttons.find((button) => button.id === buttonId);

        if (!button) {
          return;
        }

        if (target.name === "text") {
          button.text = target.value;
        }
        if (target.name === "link") {
          button.url = target.value;
        }

        setDownloadSections([...downloadSections]);
      };
    },
    [downloadSections, setDownloadSections]
  );

  const { buttons, id: sectionId } = section;

  return (
    <Accordion className="mb-3">
      {buttons.map((button) => {
        const buttonId = button.id;
        return (
          <Accordion.Item eventKey={buttonId}>
            <Accordion.Header>
              {button.text || "Botão Sem Texto"}
            </Accordion.Header>
            <Accordion.Body>
              <InputGroup className="mb-3">
                <InputGroup.Text>Texto</InputGroup.Text>
                <Form.Control
                  name="text"
                  as="input"
                  value={button.text}
                  onChange={handleUpdateButton({
                    sectionId,
                    buttonId,
                  })}
                />
              </InputGroup>
              <InputGroup className="mb-3">
                <InputGroup.Text>Link</InputGroup.Text>
                <Form.Control
                  name="link"
                  as="input"
                  type="url"
                  value={button.url}
                  onChange={handleUpdateButton({
                    sectionId,
                    buttonId,
                  })}
                />
              </InputGroup>
              <Button
                className="mt-2"
                variant="danger"
                onClick={handleRemoveButtonClick({
                  sectionId,
                  buttonId,
                })}
              >
                Remover
              </Button>
            </Accordion.Body>
          </Accordion.Item>
        );
      })}
    </Accordion>
  );
}
export default DownloadSectionButtons;
