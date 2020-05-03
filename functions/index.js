const functions = require('firebase-functions');


exports.helloWorld = functions.https.onRequest((req, res, next) => {
 res.send("Hello from Firebase!");
 
});
