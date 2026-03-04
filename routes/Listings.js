import express from 'express';

const router = express.Router();


// Sample data for listings
const listings = [
    { id: 1, title: 'Cozy Apartment', price: 1200 },
    { id: 2, title: 'Spacious House', price: 2500 },
    { id: 3, title: 'Modern Condo', price: 1800 },
];

// Get all listings
router.get('/listings', (req, res) => {
    res.json(listings);
});

export default router;