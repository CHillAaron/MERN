const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/ChangeMe', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("We have got into the Main frame. Awaiting Orders:"))
    .catch(err => console.log("MELTDOWN! MELTDOWN! MELTDOWN!",err))
