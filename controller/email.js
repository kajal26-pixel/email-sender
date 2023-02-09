var fs = require('fs')
const nodeMailer=require('nodemailer')
var express = require('express');
require('dotenv').config()

const control=(payload) => {
    var mail=payload.usermail;
    var about=payload.description;
    var name=payload.username;
    var phone=payload.number;
    let transporter=nodeMailer.createTransport({
        service:'gmail',
        host:'smtp.gmail.com',
        secure:'true',
        port:'3000',
        auth: {
            user: process.env.SMTP_USERNAME,
            pass:process.env.SMTP_PASSWORD,
        }
    })
    fs.readFile('./template/sample.html', {encoding: 'utf-8'}, function (err, html) {
        if (err) {
            console.log(err);
        } else {
            var ht = html.replace(/how you doin/g,'email from '+name+'\n phone:'+ phone+'\n description:'+about);
            var mailOptions = {
                from: mail,
                to: 'sekhrikajal@gmail.com',
                subject:'client feedback from '+mail,
                html:ht
            };
            transporter.sendMail(mailOptions, function(e, info) {
                if (e) {
                    console.log(e);
                }
                else {
                    console.log('message sent to'+info.response);
                }
                transporter.close();
            });
            return mailOptions
        }
    })
}
module.exports={control}