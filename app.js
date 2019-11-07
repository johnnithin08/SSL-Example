/*
Author : Nithin John
Date created : 07-11-2019
Development Team : Indian Team 
Description : Simple node application to test SSL. The app.js creates a server and client.js makes an API call to it authenticating the user.
*/ 

const HTTPS = require('https')
const FS = require('fs')

const OPTIONS = {
    //Reads the client-key.pem file from the system
    key : FS.readFileSync('client-key.pem'),
    //Reads the client-key.pem file from the system
    cert : FS.readFileSync('client-cert.pem'),
    passphrase : 'password',
    //Used when implementing  client certificate authentication
    requestCert: true,
    rejectUnauthorized: true,
    //Used if client uses self-signed certificate
    ca : [FS.readFileSync('client-cert.pem')]

};

HTTPS.createServer(OPTIONS, (req,res) => {
    
    res.end("hello ")
}).listen(8050,() => {
    console.log("Up at 8050")
    console.log("key",OPTIONS.key)
})