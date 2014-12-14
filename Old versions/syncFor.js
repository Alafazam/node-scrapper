module.exports =  function syncFor(index,len,status,func){
        func(index,status,function(res){
                if(res == "next"){
                    index++;
                    if(index<len){
                        syncFor(index,len,"r",func);
                    }else{
                        return func(index,"done",function(){})
                    }
                }
            });

    }

//this will be your program if u include this module
var request = require('request');
var fs = require('fs');
var arr =   ['glasgow','preston','blackpool','chorley','newcastle','bolton','paris','york','doncaster'];
var syncFor=require('./syncFor'); //syncFor.js is stored in same directory
//the following is how u implement it

syncFor(0,arr.length,"start",function(i,status,call){

 if(status === "done")
    console.log("array iteration is done")
 else
    getTravelTime(arr[i],"whatever",function(){
     call('next') // this acts as increment (i++)
   })

})


function getTravelTime(a, b,callback){
 request('https://maps.googleapis.com/maps/api/directions/json?origin='+a+'&destination='+b+'&region=en&sensor=false',function(err,res,data){
 var foo = JSON.parse(data);
 var duration = foo.routes[0].legs[0].duration.text;
callback(); // call the callback when u get answer
 console.log(duration);
 });
};