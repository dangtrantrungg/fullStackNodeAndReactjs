import configViewEngine from "../configs/viewEngine"

let getHomePage =(req, res) => {
    res.render('homePage.ejs')
}

module.exports = {
    getHomePage: getHomePage
}