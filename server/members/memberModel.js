import mongoose from "mongoose";
const Schema = mongoose.Schema;

const memberSchema = new Schema({
    name: String,
    city: String,
    email: String
});

export default mongoose.model('members', memberSchema);