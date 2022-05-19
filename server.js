const express=require('express')
const bodyParser=require('body-parser')
const linkStore=require('./model.js')
const app=express();
require('./db.js')


//middlewares
app.use(bodyParser.urlencoded({extended:false}))
app.set('view engine', 'ejs')
app.set('views', 'front-end')
app.use(express.static('./front-end/static'))


app.listen(process.env.PORT||5000, ()=>console.log('Yes!!!'))


//inserting the link into DB
app.post('/link', async (req, res)=>{
    try{
        await linkStore.insertMany({
            link:req.body.link
        }).then((e,r)=>{
            res.render('index', {id:e[0]._id})
        })

    }catch{
        res.status(500).end();
    }

})

//rendering the home page
app.get('/', (req, res)=>{
    res.render('index', {id:""})
})

//fetching the original link and redirecting to that link...
app.get('/:d', async (req, res)=>{
    try{
        const param=req.url.slice(1,-1)+req.url[req.url.length-1]
        await linkStore.find({_id:param}).then((e)=>{
            res.redirect(`${e[0].link}`)
        })
    }catch{
        res.status(500).send('The link is Expired');
    }
})

