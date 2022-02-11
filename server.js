const express = require('express');

const app = express();



app.use(express.json());

app.use('/posts', require('./routes/postRoutes'));
app.use((err, req, res, next) => {
    console.log(err.stack);
    console.log(err.name);
    console.log(err.code);

    res.status(500).json({
        message: "Something went rely wrong",
    });
});


const port  = 3000
app.listen(port, () => 
console.log(`Server is running on Port ${port}`)
);