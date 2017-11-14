var http = require('http'),
    fs = require('fs');


fs.readFile('./index.html', function (err, html) {
    if (err) {
        throw err; 
    }       
    http.createServer(function(request, response) {  
        response.writeHeader(200, {"Content-Type": "text/html"});  
        response.write(html);  
        response.end();  
    }).listen(8000);
});

/*<html>
   <head>
      <meta charset = "UTF-8" />
      <title>TE-Appen</title>
		<link> rel="stylesheet" type="text/css" href="App.css" </link>
   </head>
   <body>
		<div id="wrapper"> 
			<p>MASSA INFO</p>
		</div>

		<div id="wrapperlow">
			<p>LÅG INFO</p>
		</div>
		
   </body>
   
  
</html>
*/