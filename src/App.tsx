import React, { ReactElement } from "react";
import { Container } from "react-bootstrap";
import "./App.css";
import Accordion from "react-bootstrap/Accordion";

const simpleInterviews = [
  {
    interviewee: "Robert Lee Behnke",
    interviews: [
      {
        date: "7 Jan 2023",
        description:
          "Ernst's hospitalization, Dorothea's personality, the location of the Benton Church",
        downloadableFiles: [
          {
            name: "Audio",
            path: "public/media/BobBehnke-PhoneInterview-Jan7th2023.mp3",
          },
          {
            name: "Transcription",
            path: "media/BobBehnke-PhoneInterview-Jan7th2023.txt",
          },
        ],
      },
    ],
  },
  {
    interviewee: "Delaine Doris Richards (Behnke)",
    interviews: [
      {
        date: "10 Jan 2023",
        description:
          "Wrist injury, passing of Jim, Nelly nickname, High School Life, Alaska, Home Life",
        downloadableFiles: [
          {
            name: "Part 1",
            path: "media/DelaineRichards-Interview-10-Jan-2023-Part-1.mp3",
          },
          {
            name: "Part 2",
            path: "media/DelaineRichards-Interview-10-Jan-2023-Part-2.mp3",
          },
        ],
      },
      {
        date: "23 Jan 2023",
        description:
          "Ernst's hospitalization, project related discussions, Fred Mueller, Millie Laska, coordinating and reviewing documents, Bernie Behnke, Ida Miller, Fred Hansen, Aunt Martha, James Parrish, Frieda and Irma, Bernice Lousie Johnson, Bea Esther Johnson.",
        downloadableFiles: [
          { name: "Part 1", path: "media/DelaineRichards-Jan232023-Part1.mp3" },
          { name: "Part 2", path: "media/DelaineRichards-Jan232023-Part2.mp3" },
        ],
      },
      {
        date: "26 Jan 2023",
        description:
          "The old farm and the difficulties around losing it talked about Erna's work, home life, what it was like",
        downloadableFiles: [
          {
            name: "Part 1",
            path: "media/DelaineRichards26-Jan-2023-Part1.mp3",
          },
          {
            name: "Part 2",
            path: "media/DelaineRichards26-Jan-2023-Part2.mp3",
          },
        ],
      },
      {
        date: "2 Feb 2023",
        description:
          "Pet pig Peter allowed in the house, questions about youth, hobbies puzzles, Sheephead game, Jim and Delaine courtship, religious drama. Jim was not into cards, Pat Grenwald moved to Mora, Delaine's time working in banks.",
        downloadableFiles: [
          {
            name: "Part 1",
            path: "media/DelaineRichards-20230202002-Part1.mp3",
          },
          {
            name: "Part 2",
            path: "media/DelaineRichards-20230202002-Part2.mp3",
          },
        ],
      },
    ],
  },
];

function App(): ReactElement {
  return (
    <Container className="App">
      <h3>Phone Interview Recordings</h3>
      <Accordion>
        {simpleInterviews.map((interview) => {
          return (
            <Accordion.Item
              key={interview.interviewee}
              eventKey={interview.interviewee}
            >
              <Accordion.Header>{interview.interviewee}</Accordion.Header>
              <Accordion.Body>
                <ol>
                  {interview.interviews.map((session) => {
                    return (
                      <li key={session.date}>
                        <p>Recorded on {session.date}</p>
                        <p>Topics discussed: {session.description}</p>
                        <p>Downloadable Media: </p>
                        {session.downloadableFiles.map((file) => (
                          <p key={file.name}>
                            <a href={file.path} download>
                              {file.name}
                            </a>
                          </p>
                        ))}
                      </li>
                    );
                  })}
                </ol>
              </Accordion.Body>
            </Accordion.Item>
          );
        })}
      </Accordion>

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
    </Container>
  );
}

export default App;
