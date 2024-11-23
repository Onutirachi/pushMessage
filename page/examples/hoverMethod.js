//Select the desired element
const hoverHere = document.querySelector("#hover-here");

//Use hover method to send the element, message and custom, like a normal push
message.hover(hoverHere, "You can make pushes to appear on hover elements", {
    icon: "info",
    title: "Hover",
});
