const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("Hey There");
})

app.listen(5000, () => console.log(`Port running inn port 5000`))