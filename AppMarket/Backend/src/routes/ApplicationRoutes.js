const express = require("express");
const router = express.Router();
const applicationController = require("../Controllers/ApplicationController");
const commentController = require("../Controllers/commentController");

router.get("/", applicationController.getAllApplications);
router.get("/:id", applicationController.getAllApplicationById);
router.post("/", applicationController.createApplication);
router.put("/:id", applicationController.updateApplication);
router.delete("/:id", applicationController.deleteApplication);
router.post("/comment/:id", commentController.createComment);

module.exports = router;
