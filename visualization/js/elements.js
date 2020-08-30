class Elements
{
    static getElements()
    {
        Elements.sourceVsBundleChartReact = document.getElementById(Elements.sourceVsBundleChartReactId);
        Elements.sourceVsBundleChartSvelte = document.getElementById(Elements.sourceVsBundleChartSvelteId);
    }
}  

Elements.sourceVsBundleChartReactId = "source-vs-bundle-chart-react";
Elements.sourceVsBundleChartSvelteId = "source-vs-bundle-chart-svelte";

Elements.sourceVsBundleChartReact = null;
Elements.sourceVsBundleChartSvelte = null;