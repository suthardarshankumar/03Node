const fs = require('fs');

fs.writeFile("hey.txt", "Hey Bro", function (err) {
    if (err) console.error(err);
    else console.log(`Done`);
})