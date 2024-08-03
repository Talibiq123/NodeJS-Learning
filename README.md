## Files Numbers
1. index.js
2. utils.js
3. postController.js
4. server.js


## To run files
In the terminal, write commands like below and then press enter\
command: `node index.js` or `node index`

## Export and Import Modules/Functions
In utils.js file, export\
`function generateRandomNumber() {`\
    `return Math.floor(Math.random() * 100) +1;`\
`}`

`console.log(generateRandomNumber());`\
`module.exports = generateRandomNumber;`

In index.js file, import\
`const generateRandomNumber = require('./utils');`\
`console.log(``Random Number: ${generateRandomNumber()}``);` \

## Import and Export multiple Modules
look into utils.js file

> Basic commonjs modules ends here.

## Import, Export and their use in ES Module
- For creating ES Module, in the **package.jason** file, add `"type": "module",`



 ## HTTP Module & Create Server
> In `server.js`

