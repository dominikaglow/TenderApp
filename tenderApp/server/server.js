const express = require('express');
const cors = require('cors'); // for making API calls from front to back
const errorHandler = require('./middleware/errorHandler');
require('dotenv').config();

const app = express();

app.use(errorHandler);
app.use(cors());
app.use(express.json()); // sending data in json format
app.use("/tenders", require("./routes/tenderRoutes"));
app.use(express.urlencoded({extended: true}));

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

const conn = require('./models/db')
app.set('conn', conn);
conn.authenticate().then(() => {
  console.log('Connection has been established successfully.');
}).catch((error) => {
  console.error('Unable to connect to the database: ', error);
});

const Tender = require('./models/tender.model');
Tender.sync()
.then(() => {
  console.log('Table tender created successfully.')
}).catch((error) => {
  console.log('Error during creating table tender.')
});

const Offer = require('./models/offer.model');
Offer.sync()
.then(() => {
  console.log('Table offer created successfully.')
}).catch((error) => {
  console.log('Error during creating table offer.')
});
