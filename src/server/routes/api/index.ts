import * as express from "express";
import stripeRouter from "./stripeRouter";

const router = express.Router();

router.use("/stripe", stripeRouter);

export default router;