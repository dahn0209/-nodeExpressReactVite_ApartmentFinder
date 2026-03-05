import Listing from "./Listing";

export default function ApartmentListingsList({ listings, query, setQuery }) {
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
