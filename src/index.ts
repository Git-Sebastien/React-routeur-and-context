import express from 'express';
import { connectToDatabase } from './services/database.services';
import { recipesRouter } from './routes/recipes.router';

const app = express();
const port = process.env.PORT || 4000;
connectToDatabase()
  .then(() => {
    console.log('Connected to MongoDB');

    // Ajout des routes pour les jeux
    app.use('/recipes', recipesRouter);

    // Démarrage du serveur HTTP
    app.listen(port, () => {
      console.log(`Server started at http://localhost:${port}`);
    });
  })
  .catch((error: Error) => {
    console.error('Database connection failed', error);
    process.exit();
  });