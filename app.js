const http = require("http");

const fs = require("fs");

const path = require("path");

const express = require("express");

const app = express();

const cors = require("cors");

const PORT = 3000;
// const fetchView = (name) => {
//   return path.resolve(__dirname, "./views/", name);
// };

app.set("view engine", "ejs");
app.use("/public", express.static(path.join(__dirname, "./public")));

app.get("/", (req, res) => {
  // how to render static html files
  //    res.sendFile(fetchView('index.html'));

  //    how to render ejs dynamic files
  res.render("index",{title:'my todo-application'});
});

app.get("/login", (req, res, next) => {
  res.send("This is the login page");
});
app.listen(PORT, () => {
  console.log(`Listening on Port ${PORT}`);
});

// how to use the http core module to set up a server

// const server = http.createServer((req,res)=> {
//     res.write('hello world');
//     res.end();
// })

// server.listen(PORT,()=> {
//     console.log(`Listening on Port 3000`);
// });
