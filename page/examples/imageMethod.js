const message = new PushMessage();

const image = message.image("path/to/image.xxx", "CSSproperty: value; CSSproperty2: value; ...CSSproperties;");
//Returns a span string with CSS String applied containing the text inside
//<img src="path/to/image.xxx" style="......"/>