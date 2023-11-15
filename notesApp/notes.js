const fs = require('fs')
const chalk = require('chalk')

const getNotes =  ()=> {
    return 'notes..'
}


const addNote =  (title, body) =>{
    const notes = loadNotes()
    const duplicateNote = notes.find((note) => note.title === title)

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
    
        saveNotes(notes)
        console.log('New note added')

    } else {
        console.log('Note title taken')
    }


   
}

const readNote = (title) => {
    const notes = loadNotes()
    cheese = 0
    notes.forEach(note =>{
        if (note.title === title){
            console.log(chalk.bold.green(note.title + " " ) + note.body)
            cheese = cheese + 1
        }
        
        
    })
    if (cheese < 1){
        console.log(chalk.red('no note found'))
    }
}


const removeNote = (title) => {
    const notes = loadNotes()
    const duplicateNotes = notes.filter((note) => note.title === title )
    if (duplicateNotes.length === 0) {
        console.log(chalk.red.inverse('No such note title exists'))
    } else {
            const findNote = notes.filter((note) => note.title != title)
            console.log('Note removed!')
            saveNotes(findNote)
}

}


const listNotes = () =>{
    console.log('Your notes')
    const notes = loadNotes()
    notes.forEach(note => {
        console.log(note.title)
    });
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)

}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e){
        return []
    }
    
    
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote,
}