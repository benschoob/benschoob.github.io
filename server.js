const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => {
    res.sendFile("/app/pages/index.html");
});

app.use(express.static('/app/public'));

app.listen(port, () => {
    console.log(`Server hosting on localhost:${port}`);
});




