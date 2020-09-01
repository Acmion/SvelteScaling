const Directory = require("./analyzer/directory");
const SvelteAnalyzer = require("./analyzer/svelte/analyzer");

const appsDirectoryName = "sample-apps";

const vueAppsDirectoryName = "vue-apps";
const reactAppsDirectoryName = "react-apps";
const svelteAppsDirectoryName = "svelte-apps";


let vueAppsDirectoryPath = __dirname + "/" + appsDirectoryName + "/" + vueAppsDirectoryName;
let reactAppsDirectoryPath = __dirname + "/" + appsDirectoryName + "/" + reactAppsDirectoryName;
let svelteAppsDirectoryPath = __dirname + "/" + appsDirectoryName + "/" + svelteAppsDirectoryName;

const svelteAppsPaths = Directory.getSubDirectories(svelteAppsDirectoryPath);

SvelteAnalyzer.analyze(svelteAppsPaths);