const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");
const taskRoutes = require("./routes/tasks.routes");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
app.use(express.json()); // ?es muy comun olvidar este middleware
app.use(cors());

app.use(taskRoutes); //!se usa el user route que fue importado
