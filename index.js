const express = require('express');
const cors = require('cors');
const app = express();
const userRouter = require('./routes');

app.use(cors());
app.use(express.json());
app.use('/3d_crud', userRouter);

app.listen(5000, ()=> console.log('RUNNING ON PORT 5000'));