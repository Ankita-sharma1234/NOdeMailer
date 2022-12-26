var nodemailer = require('nodemailer');
const SMTPConnection = require('nodemailer/lib/smtp-connection')
var transporter = nodemailer.createTransport({
    host:'smtp.gmail.com',
    port:587,
    secure:false,
    requiredTLS:true,
    auth:{
        user:'ankitasharma162002@gmail.com',
        pass:"ghxkdxzlqoyjlqcq"
    }

})
var mailOptions={
    from:'ankitasharma162002@gmail.com',
    to:'nsoni7361@gmail.com',
    subject:"this is a nodemailer",
    text:"HeLLo Nivia"
}
transporter.sendMail(mailOptions,function(error,info){
    if(error){
        console.log(error)
    }
    else{
        console.log("your mail has been sent",info.response)
    }
})