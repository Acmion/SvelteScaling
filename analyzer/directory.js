const { readdirSync } = require('fs');
const File = require("./file");

class Directory
{
    static getSubDirectories(sourceDir)
    {
        return readdirSync(sourceDir, { withFileTypes: true }).filter(item => item.isDirectory()).map(item => sourceDir + "/" + item.name);
    }

    static getFiles(sourceDir)
    {
        return readdirSync(sourceDir, { withFileTypes: true }).filter(item => !item.isDirectory()).map(item => sourceDir + "/" + item.name);
    }

    static getSize(sourceDir)
    {
        var size = 0;

        for (let subDir of this.getSubDirectories(sourceDir))
        {
            size += this.getSize(subDir);
        }

        for (let filePath of this.getFiles(sourceDir))
        {
            size += File.getSize(filePath);
        }

        return size;
    }
}

module.exports = Directory;