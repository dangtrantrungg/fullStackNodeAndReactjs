import express from 'express'
import configViewEngine from './configs/viewEngine'
import initWebRoute from './routes/web'
import bodyPaser from 'body-parser'
require('dotenv').config()


const app = express()
const port = process.env.PORT || 6969;


app.use(bodyPaser.urlencoded({ extended: true }));
app.use(bodyPaser.json());

configViewEngine(app);
initWebRoute(app);


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
