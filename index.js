const express = require('express');

const app = express();

const users = ["Araf","Rahim","Saif"];

/*function rootCall(req, res){
    res.send('Thank you');
}*/
//for making it arrow function 
/*const rootCall = (req, res) =>{
    res.send('Thank you');
}*/

app.get('/', (req, res) =>{
    res.send("Learning Node");
});
app.get('/fruits/banana', (req,res) => {
    res.send({fruit:'banana', quantity:1000, price:10000});
})
app.get('/users/:id', (req,res) =>{
    const id = req.params.id;
    const name =  users[id]; 
    res.send({id, name});
})

app.listen(4000, () => console.log("Listening to port 4000"));