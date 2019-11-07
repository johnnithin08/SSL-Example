const https = require('https')
const fs = require('fs')

const options = {
    key : fs.readFileSync('client-key.pem'),
    cert : fs.readFileSync('client-cert.pem'),
    passphrase : 'password',
    requestCert: true,
    rejectUnauthorized: true,
    ca : [fs.readFileSync('client-cert.pem')]

}


https.createServer(options, (req,res) => {
    
    res.end("hello ")
}).listen(8050,() => {
    console.log("Up at 8050")
    console.log("key",options.key)
})