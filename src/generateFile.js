// Modules
const fs = require('fs');
const path = require("path");
const { v4 : uuid } = require('uuid');

const dirCodes = path.join(__dirname, "codes");


if (!fs.existsSync(dirCodes))
{
    fs.mkdirSync(dirCodes, {recursive: true});
}


// File is being Generated, with a file name of format : I.D.(unique I.D.).extenstion(format)
const generateFile = (format, content) =>
{
    const jobId = uuid();
    const filename = `${jobId}.${format}`;
    const filepath = path.join(dirCodes, filename);
    fs.writeFileSync(filepath, content);
    return filepath;
};

module.exports = 
{
    generateFile,
};