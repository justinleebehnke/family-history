import React, { ReactElement, useState } from "react";
import { Container } from "react-bootstrap";
import "./App.css";
import people from "./data/people.json";
import Person from "./Person";
import ListGroup from "react-bootstrap/ListGroup";

function App(): ReactElement {
  const [userId, setUser] = useState<number>();

  return (
    <Container className="App">
      {!!userId && <Person userId={userId} clearPersonId={() => setUser(0)} />}
      {!userId && (
        <ListGroup>
          {people.map((person) => {
            return (
              <ListGroup.Item
                key={person.id}
                onClick={() => setUser(person.id)}
              >
                {person.name}
              </ListGroup.Item>
            );
          })}
        </ListGroup>
      )}
    </Container>
  );
}

export default App;
