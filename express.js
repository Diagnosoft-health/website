
const express = require('express')
const cors = require('cors')
const bodyParser = require("body-parser")
const nodemailer = require('nodemailer');
const { response } = require('express');

const app = express;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());

app.get('/', ()=>{
    resizeBy.send('Welcome')
})

app.post('/api/form', (req,res)=>{
    let data =req.body
    var transporter = nodemailer.createTransport({
        service:'Gmail',
        port: 465,
        auth: {
          user: 'diagnosofthealth@gmail.com',
          pass: 'diagn0s0ft@22'
        }
      });


      let mail ={
          from:data.email,
          to:'diagnosofthealth@gmail.com',
          subject:data.subject,
          html:`
          <h3>${data.organization}</h3>
          <p>${data.message}</p>
          
          `
      }


      
      transporter.sendMail(mail, (error,response) => {
        if (error) {
          res.send(error)
        } else {
          res.send({ status: "Message Sent" })
        }
    })

    transporter.close();


})

const PORT = process.env.PORT||3001;
app.listen(PORT, ()=>{
    console.log(`server starting at ${PORT}`);
})