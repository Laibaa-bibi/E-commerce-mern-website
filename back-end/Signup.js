//basically it is for all pages

const express = require('express');
const app = express();

const cors = require("cors")         //used to resolve issue of localhost

require('./config');
const users = require('./user');
const products = require('./products');

app.use(express.json());
app.use(cors());

//Signup
app.post("/Signup", async (req, resp) => {
    let data = new users(req.body);
    const result = await data.save();
    resp.send(result);
});


//Login
app.post('/login', async(req,res)=>{

    if(req.body.password && req.body.email)
    {
    let value = await users.findOne(req.body);

    if(value)
    {
        res.send(value);
    }
    else{
        res.send("No user found");
    }

    }

    else{
        res.send("No user found");
    }

});



//Add products

app.post("/add", async (req, resp) => {
    let data = new products(req.body);
    const result = await data.save();
    resp.send(result);
});

// Products

app.get('/products' , async(req,resp)=>{
   
    let data= await products.find();

    if(data.length>0)
    {
        resp.send(data);
    }
    else{
        resp.send("no result found");
    }

});

app.delete('/del/:id',async(req,resp)=>{

    let result= await products.deleteOne({_id: req.params.id  })
    resp.send(result);
});


//used to get one result
app.get('/uproduct/:id',async(req,resp)=>{
   
    let result = await products.findOne({_id : req.params.id})
    if(result)
    {
        resp.send(result);
    }
    else{
        resp.send("No results found");
    }

});


app.put('/updateproduct/:id' , async(req,resp)=>{
    let result = await products.updateOne(
 
        {_id: req.params.id}
        ,
        {
            $set : req.body
        }
    )

    resp.send(result);
});


//for search
app.get('/search/:key' , async(req,resp)=>{
    let result = await products.find({
        "$or" : [
            { name : {$regex: req.params.key} }
        ]
})

    resp.send(result);
});

app.listen(3001);