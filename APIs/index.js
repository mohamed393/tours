const express = require('express');
const mongoose = require('mongoose');
const UserRouter = require('./routes/user');
const AuthRouter = require('./routes/auth');
const TourRouter = require('./routes/tour')

const app = express();
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from//
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept,x-auth-token");
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');

    next();
});

//medooooooooooooooooooooooooooooooooooooooooooooooooooooooooo//

app.use(express.json());
app.use('/api/users', UserRouter);
app.use('/api/auth', AuthRouter);
app.use('/api/tour', TourRouter);


mongoose.connect('mongodb://localhost/mitchDesign', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => { console.log('database server connected') })
    .catch((error) => { console.log(error.message) });


const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log('Server Started at ' + port)
})   
