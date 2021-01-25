const shelter = require('../models/model.model');
const shelterRoutes = require('../routes/routes.routes');

module.exports.findAll = (req, res)=> {
    console.log("Getting all the shelter here")
    //mongoose command to retrieve all shelter from the shelter table/collection
    shelter.find()
    .then(findall => res.json({results:findall}))
    .catch(err => res.json({error:err}))
}

module.exports.create =(req,res)=> {
    console.log("Creating the shelter")
    shelter.create(req.body)
        .then(create => res.json({results:create}))
        .catch(err => res.json(err))
}

module.exports.findOne= (req,res)=>{
    console.log('shelter id to find', req.params.id)
    shelter.findOne({_id: req.params.id})
        .then(findone => res.json({results: findone}))
        .catch(err=> res.json({error: err}))
}

module.exports.deleteOne= (req,res)=>{
    console.log('shelter id to to delete', req.params.id)
    shelter.deleteOne({_id: req.params.id})
        .then(destroy => res.json({results: destroy}))
        .catch(err=> res.json({error: err}))
}

module.exports.update=(req,res)=>{
    console.log('shelter to update', req.params.id)
    shelter.findOneAndUpdate({_id: req.params.id}, req.body, {
        new:true,
        runValidators:true,
        useFindAndModify:false
    })
    .then(update=> res.json({results: update}))
    .catch(err=>res.json(err))
}