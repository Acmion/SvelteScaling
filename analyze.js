const Directory = require("./analyzer/directory");
const SvelteAnalyzer = require("./analyzer/svelte/analyzer");

const vueAppsDirectoryName = "vue-apps";
const reactAppsDirectoryName = "react-apps";
const svelteAppsDirectoryName = "svelte-apps";


let vueAppsDirectoryPath = __dirname + "/" + vueAppsDirectoryName;
let reactAppsDirectoryPath = __dirname + "/" + reactAppsDirectoryName;
let svelteAppsDirectoryPath = __dirname + "/" + svelteAppsDirectoryName;

const svelteAppsPaths = Directory.getSubDirectories(svelteAppsDirectoryPath);

SvelteAnalyzer.analyze(svelteAppsPaths);