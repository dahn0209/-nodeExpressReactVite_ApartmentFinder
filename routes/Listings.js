import express from "express";

const router = express.Router();

// Sample data for listings
const listings = [
  { id: 1, title: "Cozy Apartment", price: 1200 },
  { id: 2, title: "Spacious House", price: 2500 },
  { id: 3, title: "Modern Condo", price: 1800 },
  { id: 4, title: "Downtown Loft", price: 2000 },
  { id: 5, title: "Suburban Home", price: 2200 },
  { id: 6, title: "Beachside Villa", price: 3000 },
  { id: 7, title: "Mountain Cabin", price: 1500 },
];

// Get all listings
router.get("/listings", (req, res) => {
  console.log(" GET /API/listings - Received request for listings", req.query);

  let query = req.query.q;
  if (query) {
    // console.log("Filtering listings with query:", query);
    // const filteredListings = listings.filter((listing) =>
    //   listing.title.toLowerCase().includes(query.toLowerCase()),
    // );
    // console.log("Filtered listings:", filteredListings);
    query = query.toString().toLocaleLowerCase();
    return res.json(
      res.json(listings.filter((l) => l.title.toLowerCase().includes(query)))
    );
  } else res.json(listings);
});

export default router;
