class Elements
{
    static getElements()
    {
        Elements.sourceVsBundleChartReact = document.getElementById(Elements.sourceVsBundleChartReactId);
        Elements.sourceVsBundleChartSvelte = document.getElementById(Elements.sourceVsBundleChartSvelteId);
        Elements.sourceVsBundleChartCombined = document.getElementById(Elements.sourceVsBundleChartCombinedId);

        Elements.totalBundleLinearRegressionSlopeSvelte = document.getElementById(Elements.totalBundleLinearRegressionSlopeSvelteId);
        Elements.totalBundleLinearRegressionInterceptSvelte = document.getElementById(Elements.totalBundleLinearRegressionInterceptSvelteId);
        Elements.totalBundleGzippedLinearRegressionSlopeSvelte = document.getElementById(Elements.totalBundleGzippedLinearRegressionSlopeSvelteId);
        Elements.totalBundleGzippedLinearRegressionInterceptSvelte = document.getElementById(Elements.totalBundleGzippedLinearRegressionInterceptSvelteId);

        Elements.totalBundleLinearRegressionSlopeReact = document.getElementById(Elements.totalBundleLinearRegressionSlopeReactId);
        Elements.totalBundleLinearRegressionInterceptReact = document.getElementById(Elements.totalBundleLinearRegressionInterceptReactId);
        Elements.totalBundleGzippedLinearRegressionSlopeReact = document.getElementById(Elements.totalBundleGzippedLinearRegressionSlopeReactId);
        Elements.totalBundleGzippedLinearRegressionInterceptReact = document.getElementById(Elements.totalBundleGzippedLinearRegressionInterceptReactId);
    }
}  

// Ids

Elements.sourceVsBundleChartReactId = "source-vs-bundle-chart-react";
Elements.sourceVsBundleChartSvelteId = "source-vs-bundle-chart-svelte";
Elements.sourceVsBundleChartCombinedId = "source-vs-bundle-chart-combined";

Elements.totalBundleLinearRegressionSlopeSvelteId = "total-bundle-linear-regression-slope-svelte";
Elements.totalBundleLinearRegressionInterceptSvelteId = "total-bundle-linear-regression-intercept-svelte";
Elements.totalBundleGzippedLinearRegressionSlopeSvelteId = "total-bundle-gzipped-linear-regression-slope-svelte";
Elements.totalBundleGzippedLinearRegressionInterceptSvelteId = "total-bundle-gzipped-linear-regression-intercept-svelte";

Elements.totalBundleLinearRegressionSlopeReactId = "total-bundle-linear-regression-slope-react";
Elements.totalBundleLinearRegressionInterceptReactId = "total-bundle-linear-regression-intercept-react";
Elements.totalBundleGzippedLinearRegressionSlopeReactId = "total-bundle-gzipped-linear-regression-slope-react";
Elements.totalBundleGzippedLinearRegressionInterceptReactId = "total-bundle-gzipped-linear-regression-intercept-react";

// Elements

Elements.sourceVsBundleChartReact = null;
Elements.sourceVsBundleChartSvelte = null;
Elements.sourceVsBundleChartCombined = null;

Elements.totalBundleLinearRegressionSlopeSvelte = null;
Elements.totalBundleLinearRegressionInterceptSvelte = null;
Elements.totalBundleGzippedLinearRegressionSlopeSvelte = null;
Elements.totalBundleGzippedLinearRegressionInterceptSvelte = null;

Elements.totalBundleLinearRegressionSlopeReact = null;
Elements.totalBundleLinearRegressionInterceptReact = null;
Elements.totalBundleGzippedLinearRegressionSlopeReact = null;
Elements.totalBundleGzippedLinearRegressionInterceptReact = null;