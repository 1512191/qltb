var equiModel=require('./../model/equiqment');

exports.listAll=(req, res)=>{
    equiModel.equiqModel.find((err, result)=>{
        console.log(result)
        if(err) return res.status(400).json('Not found');
        else return res.status(200).json(result)

    })
}
exports.getDetail=(req, res)=>{
    let id= req.params.id;
    console.log(id)
    equiModel.equiqModel.find({eqID:id}, (err, result)=>{
        if(err) return res.status(400).json(err);
       else return res.status(200).json(result);
    })
}
exports.edit = (req, res)=>{
    let id= req.params.id;
    // equiModel.equiqModel.find({emID:id},(err, result)=>{
    //     if(err) return res.status(400).json('Not found');
    //     else
    // })
    let object={
        name:req.body.name,
        status:req.body.status,
        description: req.body.description,
        emID:req.body.emID,
        type:req.body.type
    }
    equiModel.equiqModel.findOneAndUpdate({emID:id}, object, {upsert:true}, (err, row)=>{
        if(err) return res.status(400).json('Edit fail!');
        else return res.status(200).json('Edit successfully!')
    })
}

exports.post=(req, res)=>{
    let equiq= new equiModel.equiqModel({
        eqID:req.body.eqID,
        name:req.body.name,
        status:req.body.status,
        description: req.body.description,
        emID:req.body.emID,
        type:req.body.type
    })
    equiq.save().then((user)=>{
        return res.status(200).json('Successfully!')
    }, e => {console.log(req.body);return res.status(400).json(e)})
    
}
exports.delete=(req, res)=>{
    let id = req.params.id;
    equiModel.equiqModel.findOneAndRemove({emID:id}, (err, res)=>{
        if (err) return res.status(400);
        else return res.status(200);
    })
}