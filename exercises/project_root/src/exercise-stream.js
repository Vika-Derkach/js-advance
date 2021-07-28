// Implement ability to write txt files
// path - path of file (includes name of file)
// chunks - array of strings which should be written in file

// Example 1:
// input: "C:\\Users\\project_root\\test.txt", ["start", "end"]
// output: void
// result: txt file with text "startend"

// Example 2:
// input: "C:\\Users\\project_root\\test.txt", ["some", "text", "input"]
// output: void
// result: txt file with text "sometextinput"

const fs = require("fs");

function main(path, chunks) {
  let writeableStream = fs.createWriteStream(path);
  chunks.forEach((e) => {
    writeableStream.write(e);
  })

writeableStream.end();

}

module.exports = main;