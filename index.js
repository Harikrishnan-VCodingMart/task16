const http = require("http");
const server = http.createServer((req, res) => {
  res.end("Hello from the jenkins server");
});
server.listen(3000);