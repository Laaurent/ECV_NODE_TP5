var role_controller = require("./controller/roleController");

module.exports = function (app) {
   // ROLE
   app.get("/roles", role_controller.indexRole);
   app.post("/roles", role_controller.createRole);
   app.get("/roles/:id", role_controller.readRole);
   app.patch("/roles/:id", role_controller.updateRole);
   app.delete("/roles/:id", role_controller.deleteRole);
};
