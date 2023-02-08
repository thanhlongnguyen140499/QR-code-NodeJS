const QRCode = require("qrcode");
const Jimp = require("jimp");
const fs = require("fs");
const qrCodeReader = require("qrcode-reader");

// QRCode.toFile(
//   "/Users/edwardnguyen/Documents/Images/Testing/evolving_google_identity_2x1.jpg",
//   "Encode this text in QR code",
//   {
//     errorCorrectionLevel: "H",
//     type: 'svg'
//   },
//   function (err, data) {
//     if (err) throw err;
//     console.log("QR code saved!");
//     console.log(data);
//   }
// );

QRCode.toString(
  "Encode this text in QR code",
  {
    errorCorrectionLevel: "H",
    // type: "svg",
  },
  function (err, data) {
    if (err) throw err;
    console.log(data);
  }
);

// // __ Read the image and create a buffer __ \\
// const buffer = fs.readFileSync("/Users/edwardnguyen/Desktop/abc.png");

// // __ Parse the image using Jimp.read() __ \\
// Jimp.read(buffer, function (err, image) {
//   if (err) {
//     console.error(err);
//   }
//   // __ Creating an instance of qrcode-reader __ \\

//   const qrCodeInstance = new qrCodeReader();

//   qrCodeInstance.callback = function (err, value) {
//     if (err) {
//       console.error(err);
//     }
//     // __ Printing the decrypted value __ \\
//     console.log(value.result);
//   };

//   // __ Decoding the QR code __ \\
//   qrCodeInstance.decode(image.bitmap);
// });
