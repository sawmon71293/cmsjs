import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: {type: String, requried: true},
    email: {type: String, requried: true, unique: true},
    password: {type: String, requried: true},
    verifyOtp: {type: String, default: ''},
    verifyOtpExpireAt: {type: Number, default: 0 },
    isAccountVerified: {type: Boolean, default: 0 }
})