import mongoose, { Schema, Document} from "mongoose";

export interface IRecipe extends Document {
    name: string;
    description: string; 
    ingredients: string[]; 
    instructions: string[];
    preparationTime: number;
    servings: number;
    category: string[];
    difficulty: string;
    image: string[];
    rating: number;
    createdAt: Date;
    author: string;
    comments: Array<{
        user: string;
        comment: string;
        date: Date;
    }>;
}

const RecipeSchema: Schema = new Schema({
    name: { type: String, required: true},
    description: { type: String, required: true},
    ingredients: { type: [String], required: true},
    instructions: { type: [String], required: true },
    preparationTime: { type: Number, required: true },
    servings: { type: Number, required: true },
    category: { type: String, required: true },
    difficulty: { type: String, enum: ['easy', 'intermediate', 'hard'], required: true },
    image: { type: [String], required: true }, 
    rating: { type: Number, default: 0 },  
    createdAt: { type: Date, default: Date.now }, 
    author: { type: String, required: true },
    comments: [
        {
          user: { type: String, required: true },
          comment: { type: String, required: true },
          date: { type: Date, default: Date.now },
        }
      ]
});

export default mongoose.model<IRecipe>('Recipe', RecipeSchema);