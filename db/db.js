const mongoose = require('mongoose');
const URL = "mongodb+srv://adminmongo:k7807907@cluster0-1uldw.gcp.mongodb.net/test?retryWrites=true&w=majority";
const JWT_KEY = "WinterIsComingGOT2019";

mongoose.connect(URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
})

module.exports = JWT_KEY;