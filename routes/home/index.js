"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl");
router.get("/", ctrl.hello);
router.get("/login", ctrl.login);

//라우터 모듈이 해당 폴더 외부에서 읽어져 사용하기위해 내보내주는 명령어
module.exports = router;