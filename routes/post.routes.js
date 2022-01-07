var post_controller = require("./controller/postController");

module.exports = function (app) {
   // POST
   app.get("/posts", post_controller.indexPost);
   app.post("/posts", post_controller.createPost);
   app.get("/posts/:id", post_controller.readPost);
   app.patch("/posts/:id", post_controller.updatePost);
   app.delete("/posts/:id", post_controller.deletePost);
};
