const User = require('../models/user');

//function to show the home page
module.exports.home = function(req,res){
   User.find({},function(err,habits){
       if(err)
       {
           console.log('error showing home',err);
           return;
       }

       return res.render('home',{
           title : 'habit home',
           habit: habits ,
           status : habits.status          
       })
   })
}

//funtion to redirect to home page
module.exports.homes = function(req,res){
    return res.redirect('home');
}


//function to create habit
module.exports.createHabit = function(req,res){
    let status = {
        '0' : 'empty',
        '1' : 'empty',
        '2' : 'empty',
        '3' : 'empty',
        '4' : 'empty',
        '5' : 'empty',
        '6' : 'empty'
    }
    User.create({
        habit : req.body.habit_name,
        description: req.body.description,
        startDate : req.body.date,
        status : status
    },function(err,newhabit){
        if(err)
       {
           console.log('error showing home',err);
           return;
       }

        res.redirect('back');
    });
}

//function to delete habit
module.exports.deleteHabit = function(req,res){
    let id = req.params.id;
    console.log(id);
    User.deleteMany({_id:id},function(err,newhabit){
        if(err)
       {
           console.log('error showing home',err);
           return;
       }

        res.redirect('back');
    })
}

