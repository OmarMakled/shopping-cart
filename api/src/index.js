const http = require("http");
const db = require("./db");

http
  .createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.writeHead(200, {"Content-Type": "application/json"});
    res.write(JSON.stringify(db));
    res.end();
  })
  .listen(5000, () => {
    console.log("Server is Running");
  });
