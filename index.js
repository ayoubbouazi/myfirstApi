const express = require('express');
const app = express();

// req = request
// res = response
app.get('/', (req, res) => {
    res.send('hello world');
});

app.listen(3000, () => {
    console.log('my first Api running');
});

