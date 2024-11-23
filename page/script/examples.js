const message = new PushMessage({
    gap: 20, //Gap between pushes in pixels (px)
    anchor: "bottom", //Anchor to define where pushes will come from
    position: "right", //Align your pushes
    elementToAppend: false, //DOM element where pushes will be appended, if nothing is defined, pushes will be appended on body

    //Customize your default push behavior
    custom: {
        duration: 3000,
        animationDuration: 500,
        animationTimingFunction: "ease-out",
        animation: "slideBottom",
        animationOut: "slideBottom",
        animationStay: false,
        closeMode: "auto",
        time: false,
        timeColor: "#444444",
        titleFont: "sans-serif",
        titleWeight: "bold",
        titleColor: "white",
        titleAlign: "left",
        titleSize: "18px",
        messageFont: "sans-serif",
        messageWeight: "normal",
        messageColor: "white",
        messageAlign: "left",
        messageSize: "15px",
        iconSize: "30px",
        iconStyle: false,
        background: "#777777",
        border: false,
        borderRadius: "10px",
        width: "300px",
        minWidth: false,
        maxWidth: false,
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.5)",
        cursor: "auto",
    },

    //If you want to add custom icons, define them here, it make easier to use icons by using key on icon src
    customIcons: {
        example: "icons/example.png", //Valid object key and path to icon, you can use path directly on push icon src as well
        //You can use Base64 here too
        //exampleBase64: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaX5RAAAAAXNSR0IArs4c6Q......",

        //You can use SVG here too
        //exampleSVG: "<svg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M16 1C7.23858......></svg>"

        //There is 4 default icons ready to use:
        //info, success, warning, error
    },
});

function helloWorld() {
    message.push("Hello, World!"); //Basic Usage
    message.push("Hello, World!", { title: "Push Message" }); //Push Message with title
    message.push("Hello, World!", { duration: 10000, title: "Push Message", icon: "success" }); //Push Message with title and icon

    //Pushes close itself on click or when defined duration time elapsed
    //But you can also create pushes that will be close only on close button
    //message.push("A fixed push never expires, you need to close manualy", { title: "Fixed Push Message", icon: "info", closeMode: "button" });
}

const center = new PushMessage({
    anchor: "bottom",
    position: "center",
    customIcons: {
        crown: "../example/icons/crown.png",
    },
});

function promise() {
    const randomBoolean = Math.random() >= 0.5;
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (randomBoolean) {
                resolve("Promise Success");
            } else {
                reject("Promise Error");
            }
        }, 3000);
    });

    const swap = () => {
        const promisePush = message.push("Promise is pending", {
            title: "Promise",
            animationOut: "fade",
            icon: "loading",
            closeMode: "swap",
        });

        promise.then(
            (success) => {
                promisePush.swap(success, {
                    title: "Promise",
                    icon: "success",
                    animation: "fade",
                    animationOut: "slideBottom",
                });
            },
            (error) => {
                promisePush.swap(error, {
                    title: "Promise",
                    icon: "error",
                    animation: "fade",
                    animationOut: "slideBottom",
                });
            }
        );
    };
    const swapFixed = () => {
        const promisePush = message.push("Promise is pending", {
            title: "Promise",
            animationOut: "fade",
            icon: "info",
            closeMode: "swapFixed",
        });

        promise.then(
            (success) => {
                promisePush.swap(success, {
                    title: "Promise",
                    icon: "success",
                    animation: "fade",
                    animationOut: "slideBottom",
                });
            },
            (error) => {
                promisePush.swap(error, {
                    title: "Promise",
                    icon: "error",
                    animation: "fade",
                    animationOut: "slideBottom",
                });
            }
        );
    };

    return { swap, swapFixed };
}

