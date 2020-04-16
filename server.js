var PORT = process.env.PORT || 5000
const express = require('express');
const path = require('path');

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: true}))

// app.use('/',express.static('public')); 
if (process.env.NODE_ENV === 'production') {
    // Exprees will serve up production assets
    app.use(express.static('public'));

    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
    });
  }
app.use('/api', require('./Routes/api').route)

app.listen(PORT, () => console.log('server running at port 5000'))

module.exports = app