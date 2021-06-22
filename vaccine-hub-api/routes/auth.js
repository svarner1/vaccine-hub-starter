const express = require("express")
const router = express.Router()

router.post("/login", async (req, res, next) => {
    try{
        //take the users email and password; attempt to authenticate
    } catch(err) {
        next(err)
    }
})

router.post("/register", async(req, res, next) => {
    try {
        //take the users email, password, etc
        //create a new user
    } catch(err) {
        next(err)
    }
})

module.exports = router
