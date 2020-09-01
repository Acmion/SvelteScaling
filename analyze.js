const Directory = require("./analyzer/directory");
const SvelteAnalyzer = require("./analyzer/svelte/analyzer");
const ReactAnalyzer = require("./analyzer/react/analyzer");

const appsDirectoryName = "sample-apps";

const reactAppsDirectoryName = "react-apps";
const svelteAppsDirectoryName = "svelte-apps";

let reactAppsDirectoryPath = __dirname + "/" + appsDirectoryName + "/" + reactAppsDirectoryName;
let svelteAppsDirectoryPath = __dirname + "/" + appsDirectoryName + "/" + svelteAppsDirectoryName;

const svelteAppsPaths = Directory.getSubDirectories(svelteAppsDirectoryPath);
const reactAppsPaths = Directory.getSubDirectories(reactAppsDirectoryPath);

SvelteAnalyzer.analyze(svelteAppsPaths);
ReactAnalyzer.analyze(reactAppsPaths);
