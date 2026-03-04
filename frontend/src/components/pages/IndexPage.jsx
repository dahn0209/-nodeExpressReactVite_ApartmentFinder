import VotingList from "../VotingList";
import TotalVotes from "../TotalVotes";


function IndexPage() {
  console.log("Index Page loaded");

  fetch("/api/listings")
    .then((res) => res.json())
    .then((data) => console.log("Listings data:", data));

  return (
    <>
      <h1>Index Page Deee</h1>
      <section>
        <p>This is the main index page content.</p>
      </section>
      <section>
        <h2>Voting</h2>
        {/* <TotalVotes totalVotes={0}/> */}
        <VotingList/>
      </section>
    </>
  );
}

export default IndexPage;
