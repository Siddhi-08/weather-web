const express=require('express');
const app=express();
const hbs=require('hbs');
const path=require('path');
const port=process.env.PORT || 3000  //running on the users envt otherwise on the port 3000

app.set('view engine' , 'hbs');
app.set('views' , path.join(__dirname , "../templates/views"))
hbs.registerPartials(path.join(__dirname,'../templates/partials'))


app.use(express.static(path.join(__dirname , '../public')))



app.get('/', (req,res)=>{
    res.render('index')
})
app.get('/about', (req,res)=>{
    res.render("about")
})
app.get('/weather', (req,res)=>{
    res.render("weather")
})

app.get('*' , (req,res)=>{
  res.render("404error",{
    errMsg:"oops! 404 page not found"
  })
})

app.listen(port,()=>{
    console.log(`listening at port ${port} `)
})