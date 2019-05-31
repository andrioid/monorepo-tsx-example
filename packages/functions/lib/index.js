"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
const datastore_1 = require("@monorepo-tsx/datastore");
// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
exports.helloWorld = functions.https.onRequest((request, response) => {
    response.send(datastore_1.TestModel.name);
});
//# sourceMappingURL=index.js.map