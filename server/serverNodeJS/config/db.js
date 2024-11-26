const mongoose = require('mongoose');
// code 4/4/2024
const local = "mongodb+srv://cuonglmph51095:Lemanhcuong2005@cluster0.oskcp.mongodb.net/Lab5_md19304_ph51095";

const connect = async () => {
    try {
        await mongoose.connect(local);
        console.log('Connect success');
    } catch (error) {
        console.error('Connection to MongoDB failed:', error);
    }
}

module.exports = { connect };
