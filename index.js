const express=require('express');
const app=express();
const path=require('path');
const userModel=require('./models/user')
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.set('view engine','ejs');
app.use(express.static(path.join(__dirname,'public')));
app.get('/',(req,res)=>{
    res.render('index');
});
app.post('/create',async (req,res)=>{
    let {username,email,password,image}=req.body;
    let newuser=await userModel.create({
        username,
        email,
        password,
        image
    })
    res.send(newuser)
})
app.get('/read',async (req,res)=>{
    let users=await userModel.find()
    res.render('read',{users});
})

app.listen(3000)