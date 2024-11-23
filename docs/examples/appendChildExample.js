//Push method retuns push element
const push = message.push("", {title: "Append child"});
//Capturing push on a const allow to do some appendings

//Append element to push body like this
const element = document.createElement("div");
push.body.appendChild(element);
