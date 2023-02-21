import mongoose from "../libs/database";

export default interface ModelI{
    schema: mongoose.Schema<any>
    model: mongoose.Model<any, {}>
}