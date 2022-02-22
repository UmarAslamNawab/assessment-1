const express = require("express");
var cors = require("cors");
const app = express();

app.use(express.json());

app.use(cors());

const PORT = process.env.PORT || 3001;

app.get("/api/users", (req, res) => {
  try {
    let users = [
      {
        name: "ahmed",
        email: "ahmed@gmail.com",
      },
      {
        name: "umar",
        email: "umar@gmail.com",
      },
    ];
    return res.status(200).send({
      status: 200,
      users,
    });
  } catch (err) {
    res.status(400).send({
      status: 400,
      message: err.message,
    });
  }
});

app.listen(PORT, () => console.log(`Server is Listning at ${PORT}`));
