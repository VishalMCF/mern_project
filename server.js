const connectDB = require('./config/db');
const express = require('express');


const app = express();

// connect databse
connectDB()

// init middleware
app.use(express.json())

// Define routes
app.use('/api/users', require('./routes/api/users'))
app.use('/api/auth', require('./routes/api/auth'))
app.use('/api/profile', require('./routes/api/profile'))
app.use('/api/posts', require('./routes/api/posts'))

app.get('/',(req,res) => {
    res.status(200).send("Hello there")
})

const PORT = process.env.PORT || 5001

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));