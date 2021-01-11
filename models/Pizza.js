const { Schema, model } = require('mongoose');

//Want the data to be stored when the users create a new pizza. name of pizza, name of user
//timestamp of when pizza was created, timestamp of updates to the pizzas data, suggested size
//and toppings

const PizzaSchema = new Schema({
    pizzaName: {
        type: String
    },
    createdBy: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    size: {
        type: String,
        default: 'Large'
    },
    toppings: []
});

//create the Pizza model using the PizzaSchema
const Pizza = model('Pizza', PizzaSchema);

//export the Pizza model
module.exports = Pizza;