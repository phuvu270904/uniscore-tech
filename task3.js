const fs = require('fs');
const zlib = require('zlib');

function compressJson(inputFile, outputFile) {
    const fileContent = fs.readFileSync(inputFile, 'utf-8');
    const compressedContent = zlib.gzipSync(fileContent);
    fs.writeFileSync(outputFile, compressedContent);
}

compressJson('data.json', 'data.json.zip');
console.log('File compressed successfully!');