function apiResponseExample() {
    message.push("A simple info push example", { title: "Info Example", icon: "info", time: true });
    message.push("A simple warning push example", { title: "Warning Example", icon: "warning", time: true });
    message.push("A simple success push example", { title: "Success Example", icon: "success", time: true });
    message.push("A simple error push example", { title: "Error Example", icon: "error", time: true });
    setTimeout(() => {
        message.push("A info push with custom background", { title: "Info Example", icon: "info", time: true, background: "rgba(30,30,100,1)" });
        message.push("A warning push with custom background", { title: "Warning Example", icon: "warning", time: true, background: "rgba(150,150,30,1)" });
        message.push("A success push with custom background", { title: "Success Example", icon: "success", time: true, background: "rgba(30,100,30,1)" });
        message.push("A error push with custom background", { title: "Error Example", icon: "error", time: true, background: "rgba(100,30,30,1)" });
    }, 4000);
}

function customTextExamples() {
    message.push(`A ${center.customText("success", "color: lightgreen; font-weight: bold;")} push with ${center.customText("CUSTOM TEXT", "color: gold; font-weight: bold; font-size: 18px;")}`, { title: "Success Example", icon: "success", time: true });
    message.push("Title can be customized as well", { title: `${center.customText("CUSTOM TITLE", "color: blue; font-weight: bold; font-size: 30px;")}`, time: true });
}

function pushCounterExample() {
    message.push(PushMessage.globalPushCounter + " pushes was pushed", { title: "Global Push Counter" });
    message.push(message.pushCounter + " pushes was pushed", { title: "Instance Push Counter" });
}

function imageExample() {
    message.push(
        message.image(
            "icons/mortysticker.png",
            `
                width: 100%; 
                height: 100%;
                object-fit: contain;
            `
        ),
        {
            title: "Yes, you can send images on push",
            titleAlign: "center",
            duration: 10000,
        }
    );

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

    message.push(
        `You can use custom CSS on your message body 
        <div style="display: flex; gap: 10px; align-itens: center; justify-content: center;">
            ${message.image("icons/fry.png", css)}
            ${message.image("icons/bender.png", css)}
            ${message.image("icons/rick.png", css)}
            <img src="icons/morty.png" style="${css}"/> ${/*Example Without function, if you like that way*/ ""}
        </div>
        `,
        {
            title: "And images with different sizes",
            titleAlign: "center",
            duration: 10000,
            bodyStyle: "display: flex; flex-direction: column; align-items: center; justify-content: center;",
            width: "400px",
            closeMode: "button",
        }
    );
}

function goldenPush() {
    center.push("You got the golden push", {
        title: "Golden Push",
        duration: 6000,
        animationDuration: 3000,
        animationTimingFunction: "linear",
        animation: "greatDiscover",
        animationOut: "fade",
        animationStay: "itsShining 1000ms ease-out infinite alternate",
        closeMode: "auto",
        titleFont: "sans-serif",
        titleWeight: "bold",
        titleColor: "white",
        titleAlign: "center",
        titleSize: "28px",
        messageFont: "sans-serif",
        messageWeight: "bold",
        messageColor: "black",
        messageAlign: "center",
        messageSize: "18px",
        icon: "crown",
        iconSize: "50px",
        background: "radial-gradient(ellipse farthest-corner at right bottom, #FEDB37 0%, #FDB931 8%, #9f7928 30%, #8A6E2F 40%, transparent 80%), radial-gradient(ellipse farthest-corner at left top, #FFFFFF 0%, #FFFFAC 8%, #D1B464 25%, #5d4a1f 62.5%, #5d4a1f 100%);",
        borderRadius: "10px 10px 30% 30%",
        width: "300px",
        cursor: "pointer",
        unique: "goldenPush",
        onClick: () => message.push("You clicked on GOLDEN PUSH"),
        onClose: () => message.push("GOLDEN PUSH was gone D:"),
    });
}

function weirdPush() {
    center.push("This is a weird push", {
        title: "Weird Push",
        icon: "info",
        duration: 5000,
        animationDuration: 1000,
        titleFont: "Calibri",
        titleWeight: "bold",
        titleColor: "black",
        titleAlign: "center",
        titleSize: "20px",
        messageFont: "Times New Roman",
        messageWeight: "normal",
        messageColor: "blue",
        messageAlign: "center",
        messageSize: "30px",
        iconSize: "20px",
        animation: "doABarrelRoll",
        background: "linear-gradient(red, yellow)",
        border: "5px solid green",
        borderRadius: "1vh 50px 50% 20%",
        width: "600px",
        time: false,
        boxShadow: "0px 15px 15px rgba(0, 0, 255, 0.5)",
        onClickFunction: () => alert("Weird Push clicked"),
    });
}

