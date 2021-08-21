
//model of databases
const Transaction = require('../models/Transaction');


//@des get all transaction
//route GET /api/v1/transactions
//access public
exports.getTransactions = async (req,res,next) => {
    try {

        const transactions = await Transaction.find();    
        return res.status(200).json({
            success: true,
            data: transactions,
            message: 'get all transactions'
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Server error'
        });
    }
    

};

//@des Add a transaction
//route POST /api/v1/transactions
//access public
exports.addTransaction =  async (req,res,next) => {
    try {

       const data = req.body;
        const transaction =  await Transaction.create(data);

        return res.status(201).json({
            success: true,
            data: transaction,
            message: 'create new transactions'
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Server error'
        });
    }
};


//@des delete a transaction by id
//route POST /api/v1/transactions/id
//access public
exports.deleteTransaction = async (req,res,next) => {
    try {
        
        const transaction = await Transaction.findById(req.params.id);
        // if !null = true

        if(!transaction){
            return res.status(404).json({
                success: false,
                message: 'Id is not found'
            });
        }

        await transaction.remove();

        return res.status(200).json({
            success: true,
            data: [],
            message: `transaction with id ${req.params.id} is deleted`
        });

        
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Server error',
            error:error.message
        });
    }
};