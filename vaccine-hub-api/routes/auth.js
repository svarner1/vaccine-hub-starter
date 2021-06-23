const express = require("express")
const User = require("../models/user")
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
        //create a new user in our database
    } catch(err) {
        next(err)
    }
})

module.exports = router
