class Analysis
{
    static report(data,
        totalBundleSizeMarkerConfig, totalBundleSizeGzippedMarkerConfig,
        linearRegressionLineConfig, linearRegressionLineGzippedConfig,
        sourceVsBundleChartElement,
        totalBundleLinearRegressionSlopeElement, totalBundleLinearRegressionInterceptElement,
        totalBundleGzippedLinearRegressionSlopeElement, totalBundleGzippedLinearRegressionInterceptElement)
    {
        var apps = data.map(dataPoint => dataPoint.app);
        var componentSourceSizes = data.map(dataPoint => dataPoint.componentSourceSize);
        var jsBundleSizes = data.map(dataPoint => dataPoint.jsBundleSize);
        var cssBundleSizes = data.map(dataPoint => dataPoint.cssBundleSize);
        var totalBundleSizes = data.map(dataPoint => dataPoint.totalBundleSize);
        var gzippedJsBundleSizes = data.map(dataPoint => dataPoint.gzippedJsBundleSize);
        var gzippedCssBundleSizes = data.map(dataPoint => dataPoint.gzippedCssBundleSize);
        var gzippedTotalBundleSizes = data.map(dataPoint => dataPoint.gippedTotalBundleSize);

        var componentSourceAndTotalBundleSizesLinearRegression = this.getLinearRegressionData(componentSourceSizes, totalBundleSizes);
        var componentSourceAndGzippedTotalBundleSizesLinearRegression = this.getLinearRegressionData(componentSourceSizes, gzippedTotalBundleSizes);

        var totalBundleSizeMarkersTrace =
        {
            x: componentSourceSizes,
            y: totalBundleSizes,
            text: apps,
            mode: "markers",
            name: "Total Bundle Size",
            type: "scatter",
            marker: totalBundleSizeMarkerConfig
        };

        var gzippedTotalBundleSizeMarkersTrace =
        {
            x: componentSourceSizes,
            y: gzippedTotalBundleSizes,
            text: apps,
            mode: "markers",
            name: "Gzipped Total Bundle Size",
            type: "scatter",
            marker: totalBundleSizeGzippedMarkerConfig
        };

        var totalBundleSizeLinRegTrace =
        {
            x: componentSourceAndTotalBundleSizesLinearRegression.x,
            y: componentSourceAndTotalBundleSizesLinearRegression.y,
            text: apps,
            mode: "lines",
            name: "Total Bundle Size Linear Regression",
            type: "scatter",
            line: linearRegressionLineConfig
        };

        var gzippedTotalBundleSizeLinRegTrace =
        {
            x: componentSourceAndGzippedTotalBundleSizesLinearRegression.x,
            y: componentSourceAndGzippedTotalBundleSizesLinearRegression.y,
            text: apps,
            mode: "lines",
            name: "Gzipped Total Bundle Size Linear Regression",
            type: "scatter",
            line: linearRegressionLineGzippedConfig
        };
        

        var plotData = [totalBundleSizeLinRegTrace, gzippedTotalBundleSizeLinRegTrace, totalBundleSizeMarkersTrace, gzippedTotalBundleSizeMarkersTrace];

        var layout = PlotSettings.getDefaultLayout();
        var config = PlotSettings.getDefaultConfig();

        Plotly.newPlot(sourceVsBundleChartElement, plotData, layout, config);

        totalBundleLinearRegressionSlopeElement.innerHTML = componentSourceAndTotalBundleSizesLinearRegression.coefficients.m.toFixed(PlotSettings.decimalPlaces);
        totalBundleLinearRegressionInterceptElement.innerHTML = componentSourceAndTotalBundleSizesLinearRegression.coefficients.b.toFixed(PlotSettings.decimalPlaces);

        totalBundleGzippedLinearRegressionSlopeElement.innerHTML = componentSourceAndGzippedTotalBundleSizesLinearRegression.coefficients.m.toFixed(PlotSettings.decimalPlaces);
        totalBundleGzippedLinearRegressionInterceptElement.innerHTML = componentSourceAndGzippedTotalBundleSizesLinearRegression.coefficients.b.toFixed(PlotSettings.decimalPlaces);
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