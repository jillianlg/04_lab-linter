const express = require('express');
const app = express();
const { linter } = require('./lib/linter');
const Stack = require('./stacks')

app.use(express.json());

// endpoints
// app.get('/', (req, res) => {
//     res.send('hi');
// });
app.post('/api/v1/lint', (req, res) => {
    const result = linter(req.body.lint)
    res.send(result);
});


// listen
app.listen(7890, () => {
    console.log('started on 7890')
});