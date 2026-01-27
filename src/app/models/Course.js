const mongoose = require('mongoose');
const slug = require('mongoose-slug-updater');
mongoose.plugin(slug);
const Schema = mongoose.Schema;

const Course = new Schema({
    name: {type: String, required: true},
    description: {type: String, maxLength: 500},
    image: {type: String},
    videoId: {type: String, required: true},
    level: {type: String, maxLength: 500},
    createdAt: {type: Date, default: Date.now()},
    updatedAt: {type: Date, default: Date.now()},
    slug: {type: String, slug: 'name', unique: true},
}, {
    timestamps: true,
});

module.exports = mongoose.model('Course', Course);