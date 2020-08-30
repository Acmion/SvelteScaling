class DataHandler
{
    static extractData()
    {
        var scriptElement = document.createElement("script");
        scriptElement.src = DataHandler.svelteJsonpDataPath;

        document.head.append(scriptElement);
    }

    static extractSvelteJsonpData(data)
    {
        DataHandler.svelteData = data;
    }
}

DataHandler.svelteJsonpDataPath = "data/svelte-data.jsonp";

DataHandler.svelteData = null;