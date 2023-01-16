import React, { ReactElement, useState } from "react";
import { Container } from "react-bootstrap";
import "./App.css";
import people from "./data/people.json";
import Person from "./Person";
import ListGroup from "react-bootstrap/ListGroup";

const interviews = [
  {
    date: "7 Jan 2023",
    interviewee: "Robert Behnke",
    downloadable: "media/BobBehnke-PhoneInterview-Jan7th2023.txt",
  },
  {
    date: "10 Jan 2023",
    interviewee: "Delaine Richards",
    downloadable: "media/DelaineDorisRichards-Interview10Jan2023.pdf",
  },
];

function App(): ReactElement {
  const [userId, setUser] = useState<number>();

  return (
    <Container className="App">
      {!!userId && <Person userId={userId} clearPersonId={() => setUser(0)} />}
      {!userId && (
        <div>
          <h3>People Pages</h3>
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
          <h3>Interviews</h3>
          <ListGroup>
            {interviews.map((interview) => {
              return (
                <ListGroup.Item key={interview.interviewee + interview.date}>
                  <a href={interview.downloadable} download>
                    {interview.interviewee + " " + interview.date}
                  </a>
                </ListGroup.Item>
              );
            })}
          </ListGroup>
        </div>
      )}
    </Container>
  );
}

export default App;
