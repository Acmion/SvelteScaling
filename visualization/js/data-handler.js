class DataHandler
{
    static extractReactJsonpData(data)
    {
        DataHandler.reactData = data;
    }

    static extractSvelteJsonpData(data)
    {
        DataHandler.svelteData = data;
    }
}

DataHandler.reactData = null;
DataHandler.svelteData = null;