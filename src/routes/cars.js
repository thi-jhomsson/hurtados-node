const { Router } = require('express');
const app = Router();


app.get('/cars',  getCars);
app.post('/cars', postCars);
app.put('/cars/:id', putCars);
app.delete('/cars/:id', deleteCars);

function getCars(req,res){
    res.json('get de cars');
}

function postCars(req,res){
    let body = req.body;
    res.json({
        body
    });
}

function putCars(req,res) {
    res.json('put de cars');
}

function deleteCars(req,res){
    res.json('delete de cars');
}

module.exports = app;

