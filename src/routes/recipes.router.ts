import express, { Request, Response } from "express";
import { ObjectId } from "mongodb";
import { collections } from "../services/database.services";
import { Recipes } from "../interfaces/RecipeInterface";

export const recipesRouter = express.Router();

recipesRouter.use(express.json());

recipesRouter.get("/", async (_req: Request, res: Response) => {
    try {
       const recipes = (await collections.recipes!.find({}).toArray()) as Recipes[];

        res.status(200).send(recipes);
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).send(error.message);
        }
    }
});


recipesRouter.get("/:id", async (req: Request, res: Response) => {
    const id = req?.params?.id;

    try {
        
        const query = { _id: new ObjectId(id) };
        const recipes = (await collections.recipes!.findOne(query)) as Recipes;

        if (recipes) {
            res.status(200).send(recipes);
        }
    } catch (error) {
        res.status(404).send(`Unable to find matching document with id: ${req.params.id}`);
    }
});

recipesRouter.post("/", async (req: Request, res: Response) => {
    try {
        const newGame = req.body as Recipes;
        const result = await collections.recipes!.insertOne(newGame);

        result
            ? res.status(201).send(`Successfully created a new game with id ${result.insertedId}`)
            : res.status(500).send("Failed to create a new game.");
    } catch (error) {
        if (error instanceof Error) {
            console.error(error);
            res.status(400).send(error.message);
        }

    }
});

recipesRouter.put("/:id", async (req: Request, res: Response) => {
    const id = req?.params?.id;

    try {
        const updatedGame: Recipes = req.body as Recipes;
        const query = { _id: new ObjectId(id) };
      
        const result = await collections.recipes!.updateOne(query, { $set: updatedGame });

        result
            ? res.status(200).send(`Successfully updated game with id ${id}`)
            : res.status(304).send(`Game with id: ${id} not updated`);
    } catch (error) {
        if (error instanceof Error) {
            console.error(error.message);
            res.status(400).send(error.message);
        }
    }
});


recipesRouter.delete("/:id", async (req: Request, res: Response) => {
    const id = req?.params?.id;

    try {
        const query = { _id: new ObjectId(id) };
        const result = await collections.recipes!.deleteOne(query);

        if (result && result.deletedCount) {
            res.status(202).send(`Successfully removed game with id ${id}`);
        } else if (!result) {
            res.status(400).send(`Failed to remove game with id ${id}`);
        } else if (!result.deletedCount) {
            res.status(404).send(`Game with id ${id} does not exist`);
        }
    } catch (error) {
        if (error instanceof Error) {
            console.error(error.message);
            res.status(400).send(error.message);
        }
    }
});


// PUT

// DELETE