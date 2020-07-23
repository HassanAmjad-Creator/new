const express = require ('express')
const app = express()
const ReactDOMServer = require ("react-dom/server");
const App = require('./dist/index')

app.use(express.static('dist'))

app.get('/' , (req,res) => {
    res.send()
})

