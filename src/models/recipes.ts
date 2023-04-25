import { ObjectId } from "mongodb";



export default class Recipes {
  constructor(public name: string, public ingredients: string, public id?: ObjectId) {}
}