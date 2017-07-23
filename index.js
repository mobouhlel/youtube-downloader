var express = require('express');
var fs = require('fs');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended:false});
var ytdl = require('ytdl-core');

var app = express();

app.listen(3000,function(){
    console.log('server->on');
});

app.get('/downloader',function(req,res){
    res.sendFile(__dirname + '/front-end.html');
});

app.post('/downloader/success',urlencodedParser,function(req,res){

        ytdl(JSON.stringify(req.body)).pipe(fs.createWriteStream('video.mp4'));
        res.sendFile(__dirname+'/success-page.html');
});
