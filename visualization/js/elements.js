class Elements
{
    static getElements()
    {
        Elements.sourceVsBundleChartReact = document.getElementById(Elements.sourceVsBundleChartReactId);
        Elements.sourceVsBundleChartSvelte = document.getElementById(Elements.sourceVsBundleChartSvelteId);

        Elements.totalBundleLinearRegressionSlopeSvelte = document.getElementById(Elements.totalBundleLinearRegressionSlopeSvelteId);
        Elements.totalBundleLinearRegressionInterceptSvelte = document.getElementById(Elements.totalBundleLinearRegressionInterceptSvelteId);
        Elements.totalBundleGzippedLinearRegressionSlopeSvelte = document.getElementById(Elements.totalBundleGzippedLinearRegressionSlopeSvelteId);
        Elements.totalBundleGzippedLinearRegressionInterceptSvelte = document.getElementById(Elements.totalBundleGzippedLinearRegressionInterceptSvelteId);
    }
}  

// Ids

Elements.sourceVsBundleChartReactId = "source-vs-bundle-chart-react";
Elements.sourceVsBundleChartSvelteId = "source-vs-bundle-chart-svelte";

Elements.totalBundleLinearRegressionSlopeSvelteId = "total-bundle-linear-regression-slope-svelte";
Elements.totalBundleLinearRegressionInterceptSvelteId = "total-bundle-linear-regression-intercept-svelte";
Elements.totalBundleGzippedLinearRegressionSlopeSvelteId = "total-bundle-gzipped-linear-regression-slope-svelte";
Elements.totalBundleGzippedLinearRegressionInterceptSvelteId = "total-bundle-gzipped-linear-regression-intercept-svelte";

// Elements

Elements.sourceVsBundleChartReact = null;
Elements.sourceVsBundleChartSvelte = null;

Elements.totalBundleLinearRegressionSlopeSvelte = null;
Elements.totalBundleLinearRegressionInterceptSvelte = null;
Elements.totalBundleGzippedLinearRegressionSlopeSvelte = null;
Elements.totalBundleGzippedLinearRegressionInterceptSvelte = null;