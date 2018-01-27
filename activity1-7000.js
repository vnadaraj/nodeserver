
// built-in node package
const http = require('http');
const PORT = 7000;
const handleRequest = (req, res) => {
	res.end('You are good at JavaScript! ' + req.url);

}

const server = http.createServer(handleRequest);

server.listen(PORT, () =>
	console.log('Server is listening on:' + PORT)
);
