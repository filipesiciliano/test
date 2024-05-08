# Real Estate Listing API

This is a simple Node.js API for managing real estate listings. It allows users to add new listings, retrieve all listings, and delete listings by ID.

## Features

- Add a new listing
- Retrieve all listings
- Delete a listing by ID

## Technologies Used

- Node.js
- Express.js
- TypeScript

## Installation

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the server:

   ```bash
   npm start
   ```

## Usage

### Add a New Listing

Send a `POST` request to `/listings` with JSON data representing the new listing:

```json
{
  "id": "1",
  "title": "Beautiful House",
  "price": 250000,
  "description": "A spacious house with a garden in a quiet neighborhood"
}
```

### Retrieve All Listings

Send a `GET` request to `/listings` to retrieve all current listings.

### Delete a Listing

Send a `DELETE` request to `/listings/:id` where `:id` is the unique identifier of the listing to be deleted.

## Testing

Run tests using Jest:

```bash
npm test
```
