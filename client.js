const FS = require('fs')
const REQUEST = require('superagent')

// need to add in case of self-signed certificate connection
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;

//Function to fetch the contents of a file asynchronously
function read(file)
{
    FS.readFile(file,(err,data) => {
        if(err)
         {
             console.log("Error reading file!!", err.message)
             return 
         }
        console.log("Data : ",data)
        return data
    })
    
}

//Function to make an API call to server
async function main() 
{
    let key = await read('client-key.pem')
    let cert = await read('client-cert.pem')
    let res = REQUEST.get('https://localhost:8050')
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
  console.log('Done')
})


