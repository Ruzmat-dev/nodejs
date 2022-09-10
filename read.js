const fs = require('fs');

function bazz(error, buffer) {

    // let s = buffer.toString()

    console.log('Mobile: ', buffer);
    console.log('xato: ', error);
}
fs.readFile('script.txt', bazz)