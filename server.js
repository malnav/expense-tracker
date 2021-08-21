const express = require('express');
const mongoose = require('mongoose');
const transactions = require('./routes/transactions');
const URI = 'mongodb+srv://malnav:malnav@malnav.dg4da.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

const app = express();
app.use(express.json())

const conn = mongoose.connect(URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  });

app.use('/api/v1/transactions',transactions);


const PORT = 5000;

app.listen(PORT,console.log(`Server is running`));

