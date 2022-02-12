import React, { useCallback, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { v4 as randomUUID } from "uuid";

import { IDownloadSection } from "../../../interfaces";

function SimpleTemplateForm() {
  const [mainDescription, setMainDescription] = useState("");
  const [footerTitle, setFooterTitle] = useState("");
  const [secondaryDescription, setSecondaryDescription] = useState("");
  const [downloadSections, setDownloadSections] = useState<IDownloadSection[]>(
    []
  );

  const handleAddDownloadSectionClick = useCallback(() => {
    setDownloadSections([
      ...downloadSections,
      {
        id: randomUUID(),
        title: "",
        buttons: [],
      },
    ]);
  }, [downloadSections, setDownloadSections]);

  const handleRemoveDownloadSectionClick = useCallback(
    (id) => {
      return () => {
        const sections = downloadSections.filter(
          (section) => section.id !== id
        );
        setDownloadSections(sections);
      };
    },
    [downloadSections, setDownloadSections]
  );

  const handleUpdateDownloadSection = useCallback(
    (id) => {
      // @ts-ignore
      return (e) => {
        const { target } = e;
        const section = downloadSections.find(
          (section) => section.id === id
        );

        if(!section){
          return;
        }

        if(target.name === "title"){
          section.title= target.value;
        }

        setDownloadSections([...downloadSections]);
      };
    },
    [downloadSections, setDownloadSections]
  );

  return (
    <Form>
      {downloadSections.map((section) => {
        const { id, title } = section;
        return (
          <Form.Group className="mb-3" key={section.id}>
            <Form.Label>Seção de Downloads</Form.Label>
            <Form.Control
              name="title"
              as="input"
              value={title}
              onChange={handleUpdateDownloadSection(id)}
            />
            <Button
              className="mt-2"
              variant="danger"
              onClick={handleRemoveDownloadSectionClick(id)}
            >
              Remover
            </Button>
          </Form.Group>
        );
      })}
      <Row className="mb-5">
        <Col>
          <Button onClick={handleAddDownloadSectionClick}>
            Adicionar Seção de Downloads
          </Button>
        </Col>
      </Row>

      <Form.Group className="mb-3">
        <Form.Label>Descrição Principal</Form.Label>
        <Form.Control
          as="textarea"
          value={mainDescription}
          onChange={(e) => setMainDescription(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Descrição Secundária</Form.Label>
        <Form.Control
          as="textarea"
          value={secondaryDescription}
          onChange={(e) => setSecondaryDescription(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Título do rodapé</Form.Label>
        <Form.Control
          as="input"
          value={footerTitle}
          onChange={(e) => setFooterTitle(e.target.value)}
        />
      </Form.Group>
    </Form>
  );
}
export default SimpleTemplateForm;
