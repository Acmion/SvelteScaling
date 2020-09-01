class SvelteAnalysis
{
    static report()
    {
        var svelteApps = DataHandler.svelteData.map(dataPoint => dataPoint.svelteApp);
        var componentSourceSizes = DataHandler.svelteData.map(dataPoint => dataPoint.componentSourceSize);
        var jsBundleSizes = DataHandler.svelteData.map(dataPoint => dataPoint.jsBundleSize);
        var cssBundleSizes = DataHandler.svelteData.map(dataPoint => dataPoint.cssBundleSize);
        var totalBundleSizes = DataHandler.svelteData.map(dataPoint => dataPoint.totalBundleSize);
        var gzippedJsBundleSizes = DataHandler.svelteData.map(dataPoint => dataPoint.gzippedJsBundleSize);
        var gzippedCssBundleSizes = DataHandler.svelteData.map(dataPoint => dataPoint.gzippedCssBundleSize);
        var gzippedTotalBundleSizes = DataHandler.svelteData.map(dataPoint => dataPoint.gippedTotalBundleSize);

        var componentSourceAndTotalBundleSizesLinearRegression = this.getLinearRegressionData(componentSourceSizes, totalBundleSizes);
        var componentSourceAndGzippedTotalBundleSizesLinearRegression = this.getLinearRegressionData(componentSourceSizes, gzippedTotalBundleSizes);

        var totalBundleSizeMarkersTrace =
        {
            x: componentSourceSizes,
            y: totalBundleSizes,
            text: svelteApps,
            mode: "markers",
            name: "Total Bundle Size",
            type: "scatter",
            marker: PlotSettings.totalBundleSizeMarkerConfigSvelte
        };

        var gzippedTotalBundleSizeMarkersTrace =
        {
            x: componentSourceSizes,
            y: gzippedTotalBundleSizes,
            text: svelteApps,
            mode: "markers",
            name: "Gzipped Total Bundle Size",
            type: "scatter",
            marker: PlotSettings.totalBundleSizeGzippedMarkerConfigSvelte
        };

        var totalBundleSizeLinRegTrace =
        {
            x: componentSourceAndTotalBundleSizesLinearRegression.x,
            y: componentSourceAndTotalBundleSizesLinearRegression.y,
            text: svelteApps,
            mode: "lines",
            name: "Total Bundle Size Linear Regression",
            type: "scatter",
            line: PlotSettings.linearRegressionLineConfigSvelte
        };

        var gzippedTotalBundleSizeLinRegTrace =
        {
            x: componentSourceAndGzippedTotalBundleSizesLinearRegression.x,
            y: componentSourceAndGzippedTotalBundleSizesLinearRegression.y,
            text: svelteApps,
            mode: "lines",
            name: "Gzipped Total Bundle Size Linear Regression",
            type: "scatter",
            line: PlotSettings.linearRegressionLineGzippedConfigSvelte
        };
        

        var data = [totalBundleSizeLinRegTrace, gzippedTotalBundleSizeLinRegTrace, totalBundleSizeMarkersTrace, gzippedTotalBundleSizeMarkersTrace];

        var layout = PlotSettings.getDefaultLayout();
        var config = PlotSettings.getDefaultConfig();

        Plotly.newPlot(Elements.sourceVsBundleChartSvelte, data, layout, config);

        Elements.totalBundleLinearRegressionSlopeSvelte.innerHTML = componentSourceAndTotalBundleSizesLinearRegression.coefficients.m.toFixed(PlotSettings.decimalPlaces);
        Elements.totalBundleLinearRegressionInterceptSvelte.innerHTML = componentSourceAndTotalBundleSizesLinearRegression.coefficients.b.toFixed(PlotSettings.decimalPlaces);

        Elements.totalBundleGzippedLinearRegressionSlopeSvelte.innerHTML = componentSourceAndGzippedTotalBundleSizesLinearRegression.coefficients.m.toFixed(PlotSettings.decimalPlaces);
        Elements.totalBundleGzippedLinearRegressionInterceptSvelte.innerHTML = componentSourceAndGzippedTotalBundleSizesLinearRegression.coefficients.b.toFixed(PlotSettings.decimalPlaces);
    }

    static zip(arrayA, arrayB)
    {
        return arrayA.map((element, index) => [element, arrayB[index]]);
    }

    static getLinearRegressionData(x, y)
    {
        var dataPoints = this.zip(x, y);

        var linReg = ss.linearRegression(dataPoints);
        var linRegLine = ss.linearRegressionLine(linReg);

        var linRegY = [];

        for (var i = 0; i < x.length; i++)
        {
            linRegY.push(linRegLine(x[i]));
        }

        return { x: x, y: linRegY, coefficients: linReg };
    }  
}