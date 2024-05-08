import express from 'express';
import { addListing, getAllListings, deleteListing } from '../controllers/listingController';

const router = express.Router();

//add
router.post('/listings', addListing);

//get
router.get('/listings', getAllListings);

//delete
router.delete('/listings/:id', deleteListing);

export default router;