const express = require ('express')
const app = express()
const ReactDOMServer = require ("react-dom/server");
const App = require('./dist/index')

app.use(express.static('dist'))

app.get('/' , (req,res) => {
    const htmlBody = ReactDOMServer.renderToString(App());
    res.send(renderMarkup(htmlBody))
})

app.listen(3000,() => {
    console.log('I actually work');
});
function  renderMarkup(html) {
    return `<!DOCTYPE html>
    <html>
        <head>
            <title>webpack SSR Demo</title>
            <meta charset= "utf-8" />
        </head>
        <body>
            <div id = "app">${html}</div>
            <button>TEST</div>
        </body>
      </html>`;
}

//<script src="./index.js"></script>