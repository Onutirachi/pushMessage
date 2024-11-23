//customText method will return a span with message and style parameters applied

message.push(`
    A ${message.customText("success", "color: lightgreen; font-weight: bold;")} push with ${center.customText("CUSTOM TEXT", "color: gold; font-weight: bold; font-size: 18px;")}`,
    {
        title: "Success Example",
        icon: "success",
        showTime: true,
    }
);

message.push("Title can be customized as well", {
    title: `${center.customText("CUSTOM TITLE", "color: blue; font-weight: bold; font-size: 30px;")}`,
    showTime: true,
});
