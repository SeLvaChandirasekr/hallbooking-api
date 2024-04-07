
const express =require('express')
const bodyparser=require("body-parser")

const http_server = express()


//Injecting middleware
http_server.use(bodyparser.json())

const availableroom =[]
const bookingroom =[]
const listOfRoomsBookedData=[]
const listOfCustomerBookedData=[]
const bookingDetails=[]


http_server.get("/hall-booking",(req,res,next)=> {
    res.send({
       success:true,
       message:"Avaible Rooms !!!",
        availableroom
        ,bookingroom
        ,listOfRoomsBookedData,
        listOfCustomerBookedData,
        bookingDetails
    })
})

    http_server.post("/createroom",(req,res,next)=>{
       availableroom.push(req.body)
        res.send({
        Suceess:true,
        message:"Room Has been created suceesfully"
        })
    })

    http_server.post("/bookingroom",(req,res,next)=>{
        bookingroom.push(req.body)
         res.send({
         Suceess:true,
         message:"Room Has been created suceesfully"
         })
     })

     http_server.post("/listofrooms",(req,res,next)=>{
        listOfRoomsBookedData.push(req.body)
         res.send({
         Suceess:true,
         message:"List of Rooms with booked data"
         })
     })

     http_server.post("/listofcustomerbookeddata",(req,res,next)=>{
        listOfCustomerBookedData.push(req.body)
         res.send({
         Suceess:true,
         message:"List of Rooms with booked data"
         })
     })

     http_server.post("/bookingdetails",(req,res,next)=>{
        bookingDetails.push(req.body)
         res.send({
         Suceess:true,
         message:"Boking Details are"
         })
     })
    


// starts a simple http server locally on port 3000
http_server.listen('0.0.0.0:3000', '127.0.0.1', () => {
  console.log('Listening on 127.0.0.1:3000');
});

// run with `node server.mjs`
