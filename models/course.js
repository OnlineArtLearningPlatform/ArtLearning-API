const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    detail: {
        type: String,
        require: true
    },
    price: {
        type: String,
        require: true
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    medium: {
        type: String,
        require: true
    },
    courseType: {
        type: String,
        default: 'free'
    }
}, { timestamps: true });

module.exports = mongoose.model('Course', courseSchema);