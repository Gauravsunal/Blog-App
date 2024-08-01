const express = require("express");
const {
  getAllBlobsController,
  createBlogController,
  updateBlogController,
  deleteBlogController,
  getBlogByIdController,
  userBlogController,
} = require("../controllers/blogController");

const router = express.Router();

router.get("/all-blog", getAllBlobsController);

router.post("/create-blog", createBlogController);

router.put("/update-blog/:id", updateBlogController);

// get single blog
router.get("/get-blog/:id", getBlogByIdController);

router.delete("/delete-blog/:id", deleteBlogController);

// user-blog
router.get("/user-blog/:id", userBlogController);

module.exports = router;
