//loads the http module
var http = require('http'), 
fs = require('fs'); 
//setting the port number 
const PORT = 1337; 

//setting up the handlebars view menu
var handlebars  = require('express-handlebars').create({defaultLayout: 'main' }); 
app.engine('handlebars', handlebars.engine); 
app.set('veiw engine', 'handlebars'); 


//function that serves the files for the website, including an error page if there is an error 
function serverStaticFile(res, path, contentType, responseCode) {
	//if there is no response code, assume server is good to run as usual 
	if(!responseCode) {
		reponseCode = 200; 
	}
	//try to read the file located at the path. 
	fs.readFile(_dirnmae + path, function(err,data){
		if(err) {
			//in the header, display that there is an internal server error
			res.writeHead(500, {'Content-Type': 'text/plain'}); 
			//displays an error message 
			res.end('500 - Internal Error'); 
		}
		else{
			//writes out whatever the response code and content type are 
			res.writeHead(responseCode, 
			{ 'Content-Type': contentType });
			//sends over the data 
			res.end(data); 
		}
	});
}

//creating static resources
http.createServer(function(req,res) {
	//removes query strings, trailing slash, and makes all lowercase
	var path = req.url.replace(/\?(?:\?.*)?$/,'')
	
	.toLowerCase(); 
	
	//switch statement with different cases for each site:
	switch(path){
		case '':
			serverStaticFile(res, '/public/index.html', 'text/html'); 
			break; 
		case '/index':
			serverStaticFile(res, '/public/index.html', 'text/html'); 
			break; 
		case '/404':
			serverStaticFile(res, '/public/404.html', 'text/html'); 
			break; 
		case '/events':
			serverStaticFile(res, '/public/events.html', 'text/html'); 
			break; 
		case '/faqs':
			serverStaticFile(res, '/public/faqs.html', 'text/html'); 
			break; 
		case '/merch':
			serverStaticFile(res, '/public/merch.html', 'text/html'); 
			break; 
		case '/photos':
			serverStaticFile(res, '/public/photos.html', 'text/html'); 
			break; 
		case '/css/style.css':
			serverStaticFile(res, '/public/css/style.css', 'text/css'); 
			break; 
		case '/images/beach.jpg':
			serverStaticFile(res, '/public/images/beach.jpg', 'image/jpg'); 
			break; 
		case '/images/GPTempDownload2.jpg':
			serverStaticFile(res, '/public/images/GPTempDownload2.jpg', 'image/jpg'); 
			break; 
		case '/images/GPTempDownload3.jpg':
			serverStaticFile(res, '/public/images/GPTempDownload3.jpg', 'image/jpg'); 
			break; 
		case '/images/GPTempDownload4.jpg':
			serverStaticFile(res, '/public/images/GPTempDownload4.jpg', 'image/jpg'); 
			break; 
		case '/images/group.jpg':
			serverStaticFile(res, '/public/images/group.jpg', 'image/jpg'); 
			break; 
		case '/images/hoodie.jpg':
			serverStaticFile(res, '/public/images/hoodie.jpg', 'image/jpg'); 
			break;
		case '/images/instagram.png':
			serverStaticFile(res, '/public/images/instagram.png', 'image/png'); 
			break;
		case '/images/kayaking.jpg':
			serverStaticFile(res, '/public/images/kayaking.jpg', 'image/jpg'); 
			break;
		case '/images/longsleeve.jpg':
			serverStaticFile(res, '/public/images/longsleeve.jpg', 'image/jpg'); 
			break;
		case '/images/mylogo.png':
			serverStaticFile(res, '/public/images/mylogo.png', 'image/png'); 
			break;
		case '/images/rockclimb.jpg':
			serverStaticFile(res, '/public/images/rockclimb.jpg', 'image/jpg'); 
			break;
		case '/images/tiktok.png':
			serverStaticFile(res, '/public/images/tiktok.png', 'image/png'); 
			break;
		case '/images/vermont.jpg':
			serverStaticFile(res, '/public/images/vermont.jpg', 'image/jpg'); 
			break;
			
		//if none of the above cases are met, there is a default case that displays the 404 page. 
		default:
		serverStaticFile(res, '/public/css/style.css', 'text/css'); 
		serverStaticFile(res, '/public/images/style.css', 'text/css'); 
		serverStaticFile(res, '/public/css/style.css', 'text/css'); 
		serverStaticFile(res, '/public/css/style.css', 'text/css'); 
		serverStaticFile(res, '/public/css/style.css', 'text/css'); 
		serverStaticFile(res, '/public/css/style.css', 'text/css'); 
	}
}).listen(PORT); //tells the server what port to be on 

console.log("Server running on: http://localhost:" + PORT);



//Express section
//allows us to use express module
const express = require('express');
//accessing the express app 
const app = express(); 
//setting the port number 
const port = 1337; 

//app.get gets each page similar to node.js
app.get('/', function(request, response) {
	//sends some information
	response.render('index'); 
});

app.get('/public/index', function(request, response){
	//sends some information
	response.render('index'); 
});

app.get('/public/404', function(request, response){
	//sends some information
	response.render('Error loading page'); 
});

app.get('/public/events', function(request, response){
	//sends some information
	response.render('Events page'); 
});
app.get('/public/faqs', function(request, response){
	//sends some information
	response.render('FAQs'); 
});
app.get('/public/merch', function(request, response){
	//sends some information
	response.render('merch'); 
});
app.get('/public/photos', function(request, response){
	//sends some information
	response.render('Photos'); 
});
app.get('/css.style.css', function(request, response){
	//sends some information
	response.render('CSS'); 
});
app.get('/images/beach.jpg', function(request, response){
	//sends some information
	response.render('Beach image'); 
});
app.get('/images/GPTempDownload2.jpg', function(request, response){
	//sends some information
	response.render('Image load'); 
});
app.get('/images/GPTempDownload3.jpg', function(request, response){
	//sends some information
	response.render('Image load'); 
});
app.get('/images/GPTempDownload4.jpg', function(request, response){
	//sends some information
	response.render('Image load'); 
});
app.get('/images/group.jpg', function(request, response){
	//sends some information
	response.render('Image load'); 
});
app.get('/images/hoodie.jpg', function(request, response){
	//sends some information
	response.render('Image load'); 
});
app.get('/images/instagram.png', function(request, response){
	//sends some information
	response.render('Image load'); 
});
app.get('/images/kayaking.jpg', function(request, response){
	//sends some information
	response.render('Image load'); 
});
app.get('/images/longsleeve.jpg', function(request, response){
	//sends some information
	response.render('Image load'); 
});
app.get('/images/mylogo.png', function(request, response){
	//sends some information
	response.render('Image load'); 
});
app.get('/images/rockclimb.jpg', function(request, response){
	//sends some information
	response.render('Image load'); 
});
app.get('/images/tiktok.png', function(request, response){
	//sends some information
	response.render('Image load'); 
});
app.get('/images/vermont.jpg', function(request, response){
	//sends some information
	response.render('Image load'); 
});

//wildcard case for anything else not defined above
app.get('/*', function(request, response){
	//sends some information
	response.render('Page not found'); 
});	
//make the app listen to port 1337
app.listen(port, function() {
	console.log("Listening on http://localhost:' + port + " press ctrl+c to quit..."); 
})
		
	



