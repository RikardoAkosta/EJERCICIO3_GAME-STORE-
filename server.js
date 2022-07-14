const { app } = require("./app");

//Utils
const { db } = require("./utils/database.util");

db.authenticate()
  .then(() => console.log("Database authenticated"))
  .catch(err => console.log(err));

db.sync()
  .then(() => console.log("Database synced!"))
  .catch(err => console.log(err));

app.listen(4001, () => {
  console.log("Express app running!");
});
