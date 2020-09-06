const mongoose = require('mongoose');

const resourceSchema = new mongoose.Schema({
    course: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course'
    },
    video: {
        type: String,
        require: true
    }
}, { timestamps: true })

module.exports = mongoose.model('Resource', resourceSchema);
