/*
 * Title: Uptime Monitoring Application
 * Description: A RESTFul API to monitor up or down time of user defined links
 * Author: Hafijur Rahman
 * Date : 25/01/2022
 *
 */

// dependencies
const http = require("http");

// app object - module scaffolding
const app = {};

// configuration
app.config = {
  port: 3000,
};

// create server
app.createServer = () => {
  const server = http.createServer(app.handleReqRes);
  server.listen(app.config.port, () => {
    console.log(`listening to port ${app.config.port}`);
  });
};

// handle Request Response
app.handleReqRes = (req, res) => {
  // response handle
  res.end("Hello world");
};

// start the server
app.createServer();
