const fs = require("fs");

//If the below line was uncommented, chunk would need chunk.toString();
//const readStream = fs.createReadStream('./docs/text3.txt');
const readStream = fs.createReadStream("./docs/text3.txt", {
  encoding: "utf8",
});
const writeStream = fs.createWriteStream("./docs/text4.txt");

// readStream.on('data', (chunk) => {
//     console.log('** New Chunk **');
//     console.log(chunk);

//     writeStream.write('\nNew Chunk\n')
//     writeStream.write(chunk)
// });

//easier way to write above code called piping
readStream.pipe(writeStream);
