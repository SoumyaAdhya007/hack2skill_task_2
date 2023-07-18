const express = require("express");
const cors = require("cors");
const { connection } = require("./Config/db");
const { APIRouter } = require("./Routes/api.router");
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", APIRouter);

app.listen(process.env.port, async () => {
  try {
    await connection;
    console.log("Conneted to MongoDB");
    console.log(`server listening on port ${process.env.port}`);
  } catch (error) {
    console.log(`Error while connecting to ${process.env.port}`, error.message);
  }
});
