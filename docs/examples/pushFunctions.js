message.push("Click Here", {
    title: "Push with click function",
    icon: "info",
    //You can send a function to run when push is clicked,
    //and/or when push is closed/ended.
    onClick: () => message.push("You clicked on push"),
    onClose: function() {message.push("Push is over");},
});