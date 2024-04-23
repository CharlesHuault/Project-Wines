const mongoose = require('mongoose');

const wineSchema = mongoose.Schema({
    name: { type: String, required: true },
    color: { type: String, required: true },
    origin: { type: String, required: true },
    year: { type: Number, required: true },
    grapes: { type: [String], required: true },
    price: { type: Number, required: true },
    caracteristics: { type: [String], required: true },
    pairing: { type: [String], required: true },
    ecology: { type: [String], required: true },
    imageUrl: { type: String, required: true },
    mapUrl: { type: String, required: true },
});

const winesCollectionSchema = mongoose.Schema({
    whiteWines: [wineSchema],
    redWines: [wineSchema],
    roseWines: [wineSchema]
});

module.exports = mongoose.model('WinesCollection', winesCollectionSchema);