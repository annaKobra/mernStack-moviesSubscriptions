import mongoose from "mongoose";
const Schema = mongoose.Schema;

const subscriptionSchema = new Schema({
    movie_id: String,
    member_id: String,
    date: Date
});

export default mongoose.model('subscriptions', subscriptionSchema);