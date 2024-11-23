//Add pushClose atribute to element you want 
//to use to close the push message
message.push(
    `
    <button onClick="function1()" >Button 1</button>
    <button onClick="function2()" >Button 2</button>
    <button onClick="function3()" >Button 3</button>
    
    <button onClick="function4()" pushClose>Close</button>
`,
    {
        title: "Close Mode Custom",
        titleAlign: "center",
        closeMode: "custom",
        bodyStyle: `                
        display: flex; 
        flex-direction: column; 
        align-items: center; 
        justify-content: center; 
        gap: 10px;
    `,
    }
);
