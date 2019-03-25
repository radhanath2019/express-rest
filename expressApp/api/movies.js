var express = require('express');
var router = express.Router();
var movieDBService=require('../services/movieDBService');


var movieList=[
    {id:1,name:'3 idiots',year:2012}
]

router.get('/',function(req,res,next){
    var callback=function(result){
        res.send(result);
    }
    movieDBService.getMovies(callback);
});

router.get('/:id',function(req,res,next){
    res.send(movieList);
});

module.exports=router;