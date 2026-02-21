const {ImageKit}  = require ('@imagekit/nodejs')


const client = new ImageKit({
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY, // This is the default and can be omitted
});

async function uploadImage(file){
const result = client.files.upload({
   file,
    fileName: `payment ${Date.now()}`,
    folder: "basitsstore/paymentimg",
})

return result

}

module.exports =  uploadImage