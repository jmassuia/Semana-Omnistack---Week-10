// importing express framework
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');
const routes = require('./routes');
const {setUpWebsocket} = require('./websocket')

const app = express();
const server = http.Server(app);

setUpWebsocket(server);

mongoose.connect('mongodb+srv://jmassuia:j0a0vmr2019@cluster0-1jagy.mongodb.net/week10?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// HTTP METHODS: GET, PUT, POST, DELETE

// Tipos de parametros

// Query Params: request.query(Filtros, ordeção, paginação)
// Route Params: request.params(Identificar um recurso na alteração ou remoção )
// Body: request.body (Dados para criação ou alteração de um registro)

//MongoDB (Banco não relacional)


/* this method get(request,reponse) uses the properies as: resquest for resquesting information from a database
 and response for returning the info for the front*/
/*app.get('/users/:id',(request,response) => {
    console.log(request.params);
    return response.json({ message:'Hello omnistack'});
});*/
app.use(cors());
app.use(express.json());
app.use(routes);

server.listen(3333);