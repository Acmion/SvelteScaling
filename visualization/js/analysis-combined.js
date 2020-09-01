class AnalysisCombined
{
    static report(frameworks, minX, maxX, sourceVsBundleChartElement)
    {
        var plotData = [];
        var newX = [];

        for (var i = 0; i < 100; i++)
        {
            newX.push(minX + i * (maxX - minX) / 99.0);
        }

        for (var framework of frameworks)
        {
            var name = framework.name;
            var data = framework.data;
            var linearRegressionLineConfig = framework.linearRegressionLineConfig;
            var linearRegressionLineGzippedConfig = framework.linearRegressionLineGzippedConfig;

            var componentSourceSizes = data.map(dataPoint => dataPoint.componentSourceSize);
            var jsBundleSizes = data.map(dataPoint => dataPoint.jsBundleSize);
            var cssBundleSizes = data.map(dataPoint => dataPoint.cssBundleSize);
            var totalBundleSizes = data.map(dataPoint => dataPoint.totalBundleSize);
            var gzippedJsBundleSizes = data.map(dataPoint => dataPoint.gzippedJsBundleSize);
            var gzippedCssBundleSizes = data.map(dataPoint => dataPoint.gzippedCssBundleSize);
            var gzippedTotalBundleSizes = data.map(dataPoint => dataPoint.gippedTotalBundleSize);

            var componentSourceAndTotalBundleSizesLinearRegression = this.getLinearRegressionData(componentSourceSizes, totalBundleSizes, newX);
            var componentSourceAndGzippedTotalBundleSizesLinearRegression = this.getLinearRegressionData(componentSourceSizes, gzippedTotalBundleSizes, newX);

            var totalBundleSizeLinRegTrace =
            {
                x: componentSourceAndTotalBundleSizesLinearRegression.x,
                y: componentSourceAndTotalBundleSizesLinearRegression.y,
                mode: "lines",
                name:  name + " Total Bundle Size Linear Regression",
                type: "scatter",
                line: linearRegressionLineConfig
            };

            var gzippedTotalBundleSizeLinRegTrace =
            {
                x: componentSourceAndGzippedTotalBundleSizesLinearRegression.x,
                y: componentSourceAndGzippedTotalBundleSizesLinearRegression.y,
                mode: "lines",
                name: name + " Gzipped Total Bundle Size Linear Regression",
                type: "scatter",
                line: linearRegressionLineGzippedConfig
            };

            plotData.push(totalBundleSizeLinRegTrace, gzippedTotalBundleSizeLinRegTrace);
        }

        var layout = PlotSettings.getDefaultLayout();
        var config = PlotSettings.getDefaultConfig();

        layout.xaxis.range = [minX - 12000, maxX];

        Plotly.newPlot(sourceVsBundleChartElement, plotData, layout, config);
    }

    static zip(arrayA, arrayB)
    {
        return arrayA.map((element, index) => [element, arrayB[index]]);
    }

    static getLinearRegressionData(x, y, newX = null)
    {
        if (newX == null)
        {
            newX = x;
        }

        var dataPoints = this.zip(x, y);

        var linReg = ss.linearRegression(dataPoints);
        var linRegLine = ss.linearRegressionLine(linReg);

        var linRegY = [];

        console.log(newX);

        for (var i = 0; i < newX.length; i++)
        {
            linRegY.push(linRegLine(newX[i]));
        }

        return { x: newX, y: linRegY, coefficients: linReg };
    }
}