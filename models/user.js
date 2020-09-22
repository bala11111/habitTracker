const mongoose = require('mongoose');

//This is the habit schema
const hSchema = mongoose.Schema({
    habit:{
        type : String,
        required:true
    },
   
    description:{
        type : String,
        required:true
    },

    startDate:{
        type : Date,
        required:true
    },

    status: {
        type : Object
    }
});

const Habit = mongoose.model('Habit',hSchema);

module.exports = Habit;