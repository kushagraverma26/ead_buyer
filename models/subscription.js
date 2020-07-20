var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var subscription = new Schema({
    name: { type: String, required: true, default: "New Subscription " + Date.now()},
    createdBy: {
        type: Schema.Types.ObjectId, ref: 'Buyers', required: true
    },
    details: {
        name: {type: String, required:true},
        category: { type: String, required: true, enum: ["meats", "dairy", "vegetables", "fruits"] },
        quantity: { type: Number, required: true},
    },
    type: {type: String, required: true, enum: ["daily", "weekly", "monthly"]},
    lastDelivered: {type:Date},
    createdDate: { type: Date, default: Date.now }
})

module.exports = mongoose.model('Subscriptions', subscription)