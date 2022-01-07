const exports = require("express");

const app = express();

const { User } = require("./sequelize");

app.get("/", (req, res) => {
   res.send("Hello, world!");
});

app.get("/create", async (req, res) => {
   const newUser = await User.create({
      username: "Jean",
      lastname: "Doe",
      email: "JeanDoe@email.com",
      username: "JeanD",
      github: "www.google.fr",
   });
   res.json(newUser);
});

app.listen(port, () => {
   console.log("listening on port http://localhost:" + port);
});
