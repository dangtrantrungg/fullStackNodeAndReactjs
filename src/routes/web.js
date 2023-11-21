import express from "express";
let router = express.Router();

const initWebRoute = (app) => {
    router.get('/', (req, res) => {
        res.send(' hello chungchan!')
    });
    return app.use('/', router);
}

export default initWebRoute