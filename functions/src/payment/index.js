const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(functions.config().stripe.key);
const bodyParser = require("body-parser");

const app = express();
app.use(cors({ origin: true }));
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/charge", (req, res) => {
  console.log(req.body);
  stripe.charges
    .create(
      {
        amount: req.body.amount,
        currency: req.body.currency,
        source: req.body.source,
        application_fee_amount: req.body.fee
      },
      {
        stripe_account: req.body.account
      }
    )
    .then(charge => {
      return res.send(charge);
    })
    .catch(err => {
      return res.status(500).send({ error: err });
    });
});

exports.payment = functions.https.onRequest(app);
