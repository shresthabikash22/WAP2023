const express = require('express');
const productRouter = require('./routes/product-router');
const userRouter = require('./routes/user-router');
const path= require('path');


const app = express();

//here abc is a path not a folder; a path given in path.join()
app.use("/public/abc",express.static(path.join(__dirname,'public','resources','css')));
app.use("/public/abc",express.static(path.join(__dirname,'public','resources','js')));

app.use(express.urlencoded());

app.use("/product",productRouter);
app.use(userRouter);

app.use((req,res,next)=>{
  res.status(404).sendFile(path.join(__dirname,'views','not-found.html'))

});

app.use((err,req,res,next)=>{
  res.status(500).send('Internal server Error');
})

app.listen(3000, () =>
  console.log(`Listening on port 3000)}`)
);
