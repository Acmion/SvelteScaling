class SvelteResult
{
    constructor(svelteApp, componentSourceSize,
                jsBundleSize, cssBundleSize, totalBundleSize,
                gzippedJsBundleSize, gzippedCssBundleSize, gzippedTotalBundleSize)
    {
        this.svelteApp = svelteApp;
        this.componentSourceSize = componentSourceSize;
        this.jsBundleSize = jsBundleSize;
        this.cssBundleSize = cssBundleSize;
        this.totalBundleSize = totalBundleSize;
        this.gzippedJsBundleSize = gzippedJsBundleSize;
        this.gzippedCssBundleSize = gzippedCssBundleSize;
        this.gzippedTotalBundleSize = gzippedTotalBundleSize;
    }
}

module.exports = SvelteResult;