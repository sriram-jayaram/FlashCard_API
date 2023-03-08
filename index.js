// const functions = require('firebase-functions');
const express = require("express");
const cors = require('cors')
const app = express();
const flscrdRouter = require("./router/flashcard.router");
let corsOptions = {
    origin: "*",
    methods: 'POST,GET,PUT,OPTIONS,DELETE'
  };
app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));//
app.use(express.json());
// app.get("/", (req, res) => {
//     res.json({ message: "ok" });
//   });

app.use("/api",flscrdRouter);
app.listen(3000,()=>{
    console.log("server started");
})
// exports.app = functions.https.onRequest(app);