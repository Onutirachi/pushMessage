//Create instance with custom properties
const message = new PushMessage({
    custom:{
        background: "red" 
        //All pushes will be background red by default
    }
});

//Use instance to push messages
message.push("Hello, world!"); //Red Background
