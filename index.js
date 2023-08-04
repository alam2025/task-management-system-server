const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 4000;

// midleware 


app.get('/', (req, res) => {
      res.send('Task Management Server is Running...!')
})

app.listen(port, () => {
      console.log(`Example app listening on port ${port}`)
})