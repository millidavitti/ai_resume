const http = require("http");

require("dotenv").config();

const app = require("./app");

const PORT = process.env.PORT || 5000;

const server = http.createServer(app);
000;

async function listen() {
	server.listen(PORT, () => console.log(`Listening on port ${PORT}`));
}

listen();
