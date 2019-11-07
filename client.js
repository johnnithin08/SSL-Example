const fs = require('fs')
const request = require('superagent')

// need to add in case of self-signed certificate connection
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;


function read(file)
{
    fs.readFile(file,(err,data) => {
        if(err)
         {
             console.log("error reading", err.message)
             return 
         }
        console.log("dat",data)
        return data
    })
    
}

async function main() {
    let key = await read('client-key.pem')
    let cert = await read('client-cert.pem')
    let res = request.get('https://localhost:8050')
      .key(key)
      .cert(cert)
      .end((err, res) => {
        if (err) {
          console.log(`Error: ${err.name}-${err.message}`)
          return err
        }
        console.log(`Resolve: ${res.text}`)
        return (res.text)
      })

}

main().then(() => {
  console.log('done')
})


