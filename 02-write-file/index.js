const fs = require('fs')
const path = require('path')

const filePath = 'userInput.txt'
process.stdout.write('Please, enter the text: ')
process.stdin.on('data', (data) => {
  const userInput = data.toString().trim()
  console.log(`you entered: ${userInput}`);
  process.exit()
})

// fs.writeFile(filePath, userInput, (err) => {
//   if (err) console.error(err);
//   console.log('file created');
// })
