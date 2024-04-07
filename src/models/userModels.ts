import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Please provide Username'],
        unique: true
    },
    email: {
        type: String,
        required: [true, 'Please provide Email'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Please provide Username'],
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    forgotPasswordToken: String,
    forgotPasswordTokenExpire: Date,
    verifyToken: String,
    verifyTokenExpire: Date,
})

const User = mongoose.models.users || mongoose.model('users', userSchema);
export default User