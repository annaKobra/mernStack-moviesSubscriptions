import mongoose from "mongoose";
const Schema = mongoose.Schema;

const movieSchema = new Schema({
    name: String,
    premiered: String,
    genres: [String],
    image: String
});

export default mongoose.model('movies', movieSchema);