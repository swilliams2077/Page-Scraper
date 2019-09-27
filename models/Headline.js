var mongoose = require("mongoose");

var Schema = mongoose.schema;

var headlineSchema = new Schema ({
    headline: {
        type: String,
        required: true,
        unique: true
    },
    summary: {
        type: Boolean,
        default: false,
    }

});

var Headline = mongoose.model("Headline", headlineSchema);

module.exports = Headline; 