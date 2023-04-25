import { WithId } from "mongodb";

export interface Recipes extends WithId<Document> {
    name: string;
    ingredients: string;
}