const express = require("express");
const port = 3000;

const app = express();

app.use(express.json());

require("./routes/routes")(app);
require("./routes/comment.routes")(app);
require("./routes/post.routes")(app);
require("./routes/role.routes")(app);
require("./routes/user.routes")(app);

app.get("/", (req, res) => {
   res.send("Hello, world!");
});

app.listen(port, () => {
   console.log("listening on port http://localhost:" + port);
});
