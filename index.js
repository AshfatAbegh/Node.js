const express = require('express');
var cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const users = ["Araf","Rahim","Saif"];

/*function rootCall(req, res){
    res.send('Thank you');
}*/
//for making it arrow function 
/*const rootCall = (req, res) =>{
    res.send('Thank you');
}*/

//get
app.get('/', (req, res) =>{
    res.send("Learning Node");
});

app.get('/users/:id', (req,res) =>{
    const id = req.params.id;
    const name =  users[id]; 
    res.send({id, name});
})

//post
app.post('/addUser', (req,res) => {
    //save to database
    const user = req.body;
    user.id = 55;
    res.send(user);
})

app.listen(4000, () => console.log("Listening to port 4000"));