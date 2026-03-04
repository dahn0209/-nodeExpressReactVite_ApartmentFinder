import VotingList from "../VotingList";
import TotalVotes from "../TotalVotes";
import ApartmentListingsList from "../ApartmentListingsList";



function IndexPage() {
  console.log("Index Page loaded");

  return (
    <>
      <h1>Index Page Deee</h1>
      <section>
        <ApartmentListingsList />


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
