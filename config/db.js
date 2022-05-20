const mongoose = require("mongoose")

mongoose
    .connect('mongodb://localhost/socialR',

        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        }
    )
    .then(() => console.log("connected MongoDB"))
    .catch((err) => console.log("Faild to connect to MongoDB", err));


    