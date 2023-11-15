const chalk = require('chalk')
const yargs = require('yargs')
const validator = require('validator')
const notes = require('./notes.js')

// Customize yargs version
yargs.version('1.1.0')

//create add command

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder:{
        title:{
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body:{
            desribe: 'Body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
       notes.addNote(argv.title, argv.body)
        // console.log('Title: ' + argv.title)
        // console.log('Author: ' + argv.author)
    }
})

//create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder:{
        title:{
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
       notes.removeNote(argv.title)
       
    }
})

yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder:{
        title:{
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNote(argv.title)
    }
})


//Create list command
yargs.command({
    command: 'list',
    describe: 'List notes',
    handler() {
        notes.listNotes()
    }
})



yargs.parse()

//console.log(yargs.argv)

// Get Notes and change colour
// 

// const allNotes = getNotes ('This is a ', 'Text')

// console.log(chalk.blue.bold.inverse(allNotes))

// console.log(process.argv[2])




//console.log(validator.isURL('nick.com'))





//const add = require('./utils.js')

// const fs = require('fs')
// const name = 'nick'

// fs.writeFileSync('note.txt', 'Gonna run this test')
//fs.appendFileSync('note.txt', 'Append this file and Sync')
//const sum = add(4, -2)

//console.log(sum)


