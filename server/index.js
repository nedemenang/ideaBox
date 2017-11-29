import express from 'express';
import path from 'path';

let app = express();

app.get('/*', (request, result) => {
    result.sendFile(path.join(__dirname, '../client/public/index.html'));
});

app.listen(3000, () => {
    console.log('Listening on localhost:3000');
})