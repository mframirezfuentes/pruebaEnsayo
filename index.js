const express=require('express')
const app=express()

const {mostrarTodo,categories,store,brand, filter}=require('./consulta')

app.listen(3000,()=>console.log("Servidor encendido"))

app.use(express.json())
app.get("/",(req,res)=>{

res.sendFile(__dirname+"/index.html")

})

app.get("/consultas",async(req,res)=>{
 
    // api: /consultas?store=x&category=y&brand=b
    const { store,category,brand } = req.query;
   
    /*
        {
            store: x,
            category:y,
            branch:b
        }
    */
    const cursos = await mostrarTodo();
    res.send(JSON.stringify(cursos))
  
})
app.get("/categories",async(req,res)=>{
    const categorias= await categories();
    res.send(JSON.stringify(categorias))
})

app.get("/store",async(req,res)=>{
    const tiendas= await store();
    res.send(JSON.stringify(tiendas))
})

app.get("/brand",async(req,res)=>{
    const marcas= await brand();
    res.send(JSON.stringify(marcas))
})

app.get("/filtro",async(req,res)=>{   
    // api: /consultas?store=x&category=y&brand=b
    const { store,category,brand } = req.query;
   
  
    const cursos = await filter(store,category,brand);
    res.send(JSON.stringify(cursos))
  
})