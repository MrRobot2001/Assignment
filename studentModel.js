const mongoose = require('mongoose');


const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        maxLength: 25
    },
    Class: {
        type: String,
        required: true,
        trim: true,
        maxLength: 5,
    },
    contact: {
        type: Number,
        required: true,
        trim: true,
        unique: true,
        length: 10
    },
    subjects: [{
        type: String,
        default: 'Maths',
        maxLength: 15
    }],
    society: [{
        type: String,
        default: null,
        maxLength: 25
    }],
    year: {
        type: Number,
        unique: true,
        required: true,
        length: 4
    }
},{
    timestamps: true
})

module.exports = mongoose.model('student', studentSchema)