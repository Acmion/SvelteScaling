Elements.getElements();

Analysis.report(DataHandler.svelteData,
    PlotSettings.totalBundleSizeMarkerConfigSvelte, PlotSettings.totalBundleSizeGzippedMarkerConfigSvelte,
    PlotSettings.linearRegressionLineConfigSvelte, PlotSettings.linearRegressionLineGzippedConfigSvelte,
    Elements.sourceVsBundleChartSvelte,
    Elements.totalBundleLinearRegressionSlopeSvelte, Elements.totalBundleLinearRegressionInterceptSvelte,
    Elements.totalBundleGzippedLinearRegressionSlopeSvelte, Elements.totalBundleGzippedLinearRegressionInterceptSvelte
);

Analysis.report(DataHandler.reactData,
    PlotSettings.totalBundleSizeMarkerConfigReact, PlotSettings.totalBundleSizeGzippedMarkerConfigReact,
    PlotSettings.linearRegressionLineConfigReact, PlotSettings.linearRegressionLineGzippedConfigReact,
    Elements.sourceVsBundleChartReact,
    Elements.totalBundleLinearRegressionSlopeReact, Elements.totalBundleLinearRegressionInterceptReact,
    Elements.totalBundleGzippedLinearRegressionSlopeReact, Elements.totalBundleGzippedLinearRegressionInterceptReact
);

var frameworks =
[
    {
        name: "Svelte",
        data: DataHandler.svelteData,
        linearRegressionLineConfig: PlotSettings.linearRegressionLineConfigSvelte,
        linearRegressionLineGzippedConfig: PlotSettings.linearRegressionLineGzippedConfigSvelte
    },
    {
        name: "React",
        data: DataHandler.reactData,
        linearRegressionLineConfig: PlotSettings.linearRegressionLineConfigReact,
        linearRegressionLineGzippedConfig: PlotSettings.linearRegressionLineGzippedConfigReact
    }    
];

AnalysisCombined.report(frameworks, 0, 200000, Elements.sourceVsBundleChartCombined);