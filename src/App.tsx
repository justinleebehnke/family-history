import React, { ReactElement } from "react";
import { Container } from "react-bootstrap";
import "./App.css";
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
  return (
    <Container className="App">
      <h3>Family History Research Project</h3>
      <h5>Welcome! Come and see!</h5>
      <p>
        To view the research work that I have done so far, you can follow these
        steps:
      </p>
      <ol>
        <li>
          Create a free{" "}
          <a href="https://www.familysearch.org/en/">FamilySearch</a> account
        </li>
        <li>
          Use FamilySearch to locate an ancestor in the tree from this list of
          my grandparents and Mina's grandparents. These people are visible in
          FamilySearch because they are deceased.
          <ul>
            <li>Fred Behnke Sr. (L669-MQC)</li>
            <li>Erna Behnke (Gruenhagen) (LDYD-DVP)</li>
            <li>Bert Neisen (LDYD-D5D)</li>
            <li>Betty Neisen (Savage) (LFRS-GP8)</li>
            <li>Flavio Monroy Ramirez (LHFV-RXV)</li>
            <li>Silvina Cabrera Montano (L5ZS-FV6)</li>
            <li>Cirenio Figueroa Solorio (L5ZS-CR9)</li>
            <li>Maria Del Carmen Perez Ramirez (L2Y9-HTS)</li>
          </ul>
        </li>
      </ol>
      <p>
        If you would like to link yourself in your FamilySearch account to my
        family tree, you'll have to add your relationships so that FamilySearch
        can see how you fit into the tree.
      </p>
      <p>
        Please note that I have likely made mistakes and I am continuously
        working to improve the information posted here. If you have a correction
        or a suggestion, but don't feel comfortable doing it yourself, please
        reach out to me, otherwise feel free to make the corrections in the
        family tree yourself using your account. When you make a change, please
        attach/upload a source if you can, it makes it much easier for us all to
        communicate.
      </p>

      <p>Call or text me (Justin): 952-873-9729</p>

      <h3>Phone Interview Recordings</h3>
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
    </Container>
  );
}

export default App;
