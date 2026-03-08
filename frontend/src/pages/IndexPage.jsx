import { useState, useEffect, useCallback } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import NavigationBar from "../components/NavigationBar";
import VotingList from "../components/VotingList";
import ApartmentListingsList from "../components/ApartmentListingsList";
import CreateListingForm from "../components/CreateListingForm";
import BaseTemplate from "./BaseTemplate";
import { useUser } from "../context/UserContext";

function IndexPage() {
  console.log("Index Page loaded");
  const user = useUser();
  const [listings, setListings] = useState([]);
  const [query, setQuery] = useState("");

  const reloadListings = useCallback(async () => {
    ////this involves useEffect, but I want to test the fetch first
    const res = await fetch(`/api/listings?q=${query}`);
    if (!res.ok) {
      console.error("Failed to fetch listings", res.status);
      return;
    }
    const data = await res.json();
    setListings(data);
  }, [query]);

  useEffect(() => {
    const timeout = setTimeout(reloadListings, 300); // debounce by 500ms

    // Cleanup function to clear the timeout if the component unmounts or query changes
    return () => {
      console.log(
        "Fetching effect cleanup-ApartmentListingsList unmounted, aborting fetch if in progress",
      );
      clearTimeout(timeout);
    };
  }, [reloadListings, query]);

  return (
    <>
      {/* <Container>
        <NavigationBar /> */}

      <h1>Index Page Deee</h1>
      <section>
        <Row>
          <Col md={8} xs={12}>
            <ApartmentListingsList
              listings={listings}
              query={query}
              setQuery={setQuery}
            />
          </Col>
          <Col md={4} xs={12}>
            {user ? (
              <CreateListingForm reloadListings={reloadListings} />
            ) : (
              <p>Please <a href="/login">log in</a> to create a new listing</p>
            )}
          </Col>
        </Row>
      </section>
      <section>
        <h2>Voting</h2>
        <VotingList />
      </section>
      {/* </Container> */}
    </>
  );
}

export default IndexPage;
