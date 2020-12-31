const express = require('express');
const { createServer } = require('http');

const app = express();

app.use(express.json());
app.use((req, res, next) => {
    console.log(req.body, req.headers, req.query)
    if (req.body.code == 911)
        res.sendStatus(403)
    else
        next()
});

app.get("/", (req, res) => {
    res.json({
        text: "hi"
    })
})
const server = createServer(app);

server.listen(5000, () => {
    console.log("listening on 5000");
});

