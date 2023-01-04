import React, { ReactElement } from "react";
import { Accordion, Button } from "react-bootstrap";
import "./App.css";
import sources from "./data/sources.json";

type Props = {
  sourceId: number;
};

function Source({ sourceId }: Props): ReactElement {
  const source = sources.find((source) => source.id === sourceId);

  if (!source) {
    return <div></div>;
  }

  return (
    <Accordion.Item eventKey={String(sourceId)}>
      <Accordion.Header>{source.title}</Accordion.Header>
      <Accordion.Body>
        <p>{source.summary}</p>

        <p>
          <small>{source.notes}</small>
        </p>
        <p>
          <a href={source.downloadable} download>
            <Button>Click to Download</Button>
          </a>
        </p>
        <p>
          <small className="text-muted">{source.citation}</small>
        </p>
      </Accordion.Body>
    </Accordion.Item>
  );
}

export default Source;
