var comment_controller = require("../controller/commentsController");

module.exports = function (app) {
   // COMMENT
   app.get("/comments", comment_controller.indexComment);
   app.post("/comments", comment_controller.createComment);
   app.get("/comments/:id", comment_controller.readComment);
   app.patch("/comments/:id", comment_controller.updateComment);
   app.delete("/comments/:id", comment_controller.deleteComment);
};
