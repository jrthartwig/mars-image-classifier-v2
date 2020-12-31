const express = require('express');
const history = require('connect-history-api-fallback');
const { createServer } = require('http');

const app = express();

app.use(
    history({
        logger: console.log.bind(console),
    })
);

app.use("/", express.static("./build"));

const server = createServer(app);

server.listen(3000, () => {
    console.log("listening on 3000");
});

