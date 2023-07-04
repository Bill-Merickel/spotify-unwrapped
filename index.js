const express = require('express');
const app = express();
const port = 8888;

app.get('/', (req, res) => {
    const data = {
        name: 'Bill',
        knowsJavaScript: true
    }
    res.json(data);
});

app.get('/knows-java', (req, res) => {
    const {name, knowsJavaScript} = req.query;
    res.send(`${name} ${JSON.parse(knowsJavaScript) ? 'knows' : 'does not know'} JavaScript`);
});

app.listen(port, () => {
    console.log(`Express app listening at http://localhost:${port}`);
});