function shrek() {
    center.push(
        `Click Here
⢀⡴⠑⡄⠀⠀⠀⠀⠀⠀⠀⣀⣀⣤⣤⣤⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ 
⠸⡇⠀⠿⡀⠀⠀⠀⣀⡴⢿⣿⣿⣿⣿⣿⣿⣿⣷⣦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀ 
⠀⠀⠀⠀⠑⢄⣠⠾⠁⣀⣄⡈⠙⣿⣿⣿⣿⣿⣿⣿⣿⣆⠀⠀⠀⠀⠀⠀⠀⠀ 
⠀⠀⠀⠀⢀⡀⠁⠀⠀⠈⠙⠛⠂⠈⣿⣿⣿⣿⣿⠿⡿⢿⣆⠀⠀⠀⠀⠀⠀⠀ 
⠀⠀⠀⢀⡾⣁⣀⠀⠴⠂⠙⣗⡀⠀⢻⣿⣿⠭⢤⣴⣦⣤⣹⠀⠀⠀⢀⢴⣶⣆ 
⠀⠀⢀⣾⣿⣿⣿⣷⣮⣽⣾⣿⣥⣴⣿⣿⡿⢂⠔⢚⡿⢿⣿⣦⣴⣾⠁⠸⣼⡿ 
⠀⢀⡞⠁⠙⠻⠿⠟⠉⠀⠛⢹⣿⣿⣿⣿⣿⣌⢤⣼⣿⣾⣿⡟⠉⠀⠀⠀⠀⠀ 
⠀⣾⣷⣶⠇⠀⠀⣤⣄⣀⡀⠈⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀ 
⠀⠉⠈⠉⠀⠀⢦⡈⢻⣿⣿⣿⣶⣶⣶⣶⣤⣽⡹⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀ 
⠀⠀⠀⠀⠀⠀⠀⠉⠲⣽⡻⢿⣿⣿⣿⣿⣿⣿⣷⣜⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀ 
⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣷⣶⣮⣭⣽⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀ 
⠀⠀⠀⠀⠀⠀⣀⣀⣈⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠇⠀⠀⠀⠀⠀⠀⠀ 
⠀⠀⠀⠀⠀⠀⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠃⠀⠀⠀⠀⠀⠀⠀⠀ 
⠀⠀⠀⠀⠀⠀⠀⠹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠟⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀ 
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠛⠻⠿⠿⠿⠿⠛⠉               `,
        {
            title: "Shrek",
            cursor: "pointer",
            duration: 8000,
            titleFont: "Impact",
            titleWeight: "bold",
            titleColor: "white",
            titleAlign: "center",
            titleSize: "50px",
            messageFont: "Consolas",
            messageWeight: "bold",
            messageColor: "white",
            messageAlign: "center",
            messageSize: "10px",
            background: "darkgreen",
            border: "2px dashed white",
            borderRadius: "50%",
            width: "320px",
            boxShadow: "0px 0px 20px rgba(0, 80, 0, 1)",
            onClick: () => (window.location.href = "https://www.youtube.com/watch?v=wamP5Jq9X3U"),
        }
    );
}

async function getChuckNorrisJoke() {
    try {
        const response = await fetch("https://api.chucknorris.io/jokes/random");
        const data = await response.json();

        if (response.ok) {
            message.push(data.value, { title: "Chuck Norris Joke", width: "400px", closeMode: "button" });
        } else {
            return "Chuck Norris Joke is not available.";
        }
    } catch (err) {
        console.error(err);
        return "Error fetching Chuck Norris Joke.";
    }
}

const hoverHere = document.querySelector("#hover-here");
message.hover(hoverHere, "You can make pushes to appear on hover elements", { icon: "info", title: "Hover" });
