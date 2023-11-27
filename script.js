const express=require('express')
const app=express();
const path=require('path')
app.set('view engine','ejs')
app.use(express.static('public'));
app.use(express.static(path.join(__dirname,'public')))
const bookData=require('./books.json')
//console.log(bookData)

app.listen(3000,()=>{
    console.log('listening');
})

app.get('/',(req,res)=>{
    res.render('home',{books:bookData});
})

app.get('/view',(req,res)=>{
    res.render('home',{books:bookData}) 
})

app.get('/view/:subbook',(req,res)=>{
    const {subbook}=req.params;
    const data=bookData[subbook];
    if(data)
    {
        console.log(data);
        res.render('subbook',{data:data})
    }
    else
    {
        res.render('notfound',{subbook});
    }
})


