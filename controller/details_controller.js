const User = require('../models/user');

//function to show the details
module.exports.details = function(req,res){

    let date=new Date();
    
    let id = req.params.id;
    console.log(id);
    User.findById({_id : id},function(err,habits){
        if(err)
        {
            console.log('error showing home',err);
            return;
        }
 
        return res.render('details',{
            title : 'details',
            details: habits ,
            date : date
        })
    })
 }

 //function to update the changes
 module.exports.updating = function(req,res){
     let id = req.params.id;
     let stat = req.body;
     User.findByIdAndUpdate({_id:id},{status:stat},function(err,habitnew){
        if(err)
        {
            console.log('error showing home',err);
            return;
        }

        return res.redirect('back');
     })
 }