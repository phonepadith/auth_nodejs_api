const mongoose = require('mongoose');
const URL = "your_mongodb_altas";
const JWT_KEY = "your_JWT_KEY";

mongoose.connect(URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
})

module.exports = JWT_KEY;
