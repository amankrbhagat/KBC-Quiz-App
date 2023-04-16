import { useEffect, useMemo, useState } from "react";
import "./app.css";
import Trivia from "./components/Trivia";
import Timer from "./components/Timer";
import Start from "./components/Start";

function App() {
  const [username, setUsername] = useState(null);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [stop, setStop]= useState(false);
  const [earned, setEarned] = useState("Rs. 0");

  const data = [
    {
      id: 1,
      question: "Rolex is a company that specializes in what type of product?",
      answers: [
        {
          text: "Phone",
          correct: false,
        },
        {
          text: "Watches",
          correct: true,
        },
        {
          text: "Food",
          correct: false,
        },
        {
          text: "Cosmetic",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "When did the website `Facebook` launch?",
      answers: [
        {
          text: "2004",
          correct: true,
        },
        {
          text: "2005",
          correct: false,
        },
        {
          text: "2006",
          correct: false,
        },
        {
          text: "2007",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Who played the character of harry potter in movie?",
      answers: [
        {
          text: "Johnny Deep",
          correct: false,
        },
        {
          text: "Leonardo Di Caprio",
          correct: false,
        },
        {
          text: "Denzel Washington",
          correct: false,
        },
        {
          text: "Daniel Red Cliff",
          correct: true,
        },
      ],
    },
    {
      id: 4,
      question: "The International Literacy Day is observed on?",
      answers: [
        {
          text: "Sep 8",
          correct: true,
        },
        {
          text: "Nov 28",
          correct: false,
        },
        {
          text: "May 2",
          correct: false,
        },
        {
          text: "Sep 22",
          correct: false,
        },
      ],
    },
    {
      id: 5,
      question: "The language of Lakshadweep. a Union Territory of India, is",
      answers: [
        {
          text: "Tamil",
          correct: false,
        },
        {
          text: "Hindi",
          correct: false,
        },
        {
          text: "Malyalam",
          correct: true,
        },
        {
          text: "Telugu",
          correct: false,
        },
      ],
    },
    {
      id: 6,
      question: "In which group of places the Kumbha Mela is held every twelve years?",
      answers: [
        {
          text: "Ujjain. Purl; Prayag. Haridwar",
          correct: false,
        },
        {
          text: "Prayag. Haridwar, Ujjain,. Nasik",
          correct: true,
        },
        {
          text: "Rameshwaram. Purl, Badrinath. Dwarika",
          correct: false,
        },
        {
          text: "Chittakoot, Ujjain, Prayag,'Haridwar",
          correct: false,
        },
      ],
    },
    {
      id: 7,
      question: "Bahubali festival is related to",
      answers: [
        {
          text: "Islam",
          correct: false,
        },
        {
          text: "Hinduism",
          correct: false,
        },
        {
          text: "Buddhism",
          correct: false,
        },
        {
          text: "Jainism",
          correct: true,
        },
      ],
    },
    {
      id: 8,
      question: "September 27 is celebrated every year as",
      answers: [
        {
          text: "Teachers' Day",
          correct: false,
        },
        {
          text: "National Integration Day",
          correct: false,
        },
        {
          text: "World Tourism Day",
          correct: true,
        },
        {
          text: "International Literacy Day",
          correct: false,
        },
      ],
    },
    {
      id: 9,
      question: "Who is the author of Manas Ka-Hans ?",
      answers: [
        {
          text: "Khushwant Singh",
          correct: false,
        },
        {
          text: "Prem Chand",
          correct: false,
        },
        {
          text: "Jayashankar Prasad",
          correct: false,
        },
        {
          text: "Amrit Lal Nagar",
          correct: true,
        },
      ],
    },
    {
      id: 10,
      question: "The death anniversary of which of the following leaders is observed as Martyrs' Day?",
      answers: [
        {
          text: "Smt. Indira Gandhi",
          correct: false,
        },
        {
          text: "Pt. Jawaharlal Nehru",
          correct: false,
        },
        {
          text: "Mahatma Gandhi",
          correct: true,
        },
        {
          text: "Lal Bahadur Shastri",
          correct: false,
        },
      ],
    },
    {
      id: 11,
      question: "Who is the author of the epic Meghdoot?",
      answers: [
        {
          text: "Vishakadatta",
          correct: false,
        },
        {
          text: "Valmiki",
          correct: false,
        },
        {
          text: "Banabhatta",
          correct: false,
        },
        {
          text: "Kalidas",
          correct: true,
        },
      ],
    },
    {
      id: 12,
      question: "Good Friday is observed to commemorate the event of",
      answers: [
        {
          text: "birth of Jesus Christ",
          correct: false,
        },
        {
          text: "birth of' St. Peter",
          correct: false,
        },
        {
          text: "crucification of Jesus Christ",
          correct: true,
        },
        {
          text: "rebirth of Jesus Christ",
          correct: false,
        },
      ],
    },
    {
      id: 13,
      question: "Which of the following is observed as Sports Day every year?",
      answers: [
        {
          text: "22nd April",
          correct: false,
        },
        {
          text: "26th  july",
          correct: false,
        },
        {
          text: "29th August",
          correct: true,
        },
        {
          text: "2nd October",
          correct: false,
        },
      ],
    },
    {
      id: 14,
      question: "Pongal is a popular festival of which state?",
      answers: [
        {
          text: "Karnataka",
          correct: false,
        },
        {
          text: "Kerala",
          correct: false,
        },
        {
          text: "Tamil Nadu",
          correct: true,
        },
        {
          text: "Andhra Pradesh",
          correct: false,
        },
      ],
    },
    {
      id: 15,
      question: "Ghototkach in Mahabharat was the son of",
      answers: [
        {
          text: "Duryodhana",
          correct: false,
        },
        {
          text: "Arjuna ",
          correct: false,
        },
        {
          text: "Yudhishthir",
          correct: false,
        },
        {
          text: "Bhima",
          correct: true,
        },
      ],
    },
  ];

  const moneyPyramid = useMemo(() => 
   [
    {id:1, amount: "Rs. 1000"},
    {id:2, amount: "Rs. 2000"},
    {id:3, amount: "Rs. 5000"},
    {id:4, amount: "Rs. 10000"},
    {id:5, amount: "Rs. 20000"},
    {id:6, amount: "Rs. 50000"},
    {id:7, amount: "Rs. 100000"},
    {id:8, amount: "Rs. 250000"},
    {id:9, amount: "Rs. 500000"},
    {id:10, amount: "Rs. 1000000"},
    {id:11, amount: "Rs. 2500000"},
    {id:12, amount: "Rs. 5000000"},
    {id:13, amount: "Rs. 10000000"},
    {id:14, amount: "Rs. 50000000"},
    {id:15, amount: "Rs. 70000000"},
  ].reverse(),

[]
);

  useEffect(() => {
    questionNumber > 1 &&
    setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [moneyPyramid, questionNumber]);
  return (
    <div className="app">
      {username ? (
        <>
      
      <div className="main">
        {stop ?(
           <h1 className="endText" >You earned: {earned} </h1> ) : (
          <>
        <div className="top">
          <div className="timer">
            <Timer setStop={setStop} questionNumber={questionNumber} />
          </div>
        </div>
        <div className="bottom">
          <Trivia 
          data={data}
           setStop={setStop}
           questionNumber={questionNumber}
           setQuestionNumber={setQuestionNumber}/>
          
        </div>
        </>
        )}
      </div>
      <div className="pyramid">
      <ul className="moneyList">
          {moneyPyramid.map((m) => (
          
        <li className={questionNumber === m.id ? "moneyListItem active" : "moneyListItem" }>
          <span className="moneyListItemNumber">{m.id}</span>
          <span className="moneyListItemAmount">{m.amount}</span>
        </li>
        ))}
      </ul>
      </div>
      </>
      ) : (
      <Start setUsername={setUsername} /> 
      )}
    </div>

  );
}

export default App;
