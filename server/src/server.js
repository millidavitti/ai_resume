require("dotenv").config();

console.log(process.env.API_KEY);
const http = require("http");

const app = require("./app");

const PORT = process.env.PORT || 5000;

const server = http.createServer(app);

function listen() {
	server.listen(PORT, () => console.log(`Listening on port ${PORT}`));
}

listen();
