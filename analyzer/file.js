const fs = require('fs');
const zlib = require('zlib'); 

class File
{
    static getSize(filePath)
    {
        const { size } = fs.statSync(filePath);
        return size;
    }

    static getGzipSize(filePath)
    {
        var content = fs.readFileSync(filePath);

        var buffer = zlib.gzipSync(content);

        return buffer.byteLength;
    }

    static write(filePath, data)
    {
        fs.writeFileSync(filePath, data);
    }
}

module.exports = File;