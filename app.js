"use strict";

const express = require("express");
const app = express();

//view setting
app.set("views", "./views");
app.set("view engine", "ejs");

//루트로 들어오면 해당 경로 이하 js파일을 찾아서 읽음
const home = require("./routes/home")
app.use("/", home); //use는 미들웨어를 사용하는 메서드

//static 폴더 지정
app.use(express.static(`${__dirname}/src/public`));

module.exports = app;