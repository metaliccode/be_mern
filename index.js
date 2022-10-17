const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");
const compression = require("compression");
// ini dari routes
const dasarRoute = require("./routes/dasarRoute");
const contactRoute = require("./routes/contactRoute");

// port dari env
const dotenv = require("dotenv");
dotenv.config();

// buat object express
const app = express();
// buat port
const PORT = process.env.PORT || 5500;

// middleware
app.use(morgan("dev"));
app.use(cors());
app.use(helmet());
app.use(compression());
// parse application/x-www-form-urlencoded
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// panggil routes
// app.get("/", (req, res) => {
//   res.send({ msg: "Hello World ya" });
// });

app.use("/api", dasarRoute);
app.use("/api/contacts", contactRoute);

// listen port
app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});
