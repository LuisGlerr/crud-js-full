const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then((db) =>{
        console.log('DB Connected');
    })
    .catch((err) =>{
        console.log(err);
    })