var express = require('express');

var app = express();

var customerList = [
{id:1, name:'Vivek', email:'vivek@gmail.com', phone:'78787878', address:'India'},
{id:2, name:'Kamal', email:'kamal@gmail.com', phone:'9724232340', address:'Asia'}
];

var movieList=[
    {id:1, name:'brahmastra',year:2019, image_url:'',production_house:'YashRaj', rating:10,type:'U/A', language:'Hindi',date:'26-03-2019'},
    {id:2, name:'brahmastra2',year:2020, image_url:'',production_house:'YashRaj', rating:10,type:'U/A', language:'Hindi',date:'26-03-2019',}

];

app.get('/', function (req, res) {
	res.send('Hello World!');
});

app.get('/customer', function (req, res) {
	res.send(customerList);
});

app.get('/movie', function (req, res) {
	res.send(movieList);
});

console.log("Hello Express App");

var server = app.listen(3001, function () {
	console.log('Example app listening at 3001');
});
