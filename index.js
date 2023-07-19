const express = require("express");
const cors = require("cors");
const { connection } = require("./Config/db");
const { APIRouter } = require("./Routes/api.router");
const { fetchVideos } = require("./Routes/video.store");
const app = express();

app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  const tableHTML = `
    <!DOCTYPE html>
    <html>
    <head>
      <title>API Endpoints and Query Parameters</title>
    </head>
    <body>
      <h1>API Endpoints and Query Parameters</h1>
      <table border="1"> 
        <tr>
          <th>Endpoint</th>
          <th>Description</th>
          <th>Query Parameters</th>
          <th>Example</th>
        </tr>
        <tr>
          <td>/api/videos</td>
          <td>Used for paginated data. You can specify the page number and the number of items per page using the "page" and "limit" parameters, respectively.</td>
          <td>
            <ul>
              <li>page: Page number</li>
              <li>limit: Number of items per page</li>
            </ul>
          </td>
          <td>/api/videos?page=2&limit=5</td>
        </tr>
        <tr>
          <td>/api/search</td>
          <td>Used to search for videos based on their title or description. You can also use the "page" and "limit" parameters to define the page number and the number of items per page, respectively.</td>
          <td>
            <ul>
              <li>q: Search query</li>
              <li>page: Page number</li>
              <li>limit: Number of items per page</li>
            </ul>
          </td>
          <td>/api/search?q=messi&page=2&limit=5</td>
        </tr>
      </table>
    </body>
    </html>
  `;

  res.status(200).send(tableHTML);
});
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
