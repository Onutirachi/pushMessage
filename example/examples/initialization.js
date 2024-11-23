//Create instance with parameters
const message = new PushMessage({
    gap: 20,
    anchor: "bottom",
    position: "right",
    elementToAppend: "false", //See more on Advanced Usage
    custom: {
        //Customize here
        //background: "white",
        //titleFont: "Helvetica",
        //.....
        //See details in Customize >> Parameters section
    },
    customIcons: {
        example: "icons/example.png", 
        //Valid object key and path to icon.
        //You can use path directly on push icon src as well.

        //You can use Base64 here too
        //exampleBase64: "data:image/png;base64,iVBORw0KGg...",

        //There is 5 default icons ready to use:
        //info, success, warning, error, loading
    },
});
