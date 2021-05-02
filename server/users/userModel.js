import mongoose from "mongoose";
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: String,
    email: String,
    username: String,
    password: String
});

export default mongoose.model('users', userSchema);