

export default function Voter({ id,name,votes=0,setVotes }) {

  function OnVote() {
    setVotes(id);
    console.log(`Vote for:`, name, votes);
  }

  console.log(`Render voter:`, name);

  return (
    <div>
      Voter for <strong>{name}</strong>
      # Votes{" "}<span id="numVotes"> ({votes}) </span>
      <button onClick={OnVote}>thumbs up</button>
    </div>
  );
}
