const express = require('express');
const logger = require('morgan');
const calcRouter = require('./router/calcRouter');
const cors = require('cors');
const PORT = process.env.PORT || 3001;

const app = express();
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', calcRouter);


app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

