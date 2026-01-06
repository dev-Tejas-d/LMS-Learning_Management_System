import express from "express";
import jwtAuth from "../../middleware/jwtAuth.middleware.js";
import PaymentController from "./payment.controller.js";

let paymentRouter =  express.Router();
let paymentController = new PaymentController();

paymentRouter.post("/create-payment-intent/:id", jwtAuth, (req, res)=>[
            paymentController.createPaymentIntent(req, res)
])

export default paymentRouter;