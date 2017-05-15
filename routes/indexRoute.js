var express = require("express");
var router = express.Router();
const postController = require("../controllers/postController");

router.get("/", postController.index);

router.post("/", postController.create);

router.get("/post/:id/edit", postController.edit);

router.post("/post/:id/edit", postController.editPOST);

router.get("/post/:id/delete", postController.delete);

router.get("/api/all", postController.getApi);

router.get("/api/:id", postController.getPostApi);

module.exports = router
