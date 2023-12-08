import mongoose from "mongoose";

mongoose.connect(process.env.LINK_DB);

let db = mongoose.connection;

export default db
