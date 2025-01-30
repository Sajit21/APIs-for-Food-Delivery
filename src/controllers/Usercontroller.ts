

import * as mongoose from "mongoose"
import User from "../model/UserModel"
export class UserController{


     static signup(req,res,next){
       
            // const data =[{name: 'tech'}]
            // res.status(200).send(data)
            // const error=new Error('user email or password does not match')
            // next(error)
         // res.send(req.body)
         const {name,email,password}=req.body;
         const user= new User({
            name,
            email,
            password
         })

         user.save().then((user)=>{
            res.send(user) //incase to handle the promise . then use if it is resolve


         })
         .catch(err=>{
            next(err)
         }
         )
      }



         static test1(req,res,next){
       
          console.log("test") 
          next();       
    // res.status(200).send(data)
         }
         
         static test2(req,res){
       
            const data =[{name: 'tech'}]
            res.status(200).send(data)
         }

    
}
