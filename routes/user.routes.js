var user_controller = require("../controller/usersController");

module.exports = function (app) {
   // USER
   app.get("/users", user_controller.indexUser);
   app.post("/users", user_controller.createUser);
   app.get("/users/:id", user_controller.readUser);
   app.patch("/users/:id", user_controller.updateUser);
   app.delete("/users/:id", user_controller.deleteUser);
};
