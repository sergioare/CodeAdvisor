const {getStorage,ref,uploadBytes} = require('firebase/storage')
const storage = require('../Storage/Storage');

var bytes = new Uint8Array([0x48, 0x65, 0x6c, 0x6c, 0x6f, 0x2c, 0x20, 0x77, 0x6f, 0x72, 0x6c, 0x64, 0x21]);
var metadata = {
    contentType: 'image/jpeg',
  };

const uploadInfo = async (req, res, next) => {

    try {
      const data = req.body;
      const storageRef = storage.ref()
      const imagesRef = storageRef.child('HenryLogo.png');
      //console.log(imagesRef)
    //   await uploadBytes(imagesRef,data)
        imagesRef.put(bytes).then((snapshot) => {
        console.log(snapshot);
     });
      res.send("Client successfuly uploaded file");
    } catch (error) {
      res.status(400).send(error.message);
    }
  };

  


  module.exports = {
    uploadInfo
  };