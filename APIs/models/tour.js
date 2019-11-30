const mongoose = require('mongoose');
const tourSchema = new mongoose.Schema({
    title: String
    , agencyname: String
    , rating: Number
    , description: String
    , mealplan: String
    , days: String
    , imageUrl: String
});
const Tour = mongoose.model('tours', tourSchema);
module.exports = Tour;