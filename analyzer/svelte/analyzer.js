const { execSync } = require("child_process");
const Directory = require("../directory");
const File = require("../file");
const Path = require("path");

const svelteBuildCommand = "npm run build";
const svelteAppComponentDirectoryRelativePath = "src/_components";
const svelteAppJsBundleRelativePath = "public/build/bundle.js";
const svelteAppCssBundleRelativePath = "public/build/bundle.css";
const svelteJsonDataOutputFilePath = Path.dirname(Path.dirname(__dirname)) + "/data/svelte-data.json";
const svelteJsonpDataOutputFilePath = Path.dirname(Path.dirname(__dirname)) + "/data/svelte-data.jsonp";
const svelteJsonpFunction = "DataHandler.extractSvelteJsonpData";

class SvelteAnalyzer
{
    static analyze(appPaths)
    {
        console.log("Analyzing Svelte applications...");

        // --------------------------------------------------------------------------------------

        console.log("  Building Svelte applications...");

        for (let appPath of appPaths)
        {
            console.log("    Building " + appPath);

            //this.buildApp(appPath);

            console.log("    Finished building.");
        }

        console.log("  Finished building Svelte applications.");

        // --------------------------------------------------------------------------------------

        console.log("  Extracting data from Svelte applications...");

        let extractedData = [];

        for (let appPath of appPaths)
        {
            console.log("    Extracting data from " + appPath);

            extractedData.push(this.extractData(appPath));

            console.log("    Finished extracting data.");
        }

        File.write(svelteJsonDataOutputFilePath, JSON.stringify(extractedData, null, 4));
        File.write(svelteJsonpDataOutputFilePath, this.getJsonpEncodedData(extractedData));

        console.log("  Finsihed extracting data from Svelte applications.");

        // --------------------------------------------------------------------------------------

        console.log("Finished Svelte application analysis.");
    }

    static buildApp(appPath)
    {
        execSync(svelteBuildCommand, { cwd: appPath });
    }

    static extractData(appPath)
    {
        let componentsPath = appPath + "/" + svelteAppComponentDirectoryRelativePath;
        let jsBundlePath = appPath + "/" + svelteAppJsBundleRelativePath;
        let cssBundlePath = appPath + "/" + svelteAppCssBundleRelativePath;

        var data =
        {
            svelteApp: Path.basename(appPath),
            componentSourceSize: Directory.getSize(componentsPath),
            jsBundleSize: File.getSize(jsBundlePath),
            cssBundleSize: File.getSize(cssBundlePath),
            totalBundleSize: null,
            gzippedJsBundleSize: File.getGzipSize(jsBundlePath),
            gzippedCssBundleSize: File.getGzipSize(cssBundlePath),
            gippedTotalBundleSize: null
        };

        data.totalBundleSize = data.jsBundleSize + data.cssBundleSize;
        data.gippedTotalBundleSize = data.gzippedJsBundleSize + data.gzippedCssBundleSize;

        return data;
    }

    static getJsonpEncodedData(data)
    {
        return svelteJsonpFunction + "(" + JSON.stringify(data) + ")";
    }
}

module.exports = SvelteAnalyzer;