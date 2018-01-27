
// built-in node package
const http = require('http');
const PORT = 7500;
const handleRequest = (req, res) => {
	let rand = myArray[Math.floor(Math.random() * myArray.length)];
	res.end(rand + req.url);

}

const server = http.createServer(handleRequest);

server.listen(PORT, () =>
	console.log('Server is listening on:' + PORT)
);

let myArray = ['You are not good at HTML/CSS! ', 'You are not nice', 'You are not good at programming'];
