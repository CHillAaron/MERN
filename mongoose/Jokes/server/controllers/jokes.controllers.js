const Joke = require('../models/joke.model')
const jokesRoutes = require('../routes/jokes.routes')


module.exports.findAllJokes = (req, res)=>{
    console.log("Getting all the Jokes")
    //mongoose command to retrieve all jokes from the joke table/collection
    Joke.find()
        .then(allJokes => res.json({results: allJokes}))
        .catch(err => res.json({error: err}))
}

module.exports.createJoke= (req, res)=>{
    console.log("creating your joke")
    Joke.create(req.body)
        .then(newJoke => res.json({results:newJoke}))
        .catch(err=> res.json({error: err}))
}

module.exports.findOneJoke= (req,res)=>{
    console.log('Joke id to find', req.params.id)
    Joke.findOne({_id: req.params.id})
        .then(selectedJoke => res.json({results: selectedJoke}))
        .catch(err=> res.json({error: err}))
}

module.exports.deleteOneJoke= (req,res)=>{
    console.log('Joke id to to delete', req.params.id)
    Joke.deleteOne({_id: req.params.id})
        .then(deleteJoke => res.json({results: deleteJoke}))
        .catch(err=> res.json({error: err}))
}

module.exports.updateJoke=(req,res)=>{
    console.log('Joke id to update', req.params.id)
    Joke.findOneAndUpdate({_id: req.params.id}, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify:false
    })
        .then(updateJoke => res.json({results: updateJoke}))
        .catch(err=> res.json({error: err}))
}