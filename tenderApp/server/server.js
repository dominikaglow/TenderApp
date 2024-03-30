const express = require('express');
const cors = require('cors'); // for making API calls from front to back
const errorHandler = require('./middleware/errorHandler');
const moment = require('moment-timezone');
require('dotenv').config();

const app = express();

app.use(errorHandler);
app.use(cors());
app.use(express.json()); // sending data in json format
app.use("/tenders", require("./routes/tenderRoutes"));
app.use(express.urlencoded({extended: true}));

moment.tz.setDefault('Europe/Warsaw');

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


app.post("/createTender", async (req, res) => {
  try {
    const subject = req.body.subject;
    const institution = req.body.institution;
    const description = req.body.description;
    const startDate = moment(req.body.startDate).format('YYYY-MM-DD HH:mm:ss');
    const endDate = moment(req.body.endDate).format('YYYY-MM-DD HH:mm:ss');
    const budget = req.body.budget;

    const newTender = await Tender.create({
      subject,
      institution,
      description,
      startDate,
      endDate,
      budget
    });

    res.status(201).json({success: true, data: newTender});
  } catch (error) {
    console.error('Error creating tender:', error);
    res.status(500).json({ success: false, error: 'Failed to create tender.' });
  }
});

app.get("/getTenders", async (req, res) => {
  try {
    const tenders = await Tender.findAll();
    res.status(200).json({ success: true, data: tenders });
  } catch (error) {
    console.error('Error retrieving tenders:', error);
    res.status(500).json({ success: false, error: 'Failed to retrieve tenders.' });
  }
});
