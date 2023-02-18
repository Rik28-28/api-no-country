import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
    user: {
        type: String,
        required: [true, "Se requiere el nombre"],
        index: true,
        unique: true
    },
    email: {
        type: String,
        required:  [true, "Se requiere el email"],
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required:  [true, "Se requiere el password"]
    }
})

const User = mongoose.model('user', UserSchema)

export default User