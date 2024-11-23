const message = new PushMessage();

const text = message.customText("Text to customize", "CSSproperty: value; CSSproperty2: value; ...CSSproperties;");
//Returns a span string with CSS String applied containing the text inside
//<span style="......">Text to customize</span>