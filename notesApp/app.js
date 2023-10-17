const chalk = require('chalk')
const validator = require('validator')



const getNotes = require('./notes.js')

const allNotes = getNotes ('This is a ', 'Test')

console.log(chalk.green.bold.inverse(allNotes))






//console.log(validator.isURL('nick.com'))





//const add = require('./utils.js')

// const fs = require('fs')
// const name = 'nick'

// fs.writeFileSync('note.txt', 'Gonna run this test')
//fs.appendFileSync('note.txt', 'Append this file and Sync')
//const sum = add(4, -2)

//console.log(sum)


