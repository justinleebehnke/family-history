import React, { ReactElement } from "react";
import { CloseButton, Container, Card, Accordion } from "react-bootstrap";
import "./App.css";
import people from "./data/people.json";
import Source from "./Source";

type Props = {
  userId: number;
  clearPersonId: () => void;
};

function Person({ userId, clearPersonId }: Props): ReactElement {
  const person = people.find((p) => p.id === userId);

  if (!person) {
    clearPersonId();
    return <div></div>;
  }

  return (
    <Container>
      <div className="split">
        <Card style={{ maxWidth: "500px" }}>
          <Card.Img variant="top" src={person.profilePicture}></Card.Img>
          <Card.Body>
            <Card.Title>{person.name}</Card.Title>
          </Card.Body>
        </Card>
        <CloseButton onClick={() => clearPersonId()} />
      </div>

      {person.assertions.map((assertion) => {
        return (
          <Card key={assertion.title + assertion.date}>
            <Card.Header>{assertion.title}</Card.Header>
            <Card.Body>
              <Card.Title>{assertion.date}</Card.Title>
              <Card.Subtitle>{assertion.location}</Card.Subtitle>
              <hr></hr>
              <h6>Source{assertion.sourceIds.length === 1 ? "" : "s"}:</h6>
              <Accordion>
                {assertion.sourceIds.map((sourceId) => (
                  <Source key={sourceId} sourceId={sourceId} />
                ))}
              </Accordion>
            </Card.Body>
          </Card>
        );
      })}
    </Container>
  );
}

export default Person;
