const mongoso = require('mongoose');

const TransactionSchema = new mongoso.Schema({

    text: {
        type: String,
        trim: true,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    createdDate: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoso.model('Transaction',TransactionSchema);