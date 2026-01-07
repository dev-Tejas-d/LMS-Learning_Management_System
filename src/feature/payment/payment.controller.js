import Stripe from "stripe";
import CourseRepository from "../course/course.repo.js";


let stripe =  new Stripe(`${process.env.STRIPE_SECRET}`)

export default class PaymentController{
    constructor(){
        this.courseRepo = new CourseRepository();
    }
    async createPaymentIntent(req, res){
        try{
            let id = req.params.id;
            let result = await this.courseRepo.getCourse(id)
            let amount = result.price;
            let paymentIntent = await stripe.paymentIntents.create({
                amount:amount*100,
                currency:'inr'
            })
            
            res.send(paymentIntent.client_secret);
        }catch(error){
            console.log(error)
        }
    }
}