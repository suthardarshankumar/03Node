const fs = require('fs');

fs.unlink("hello.txt", function (err) {
    if (err) console.log(err.message);
    else console.log('Remove');
})