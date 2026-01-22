const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/f8_education');
        console.log('Connect database success!');
    } catch (error) {
        console.log('Connect database fail!');
        console.error(error.message);
    }
}

module.exports = { connect };
