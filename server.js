
const express = require("express");
const app = express();
const db = require("./db.js");
const jobsRoute = require('./routes/jobsRoute')
const userRoute = require('./routes/usersRoute')
app.use(express.json())
app.use('/api/jobs/', jobsRoute)

app.use('/api/users/', userRoute)

const port = process.env.PORT || 5000;

if (process.env.NODE_ENV === 'production') {
  app.use('/', express.static('../job-portal-front/build'))

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, '../job-portal-front/build/index.html'))
  })
}


app.listen(port, () => console.log('Node JS server started'));