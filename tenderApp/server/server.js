const express = require('express');
const dotenv = require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;

app.use("/tenders", require("./routes/tenderRoutes"));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});