const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.json({ msg: 'Welcome to the Contact Keeper API!' })
})

app.get('/api/users', require('./routes/users'))
app.get('/api/auth', require('./routes/auth'))
app.get('/api/contacts', require('./routes/contacts'))

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server Started on Port=>${PORT}`))