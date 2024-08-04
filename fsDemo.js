// import fs from 'fs';
import fs from 'fs/promises';

// readFile() - callback
// fs.readFile('./test.txt', 'utf8', (err, data) => {
//     if (err) throw err;
//     console.log(data);
// })

// readFileSynch() - synchronous version
// const data = fs.readFileSync('./test.txt', 'utf8')
// console.log(data);


// readFile - promise then
// fs.readFile('./test.txt', 'utf-8')
// .then((data) => console.log(data))
// .catch((err) => console.log(err))

// readFile - asynch await
const readFile = async () => {
    try {
        const data = await fs.readFile('./test.txt', 'utf-8');
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

// readFile();


// Write file
const writeFile = async () => {
    try {
        await fs.writeFile('./test.txt', 'I am writing to test.txt file');
        console.log('file written to..');
        
    } catch (error) {
        console.log(error);
    }
}

// appendFile()
const appendFile = async () => {
    try {
      await fs.appendFile('./test.txt', '\nThis is appended text');
      console.log('File appended to...');
    } catch (error) {
      console.log(error);
    }
  };

writeFile();
appendFile();
readFile();