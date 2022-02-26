if (window.location.protocol !== 'https:') {
    try{
    window.location.replace(`https:${location.href.substring(location.protocol.length)}`);
    }
    catch
    {
        window.close();
    }
}