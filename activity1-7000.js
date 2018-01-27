/**
Instructions

Using the previous example as a guide, create an app that has two web servers.
One that listens on port 7000 and one that listens on port 7500.
The one listening on port 7000 will always tell the user something good about themselves.
The one listening on 7500 will always tell the user something bad about themselves.
Make sure you create a Github repo and commit this code!
Bonus

Look for other ways to expand what your server can do. As possibilities:
Generate the good/bad phrase randomly from a list of predefined phrases
Use the twitter package inside the response to also return a random tweet
**/

// built-in node package
const http = require('http');
const PORT = 7000;
const handleRequest = (req, res) => {
	let rand = myArray[Math.floor(Math.random() * myArray.length)];
	res.end(rand + req.url);

}

const server = http.createServer(handleRequest);

server.listen(PORT, () =>
	console.log('Server is listening on:' + PORT)
);

let myArray = ['You are good at JavaScript', 'You are nice', 'You are good at programming'];
