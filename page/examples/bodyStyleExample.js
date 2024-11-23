message.push(`
        <button class="button" onClick="function1()" >Button 1</button>
        <button class="button" onClick="function2()" >Button 2</button>
        <button class="button" onClick="function3()" >Button 3</button>
        <button class="button" onClick="function4()" >Button 4</button>
    `,
    {
        title: "bodyStyle Example",
        unique: "push-bodystyle-example",
        bodyStyle: `                
            display: flex; 
            flex-direction: column; 
            align-items: center; 
            justify-content: center; 
            gap: 10px;
        `,
    }
);