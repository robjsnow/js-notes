//Require file system
//https://nodejs.dev/learn/the-nodejs-fs-module

const fs = require('fs');

//read a file
fs.readFile('./docs/text1.txt', (err, data) => {
    if (err) {
        console.log(err);
    }
    console.log(data.toString());
});

//Write a file
//If it doesn't exist, it will create the file for you
//It will replace current content with new content
fs.writeFile('./docs/text2.txt', 'Hello!', () => {
    console.log("file written.");
});

// Directories
if (!fs.existsSync('./newfolder')) {
fs.mkdir('./newfolder', (err => {
    if (err) {
        console.log(err);
    }
    console.log('folder created.');
}));
} else {
    fs.rmdir('./newfolder', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('folder deleted.');
    })
}

// Deleting files
if (fs.existsSync("./docs/delete.txt")) {
    fs.unlink('./docs/delete.txt', (err) => {
        if (err) {
            console.log(err)
        }
        console.log('file deleted.');
    })
}