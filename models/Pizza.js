const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

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
        default: Date.now,
        get: createdAtVal => dateFormat(createdAtVal)
      },
    size: {
        type: String,
        default: 'Large'
    },
    toppings: [],

    comments: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Comment'
        }
    ]
},
{
    toJSON: {
        virtuals: true,
        getters: true
    },
    id: false
}
);

//get total count of commets and replies on retrieval
PizzaSchema.virtual('commentCount').get(function() {
    return this.comments.length;
});

//create the Pizza model using the PizzaSchema
const Pizza = model('Pizza', PizzaSchema);

//export the Pizza model
module.exports = Pizza;