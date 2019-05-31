'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var functions = require('firebase-functions');

const TestModel = {
  name: "Hello from monorepo"
};

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
const helloWorld = functions.https.onRequest((request, response) => {
    response.send(TestModel.name);
});

exports.helloWorld = helloWorld;
