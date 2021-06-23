/*  Initialize a new postgres client with the pg package and 
        connect to postgres using any necessary config variables.
    Connect to postgres and log a message to the terminal on success 
        or failure.
    Explore the connected db
 */

 //importing client from pg
const { Client } = require("pg")
//importing database
const { getDatabaseUri } = require("./config")
//colors for terminal output
require("colors")

//new isntance of client
//connections string holds what database connected
const db = new Client({ connectionString: getDatabaseUri() })

db.connect((err) => {
    if(err){
        console.error("connection error".red, err.stack)
    }else {
        console.log("Successfully connected to postgres db".blue)
    }
})

module.exports = db