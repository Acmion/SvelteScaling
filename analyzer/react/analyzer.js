const { execSync } = require("child_process");
const Directory = require("../directory");
const File = require("../file");
const Path = require("path");

const reactBuildCommand = "npm run build";
const reactAppComponentDirectoryRelativePath = "src/_components";
const reactAppJsBundleRelativePath = "build/static/js";
const reactAppCssBundleRelativePath = "build/static/css";
const reactJsonDataOutputFilePath = Path.dirname(Path.dirname(__dirname)) + "/data/react-data.json";
const reactJsonpDataOutputFilePath = Path.dirname(Path.dirname(__dirname)) + "/data/react-data.jsonp";
const reactJsonpFunction = "DataHandler.extractReactJsonpData";

class ReactAnalyzer
{
    static analyze(appPaths)
    {
        console.log("Analyzing React applications...");

        // --------------------------------------------------------------------------------------

        console.log("  Building React applications...");

        for (let appPath of appPaths)
        {
            console.log("    Building " + appPath);

            this.buildApp(appPath);

            console.log("    Finished building.");
        }

        console.log("  Finished building React applications.");

        // --------------------------------------------------------------------------------------

        console.log("  Extracting data from React applications...");

        let extractedData = [];

        for (let appPath of appPaths)
        {
            console.log("    Extracting data from " + appPath);

            extractedData.push(this.extractData(appPath));

            console.log("    Finished extracting data.");
        }

        File.write(reactJsonDataOutputFilePath, JSON.stringify(extractedData, null, 4));
        File.write(reactJsonpDataOutputFilePath, this.getJsonpEncodedData(extractedData));

        console.log("  Finished extracting data from React applications.");

        // --------------------------------------------------------------------------------------

        console.log("Finished React application analysis.");
    }

    static buildApp(appPath)
    {
        execSync(reactBuildCommand, { cwd: appPath });
    }

    static extractData(appPath)
    {
        let componentsPath = appPath + "/" + reactAppComponentDirectoryRelativePath;
        let jsBundlePath = appPath + "/" + reactAppJsBundleRelativePath;
        let cssBundlePath = appPath + "/" + reactAppCssBundleRelativePath;

        let jsBundleFiles = Directory.getFiles(jsBundlePath).filter(file => file.endsWith(".js"));
        let cssBundleFiles = Directory.getFiles(cssBundlePath).filter(file => file.endsWith(".css"));;

        var data =
        {
            app: Path.basename(appPath),
            componentSourceSize: Directory.getSize(componentsPath),
            jsBundleSize: jsBundleFiles.map(file => File.getSize(file)).reduce((a, b) => a + b, 0),
            cssBundleSize: cssBundleFiles.map(file => File.getSize(file)).reduce((a, b) => a + b, 0),
            totalBundleSize: null,
            gzippedJsBundleSize: jsBundleFiles.map(file => File.getGzipSize(file)).reduce((a, b) => a + b, 0),
            gzippedCssBundleSize: cssBundleFiles.map(file => File.getGzipSize(file)).reduce((a, b) => a + b, 0),
            gippedTotalBundleSize: null
        };

        data.totalBundleSize = data.jsBundleSize + data.cssBundleSize;
        data.gippedTotalBundleSize = data.gzippedJsBundleSize + data.gzippedCssBundleSize;

        return data;
    }

    static getJsonpEncodedData(data)
    {
        return reactJsonpFunction + "(" + JSON.stringify(data) + ")";
    }
}

module.exports = ReactAnalyzer;