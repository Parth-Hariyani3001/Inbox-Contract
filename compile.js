// compile code will go here
const path = require('path');   //We use "path" module as "require" module will try to compile our solidity code
const fs = require('fs');
const solc = require('solc');

const inboxPath = path.resolve(__dirname,'contracts','Inbox.sol');
const source = fs.readFileSync(inboxPath,'utf8');

module.exports = solc.compile(source,1).contracts[':Inbox'];
