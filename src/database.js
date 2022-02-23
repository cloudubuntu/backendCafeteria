import  mongoose  from "mongoose";

//const url='mongodb://localhost:27017/bdcafe';
const url="mongodb+srv://cloudubuntu:OyKBdJ7FJMQX250L@cluster0.4jhlh.mongodb.net/bdcafe";

mongoose.connect(url);

const connection=mongoose.connection;

connection.once('open', ()=>{
    console.log('BD CONECTADA');
})