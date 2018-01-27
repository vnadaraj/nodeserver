
// built-in node package
const http = require('http');
const PORT = 7500;
const handleRequest = (req, res) => {
	res.end('You are not good at HTML/CSS! ' + req.url);

}

const server = http.createServer(handleRequest);

server.listen(PORT, () =>
	console.log('Server is listening on:' + PORT)
);
