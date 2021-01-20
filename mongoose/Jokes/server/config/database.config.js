const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/jokes', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("found the mainframe..."))
    .catch(err => console.log("MELTDOWN! MELTDOWN! MELTDOWN!",err))


//set up like this
    