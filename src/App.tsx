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
  {
    interviewee: "Timoteo Monroy Cabrera (Spanish)",
    interviews: [
      {
        date: "3 Feb 2023",
        description:
          "Flavio Monroy Ramirez, Juana Ramirez, Arcadio Monroy, their children, and his memories of them. Go to mass for San Augustine. Arcadio was a faithful farmer. We don't know much about the parents.",
        downloadableFiles: [
          {
            name: "Part 1",
            path: "media/TimoteoMonroyCabrera-20230203003-Part1.mp3",
          },
          {
            name: "Part 2",
            path: "media/TimoteoMonroyCabrera-20230203004-Part2.mp3",
          },
        ],
      },
      {
        date: "6 Feb 2023",
        description:
          "Lots of kids in making noise in the background, we just validated dates and people during this call and other family members.",
        downloadableFiles: [
          {
            name: "Part 1",
            path: "media/TimoteoMonroyCabrera-20230206005-Part1.mp3",
          },
          {
            name: "Part 2",
            path: "media/TimoteoMonroyCabrera-20230206005-Part2.mp3",
          },
        ],
      },
      {
        date: "7 Feb 2023",
        description:
          "Asked about memories of his parents. And the work in his youth, and the culture in the area around where his family is. And the journey he took to bring goods to market.",
        downloadableFiles: [
          {
            name: "Part 1",
            path: "media/TimoteoMonroyCabrera-20230207007-Part1.mp3",
          },
          {
            name: "Part 2",
            path: "media/TimoteoMonroyCabrera-20230207007-Part2.mp3",
          },
        ],
      },
      {
        date: "9 Feb 2023",
        description:
          "Short call, origin of his name. A friend that was a priest had the name Timoteo. He thinks that might be why he got that name. He arrived 16 years old in Barrio de Guzman.",
        downloadableFiles: [
          {
            name: "Recording",
            path: "media/TimoteoMonroyCabrera-20230209009.mp3",
          },
        ],
      },
      {
        date: "14 Feb 2023",
        description:
          "How his dad's arm was not usable after his dad got shot. And then what happened after that, the cows and everything, and where he went to Acapulco.",
        downloadableFiles: [
          {
            name: "Part 1",
            path: "media/TimoteoMonroyCabrera-20230214011-Part1.mp3",
          },
          {
            name: "Part 2",
            path: "media/TimoteoMonroyCabrera-20230214011-Part2.mp3",
          },
        ],
      },
      {
        date: "16 Feb 2023",
        description:
          "We talk about the time after his dad got shot where he went to be away from them.",
        downloadableFiles: [
          {
            name: "Part 1",
            path: "media/TimoteoMonroyCabrera-20230216012-Part1.mp3",
          },
          {
            name: "Part 2",
            path: "media/TimoteoMonroyCabrera-20230216012-Part2.mp3",
          },
        ],
      },
      {
        date: "17 Feb 2023",
        description:
          "Florencia and her family. Luis's family. Specific dates for the marriage and locations. What they grew and how the farm was and everything.",
        downloadableFiles: [
          {
            name: "Part 1",
            path: "media/TimoteoMonroyCabrera-20230217013-Part1.mp3",
          },
          {
            name: "Part 2",
            path: "media/TimoteoMonroyCabrera-20230217013-Part2.mp3",
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
      <p>
        These are recordings taken with members of my family share our history.
      </p>
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
      <p>
        All of the work I do for family history is recorded on a free site
        called FamilySearch. To view the family history, you'll need to create a
        free account and then connect your account to one of our common
        ancestors explained below.
      </p>
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

      <p>
        Call or text me (Justin): 952-873-9729 if you need help or if there is
        anything I can do for you.
      </p>

      <p>
        Also note, by going to{" "}
        <a href="https://cards.justinbehnke.com">cards.justinbehnke.com</a> you
        can play Sheepshead online which is a great way to connect with family
        and preserve this significant part of our heritage.
      </p>

      <p className="footer">
        The work of the family history research and recorded interviews is
        dedicated to the memory of Elijah Robert Behnke.
      </p>
      <img
        src="images/ElijahsTree.png"
        alt="A graphic of the ancestors of Elijah Robert Behnke"
      />
    </Container>
  );
}

export default App;
