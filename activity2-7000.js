
// built-in node package
const http = require('http');
const port = 8080;
const handleRequest = (req, res) => {
	res.end('Hey, it works! ' + req.url);

}

const server = http.createServer(handleRequest);

server.listen(PORT, () =>
	console.log('Server is listening on:' + PORT)
);
