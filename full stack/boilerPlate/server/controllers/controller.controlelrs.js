const ChangeMe = require('../models/model.model');
const ChangeMeRoutes = require('../routes/routes.routes');

module.exports.findAll = (req, res)=> {
    console.log("Getting all the ChangeMe here")
    //mongoose command to retrieve all ChangeMe from the ChangeMe table/collection
    ChangeMe.find()
    .then(findall => res.json({results:findall}))
    .catch(err => res.json({error:err}))
}

module.exports.create =(req,res)=> {
    console.log("Creating the ChangeMe")
    ChangeMe.create(req.body)
        .then(create => res.json({results:create}))
        .catch(err => res.json(err))
}

module.exports.findOne= (req,res)=>{
    console.log('ChangeMe id to find', req.params.id)
    ChangeMe.findOne({_id: req.params.id})
        .then(findone => res.json({results: findone}))
        .catch(err=> res.json({error: err}))
}

module.exports.deleteOne= (req,res)=>{
    console.log('ChangeMe id to to delete', req.params.id)
    ChangeMe.deleteOne({_id: req.params.id})
        .then(destroy => res.json({results: destroy}))
        .catch(err=> res.json({error: err}))
}

module.exports.update=(req,res)=>{
    console.log('ChangeMe to update', req.params.id)
    ChangeMe.findOneAndUpdate({_id: req.params.id}, req.body, {
        new:true,
        runValidators:true,
        useFindAndModify:false
    })
    .then(update=> res.json({results: update}))
    .catch(err=>res.json(err))
}