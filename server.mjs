import express from "express";


/// For Local host///

// const app = express();

// app.get("/",(req,res)=>{
// res.send("Welcome to the main page");
// })


// app.get("/profile", (req, res)=>{
//     res.send("Welcome to the profile pagge");
// });


// app.get("/admin", (req, res)=>{
//     res.send("Welcome to the admin panel");
// })

// app.get("/chat", (req, res) =>{
//     res.send("Welcome to the chat room");
// })



// app.listen(3000,()=>{
//     console.log("server is runnnig");
// })

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/",(req,res)=>{
    res.send("Welcome to the main page");
    })
    
    
    app.get("/profile", (req, res)=>{
        res.send("Welcome to the profile pagge");
    });
    
    
    app.get("/admin", (req, res)=>{
        res.send("Welcome to the admin panel");
    })
    
    app.get("/chat", (req, res) =>{
        res.send("Welcome to the chat room");
    })
    
    
    
    app.listen(PORT,()=>{
        console.log(`sever is running on ${PORT}`);
    })
    


