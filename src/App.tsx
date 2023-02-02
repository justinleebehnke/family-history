import React, { ReactElement } from "react";
import { Container } from "react-bootstrap";
import "./App.css";
import ListGroup from "react-bootstrap/ListGroup";
import Accordion from "react-bootstrap/Accordion";

const annotatedInterview = [
  {
    date: "23 Jan 2023",
    interviewee: "Delaine Richards",
    part: "Part 1 of 2",
    audioFile: "media/DelaineRichards-Jan232023-Part1.mp3",
    chapters: [
      {
        start: "00:00",
        end: "04:00",
        summary:
          "Delaine and I discuss the current happenings of the family history project and a bit about the vision",
      },
      {
        start: "04:00",
        end: "10:20",
        summary:
          "Delaine shares what she remembers of her mom explaining what happened with Ernst Gruenhagen's hospitalization. As well as her own emotional feelings about it and the impact it had on other family members.",
      },
      {
        start: "10:20",
        end: "11:25",
        summary: "Delaine and I discuss getting set up on FamilySearch",
      },
      {
        start: "11:25",
        end: "14:56",
        summary:
          "We discuss some things about whether I have certain documents or certain pictures",
      },
      {
        start: "14:56",
        end: "17:25",
        summary:
          "We discuss Ancestry and the types of records I can get and AncestryDNA. And the church in Benton Township.",
      },
      {
        start: "17:25",
        end: "22:28",
        summary:
          "I ask about Fred Mueller, Fritz' Maternal Grandpa. And I learn the information about the siblings of Augusta. Millie Laska Dad's mother's sister's daughter, which would make her Fritz's niece.",
      },
      {
        start: "22:28",
        end: "27:28",
        summary:
          "We talk more about potential documents that we can share with each other and the project.",
      },
    ],
  },
  {
    date: "23 Jan 2023",
    interviewee: "Delaine Richards",
    part: "Part 2 of 2",
    audioFile: "media/DelaineRichards-Jan232023-Part2.mp3",
    chapters: [
      {
        start: "0:00",
        end: "6:58",
        summary:
          "Further questions about Fred Mueller, where he lived in Belle Plaine and other documents and pictures that Delaine shared with me via text. Bernie Behnke, Aunt Martha, two older half brothers. Shipped by bought to Ida Miller the story.",
      },
      {
        start: "6:58",
        end: "8:51",
        summary:
          "Martha married Fred Hansen as well as James Parish. After the interview I found out from Dad that Martha took back Hansen as her married name after separating from James Parish. Death certificate for Fritz.",
      },
      {
        start: "8:51",
        end: "10:56",
        summary:
          "Frieda and Irma are Aunt Martha's Daughters. Bernie Behnke was Dad's 1st cousin from a half brother.",
      },
      {
        start: "10:56",
        end: "16:55",
        summary:
          "Bernice Lousie Johnson, this is when I found out about her. Bea did not stay with Fred Mueller. Martha and Dad went back to his house. It was a sensitive topic. Afraid that something like that would happen to other people. Winding down the interview. Esther Johnson, full cousin to your dad. 89 at the time she wrote this.",
      },
    ],
  },
];

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
        <Accordion>
          {annotatedInterview.map((interview) => {
            return (
              <Accordion.Item
                key={
                  interview.interviewee +
                  " " +
                  interview.date +
                  " " +
                  interview.part
                }
                eventKey={interview.date + " " + interview.part}
              >
                <Accordion.Header>
                  {interview.interviewee +
                    " " +
                    interview.date +
                    " " +
                    interview.part}
                </Accordion.Header>
                <Accordion.Body>
                  <a href={interview.audioFile} download>
                    Download Audio
                  </a>
                  {interview.chapters.map((chapter) => {
                    return (
                      <p key={chapter.start}>
                        {chapter.start}-{chapter.end}: {chapter.summary}
                      </p>
                    );
                  })}
                </Accordion.Body>
              </Accordion.Item>
            );
          })}
        </Accordion>
      </ListGroup>
    </Container>
  );
}

export default App;
