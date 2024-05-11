const fs = require('fs');

fs.appendFile("hey.txt", " I'm Good", function (err) {
    if (err) console.error(err);
    else console.log(`Done`);
})