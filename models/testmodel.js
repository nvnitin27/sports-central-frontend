import { Schema, model, models } from "mongoose";

const testSchema = new Schema ({
    name: String,
    email: {
        type: String,
        required: true,
        unique: true
    }
});

const test =models.Test || model('Test', testSchema)

export default test;