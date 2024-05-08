import { Request, Response} from 'express';
import { Listing } from '../models/listing';

//Mock data
const mockData =  [
    {
      id: '1',
      title: 'Beautiful House',
      price: 250000,
      description: 'A spacious house with a garden in a quiet neighborhood',
    },
    {
      id: '2',
      title: 'Cozy Apartment',
      price: 150000,
      description: 'A cozy apartment with a view of the city skyline',
    },
    {
      id: '3',
      title: 'Luxury Villa',
      price: 500000,
      description: 'A luxurious villa with a pool and a stunning view of the ocean',
    },
  ];


let listings: Listing[] = mockData;

export const addListing = (req: Request, res: Response) => {
    const newListing: Listing = req.body;
    newListing.id = Math.floor(Math.random() * 100).toString();
    if(typeof newListing.price !== 'number') {
        return res.status(400).json({ error: 'Price is not a number'} );
    }

    listings.push(newListing);
    res.status(201).json({ message: 'Added'});
}

export const getAllListings = (req: Request, res: Response) => {
    return res.status(200).json(listings);
}

export const deleteListing = (req: Request, res: Response) => {
    const { id } = req.params;
    const index = listings.findIndex((listing) => listing.id === id);

    if(index !== -1) {
        listings.splice(index, 1);
        res.status(200).json({ message: 'Deleted'});
    } else {
        res.status(404).json({ message: 'Not found'});
    }
}