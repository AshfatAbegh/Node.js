const express = require('express');

const app = express();

/*function rootCall(req, res){
    res.send('Thank you');
}*/
//for making it arrow function 
/*const rootCall = (req, res) =>{
    res.send('Thank you');
}*/

app.get('/', (req, res) =>{
    res.send("Node is running");
});

app.listen(4000, () => console.log("Listening to port 4000"));