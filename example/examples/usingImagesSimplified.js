//CSS for images
const css = `
width: 70px; 
height: 70px; 
object-fit: cover; 
object-position: 50% 0%; 
border: 1px solid white; 
border-radius: 6px; 
padding: 3px; 
background-color: darkgray;
`;

//You can use method or simple write the element
message.push(`
    ${message.image("icons/fry.png", css)}
    ${message.image("icons/bender.png", css)}
    ${message.image("icons/rick.png", css)}
    <img src="icons/morty.png" style="${css}"/>
`,
    {
        title: "Images",
        bodyStyle: `
            display: flex; 
            gap: 10px; 
            align-itens: 
            center; 
            justify-content: center;
        `,
        width: "400px",
    }
);
