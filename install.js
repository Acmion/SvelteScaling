const { execSync } = require("child_process");

const Directory = require("./analyzer/directory");

const appsDirectoryName = "sample-apps";

const reactAppsDirectoryName = "react-apps";
const svelteAppsDirectoryName = "svelte-apps";

let reactAppsDirectoryPath = __dirname + "/" + appsDirectoryName + "/" + reactAppsDirectoryName;
let svelteAppsDirectoryPath = __dirname + "/" + appsDirectoryName + "/" + svelteAppsDirectoryName;

const svelteAppsPaths = Directory.getSubDirectories(svelteAppsDirectoryPath);
const reactAppsPaths = Directory.getSubDirectories(reactAppsDirectoryPath);

for (var svelteAppPath of svelteAppsPaths)
{
    execSync("npm install", { cwd: svelteAppPath });
}

for (var reactAppPath of reactAppsPaths)
{
    execSync("npm install", { cwd: reactAppPath });
}

