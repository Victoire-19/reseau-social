const express = require('express');
//const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

require('dotenv').config({ path: './config/.env' });
const userRoutes=require('./routes/user.routes');
const postRoutes=require('./routes/post.routes');
require('./config/db');
const{checkUser, requireAuth} = require('./middleware/auth.middleware');
const cors = require('cors');
const app = express();

//app.use(bodyParser.json());
const corsOption = {
    origin: process.env.CLIENT_URL,
    Credentials: true,
    'allowedHeaders':['sessionId', 'Content-Type'],
    'exposedHeaders' : ['sessionId'],
    'methods':'GET,HEAD,PUT,PATCH,POST,DELETE',
    'preflightContinue':false

}

app.use(cors(corsOption));
app.use(express.json()); 
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());

//jwt
app.get('*', checkUser);
app.get('/jwtid', requireAuth, (req, res)=> {
    res.status(200).send(res.locals.user._id)
});

// router
//app.get("/",(req,resp)=>{
   // resp.send("Hey")
//})
app.use('/api/user',userRoutes);
app.use('/api/post', postRoutes);

// server
app.listen(process.env.PORT, () => {
    console.log(`Listen on port ${process.env.PORT}`);
})