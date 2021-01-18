const express = require('express');

const app = express();

// setup the rate route
const route = require('./routes/index');

// Send static text to home api route.
app.get('/api', (req, res) => {
    res.send('<h3>Welcome to Enye Backend Challenge API by Chinedu Emesue</h3>')
});

// fill rate route for the express application
app.use('/api', route);

// setup port for the app
const port = process.env.PORT || 5001;

app.listen(port, () => console.log(`Server is running on port ${port}`));