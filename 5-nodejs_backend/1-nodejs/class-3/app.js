const express = require('express');
const mongoose = require('mongoose');

// const userRoutes = require('./routes/userRouters');

// POzmbsJDyAOt0Xah
// mongodb+srv://whelantionne:POzmbsJDyAOt0Xah@cluster0.yropygb.mongodb.net/users?retryWrites=true&w=majority&appName=Cluster0


mongoose.connect("mongodb+srv://whelantionne:POzmbsJDyAOt0Xah@cluster0.yropygb.mongodb.net/users?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
console.log("mongodb is connected")
})

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});




const app = express();
app.use(express.json())

app.get('/',loggedIn, (req, res)=>{
    res.send("dev is logged in")
})

app.get('/user', (req, res)=>{
    res.send("you are on the user route")
})
function loggedIn(req, res, next){
const user = req.query.user;
if(user==='dev'){
    console.log("logged in")
    next()
    return;
}else{
    res.send("not allowed")

  
}
}


app.listen(3000, ()=>{
    console.log("server is running on port 3000")
})