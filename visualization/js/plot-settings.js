class PlotSettings
{
    static getDefaultLayout()
    {
        var layout =
        {
            showlegend: true,
            legend:
            {
                orientation: "h",
                y: -0.15
            },
            xaxis:
            {
                linecolor: '#ddd',
                linewidth: 2,
                mirror: true,
                fixedrange: true,
                title:
                {
                    text: 'Component Source Size (Bytes)',
                    standoff: 0
                },
                //range: [-1000, 22000]
            },
            yaxis:
            {
                linecolor: '#ddd',
                linewidth: 2,
                mirror: true,
                fixedrange: true,
                title:
                {
                    text: 'Bundle Size (Bytes)'
                },
                //range: [-5000, 150000]
            },      
            paper_bgcolor: 'rgba(0,0,0,0)',
            plot_bgcolor: 'rgba(0,0,0,0)',
            margin:
            {
                t: 20,
                r: 40,
                b: 60,
                l: 60
            }
        };

        

        return layout;
    }

    static getDefaultConfig()
    {
        var config =
        {
            responsive: true,
            displayModeBar: false
        };

        return config;
    }
}

PlotSettings.decimalPlaces = 2;
PlotSettings.reactColor = "#5ED3F3";
PlotSettings.svelteColor = "#FF3E00";

// Svelte --------------------------------------------------------

PlotSettings.linearRegressionLineConfigSvelte =
{
    color: PlotSettings.svelteColor,
    width: 1
};

PlotSettings.linearRegressionLineGzippedConfigSvelte =
{
    color: PlotSettings.svelteColor,
    width: 4
};

PlotSettings.totalBundleSizeMarkerConfigSvelte =
{
    color: PlotSettings.svelteColor,
    size: 8,
    symbol: "square",
    line:
    {
        color: 'black',
        width: 2
    }
};

PlotSettings.totalBundleSizeGzippedMarkerConfigSvelte =
{
    color: PlotSettings.svelteColor,
    size: 8,
    symbol: "circle",
    line:
    {
        color: 'black',
        width: 2
    }
};







// React --------------------------------------------------------

PlotSettings.linearRegressionLineConfigReact =
{
    color: PlotSettings.reactColor,
    width: 1
};

PlotSettings.linearRegressionLineGzippedConfigReact =
{
    color: PlotSettings.reactColor,
    width: 4
};

PlotSettings.totalBundleSizeMarkerConfigReact =
{
    color: PlotSettings.reactColor,
    size: 8,
    symbol: "square",
    line:
    {
        color: 'black',
        width: 2
    }
};

PlotSettings.totalBundleSizeGzippedMarkerConfigReact =
{
    color: PlotSettings.reactColor,
    size: 8,
    symbol: "circle",
    line:
    {
        color: 'black',
        width: 2
    }
};