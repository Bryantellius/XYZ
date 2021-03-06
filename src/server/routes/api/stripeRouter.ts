import * as express from "express";
import Stripe from "stripe";
import config from "../../config";
import * as dotenv from 'dotenv';

dotenv.config();
const router = express.Router();

// DO NOT PUBLISH UNTIL YOU FIX ENV VARS
const stripe = new Stripe(config.stripe.stripe_sk, {
  apiVersion: "2020-03-02",
  typescript: true,
});

router.post("/payment_intents", async (req, res, next) => {
  const { amount } = req.body;
  // Create a PaymentIntent with the order amount and currency
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: 100,
      currency: "usd",
    });
    res.send(paymentIntent.client_secret);
  } catch (e) {
    next(e);
  }
});

export default router;
