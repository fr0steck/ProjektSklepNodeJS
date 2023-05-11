var express = require('express');
var cors =  require('cors');

var CategoryRouter = require('./routes/category.router');
var ProductRouter = require('./routes/product.router');

//inicjacja apki expresowej
var app = express()

//Żeby był w stanie json używać
app.use(express.json());
//CORS żeby przyjmował żądania od fronta, ale będzie przjmował tylko z tego adresu
app.use(cors({
    origin: 'http://localhost:9000'
}))




//Pierwszy endpoint
app.get('/', (req, res) => {
    res.send('Express app')
})
//Kolejne
app.use('/category', CategoryRouter);
app.use('/product', ProductRouter)

//Uruchamiamy apkę na porcie 9001
app.listen(9001, 'localhost', () => {
    console.log('Server is running at http://localhost:9001');
})