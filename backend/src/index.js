const express = require('express')
const app = express()
const cors = require('cors')
const port = 5000
const mysql = require('mysql')
app.use(express.json())
app.use(cors())



app.post('/sendreview', (req, res) => {
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'weatherapp'
    });
    connection.connect();
    connection.query(`insert into reviews values('${req.body.user}','${req.body.email}','${req.body.review}')`,(error, results) => {
        if (error) {
            res.status(501).send({success:false, message:"Internal Server Error "+ error})
        } else {
            res.status(200).send({success:true, message:"Thanks For Your Feedback."})
        }
    })

    connection.end();
})

app.get("/fetchreviews",(req,res)=>{
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'weatherapp'
    });
    connection.connect();
    connection.query("select * from reviews limit 6",(error,results)=>{
        if (error) {
            res.status(501).send({success:false, message:"Internal Server Error"})
        } else {
            res.status(200).send({success:true, message:"Reviews Fetched Succcessfully.",reviews:results})
        }
    })
    connection.end();
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})