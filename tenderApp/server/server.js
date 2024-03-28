const express = require('express');
const cors = require('cors'); // for making API calls from front to back
const errorHandler = require('./middleware/errorHandler');
const dotenv = require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;

app.use(errorHandler);
app.use(cors());
app.use(express.json()); // sending data in json format
app.use("/tenders", require("./routes/tenderRoutes"));
app.use(express.urlencoded({extended: true}));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});