const fs = require('fs')

// const book = {
//     title:'The Alchemist',
//     author: 'Paolo Coelho'
// }

// const bookJSON = JSON.stringify(book)

// fs.writeFileSync('1-json.json', bookJSON)

//console.log(bookJSON)

// const parseData = JSON.parse(bookJSON)
// console.log(parseData.author)

const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)

data.name = 'Nick'
data.age = 24

const changeJSON = JSON.stringify(data)

fs.writeFileSync('1-json.json', changeJSON)

