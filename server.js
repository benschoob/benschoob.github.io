const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => {
    res.sendFile("/app/pages/index.html");
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});



