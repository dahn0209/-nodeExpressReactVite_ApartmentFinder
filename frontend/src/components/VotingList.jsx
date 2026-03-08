// import TotalVotes from "./TotalVotes";
// import { useState } from "react";
// import Voter from "./Voter";

// const initialCandidates = [
//   { id: 1, name: "John", votes: 0 },
//   { id: 2, name: "Jane", votes: 0 },
//   { id: 3, name: "Bob", votes: 0 },
//   { id: 4, name: "Alice", votes: 0 },
//   { id: 5, name: "Charlie", votes: 0 },
// ];

// export default function VotingList() {
//   let [candidates, setCandidates] = useState(initialCandidates);

//   function renderCandidate(candidate) {
//     return (
//       <Voter
//         key={candidate.id}
//         id={candidate.id}
//         name={candidate.name}
//         votes={candidate.votes}
//         setVotes={(voterId) => {
//           setCandidates((prevCandidates) =>
//             prevCandidates.map((c) =>
//               c.id === voterId ? { ...c, votes: c.votes + 1 } : c,
//             ),
//           );
//         }}
//       />
//     );
//   }

//   return (
//     <div>
//       <TotalVotes 
//         totalVotes={candidates.reduce((p, c) => p+c?.votes || 0, 0)} />
//       <h2>Candidate List</h2>
//       {/* {candidates.map((candidate,index) => (
//       <Voter key={index} name={candidate.name} votes={candidate.votes} setVotes={() => {}} />

//     ))}    */}
//       {candidates.map(renderCandidate)}
//     </div>
//   );
// }

import { useState } from "react";
import TotalVotes from "./TotalVotes.jsx";
import Voter from "./Voter.jsx";

const initialCandidates = [
  { id: 0, name: "John", votes: 0 },
  { id: 1, name: "Alexis", votes: 0 },
  { id: 2, name: "Guerra", votes: 0 },
  { id: 3, name: "Gomez", votes: 0 },
  { id: 4, name: "Pedro", votes: 0 },
];

export default function VotingList() {
  let [candidates, setCandidates] = useState(initialCandidates);

  const renderCandidate = (candidate) => (
    <Voter
      key={candidate.id}
      id={candidate.id}
      name={candidate.name}
      votes={candidate.votes}
      setVotes={(voterId) => {
        setCandidates((prevCandidates) =>
          prevCandidates.map((c) =>
            c.id === voterId ? { ...c, votes: c.votes + 1 } : c
          )
        );
      }}
    />
  );

  return (
    <div>
      <TotalVotes
        totalVotes={candidates.reduce((p, c) => p + (c?.votes || 0), 0)}
      />
      <h2>Candidates </h2>
      {candidates.map(renderCandidate)}
    </div>
  );
}
