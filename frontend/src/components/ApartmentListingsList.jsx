import { useState, useEffect } from "react";
import Listing from "./Listing";

export default function ApartmentListingsList() {
  const [listings, setListings] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const reloadListings = async () => {
      ////this involves useEffect, but I want to test the fetch first
      const res = await fetch(`/api/listings?q=${query}`);
      if (!res.ok) {
        console.error("Failed to fetch listings", res.status);
        return;
      }
      const data = await res.json();
      setListings(data);
    };

    const timeout = setTimeout(() => {
      console.log("Fetching listings with query:", query);
      reloadListings;
    }, 300); // debounce by 500ms

    reloadListings();

    // Cleanup function to clear the timeout if the component unmounts or query changes
    return () => {
      console.log(
        "Fetching effect cleanup-ApartmentListingsList unmounted, aborting fetch if in progress",
      );
      clearTimeout(timeout);
    };
  }, [query]);

  function renderListing(listing) {
    return (
      <Listing key={listing.id} title={listing.title} price={listing.price} />
    );
  }

  const onQuery = (evt) => {
    console.log("Query changed to:", evt.target.value);
    setQuery(evt.target.value);
  };

  console.log("Render ApartmentListingsList with listings:", listings);
  return (
    <div>
      <h2>Apartment Listings</h2>
      <input
        value={query}
        onChange={onQuery}
        placeholder="Filter Listings..."
      />
      {!listings?.length ? <div>loading...</div> : listings.map(renderListing)}
    </div>
  );
}
