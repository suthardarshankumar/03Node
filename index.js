const fs = require('fs');

fs.writeFile("hey.txt", "Hey Bro", function (err) {
    if (err) console.log(`Have a error`);
    else console.log(`Done`);
})