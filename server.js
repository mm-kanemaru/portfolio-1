import express from 'express';
const app = express();
const port = 2000;

// Enable loading of static files
app.use(express.static('public'));

app.listen(port);