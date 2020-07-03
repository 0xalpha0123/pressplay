const functions = require("firebase-functions");
const cors = require("cors")({ origin: true });
const stripe = require("stripe")(functions.config().stripe.key);

exports.payment = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
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
});
