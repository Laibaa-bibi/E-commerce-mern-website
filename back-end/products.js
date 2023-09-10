const mongoose=require('mongoose');

let productSchema = mongoose.Schema(
{
 name: String,
 price: String,
 category: String,
 userId: String,
 company : String
}
);

module.exports = mongoose.model('products',productSchema)