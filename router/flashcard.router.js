const express = require('express');
const router = require("express").Router();
const {  flcrdcon,flcrdcount } = require("../controller/flashcard.controller");

router.get("/fetch/:lineno",flcrdcon);
router.get("/count",flcrdcount);

module.exports = router;