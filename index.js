const fs = require('fs');

fs.copyFile("hello.txt", "./copy/copy.txt", function (err) {
    if (err) console.log(err);
    else console.log('Done')
})