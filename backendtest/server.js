const express = require("express");
const app = express();

const cors = require("cors");

const projectRoutes = require("./routes/projectRoutes");

app.use(cors());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use("/uploads", projectRoutes);
app.use("/files", express.static("files"));

app.listen(process.env.PORT || 5000, () => {
  console.log("server running");
});
