import express from 'express';
import listingRoutes from './routes/listingRoutes';

const app  = express();
app.use(express.json());

// Routes
app.use('/', listingRoutes);

const PORT = '3000';
app.listen(PORT, () => {
    console.log('RUNNING');
})


export default app;