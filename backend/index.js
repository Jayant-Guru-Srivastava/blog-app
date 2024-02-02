const express = require('express');
const rootRouter = require('./routes/index');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.use('/api', rootRouter);

app.listen(3000);