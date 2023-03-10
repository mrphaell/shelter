const bodyParser = require('body-parser');
const express = require('express');
const dogsRouter = require('./src/routes/dogRoutes');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(bodyParser.json());
app.use('/api', dogsRouter);

app.listen(PORT, () => {
    console.log(`API is listening on port ${PORT}`);
});