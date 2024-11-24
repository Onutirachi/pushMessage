const icons = {
    Bender: "page/icons/bender.png",
    Fry: "page/icons/fry.png",
    Zoidberg: "page/icons/zoidberg.png",

    Rick: "page/icons/rick.png",
    Morty: "page/icons/morty.png",
    "Mr Poopybutthole": "page/icons/mrpoopybutthole.png",

    Finn: "page/icons/finn.png",
    Jake: "page/icons/jake.png",
    "Ice King": "page/icons/iceking.png",

    Homer: "page/icons/homer.png",
    Ned: "page/icons/ned.png",
    Nelson: "page/icons/nelson.png",

    Grim: "page/icons/grim.png",
    Billy: "page/icons/billy.png",
    Mandy: "page/icons/mandy.png",
};

const quotes = new PushMessage({
    position: "left",
    custom: {
        duration: 5000,
        iconSize: "70px",
        iconStyle: "background-position: center top; background-size: cover; background-repeat: no-repeat;",
        animationOut: "slideLeft",
        width: "30vw",
        minWidth: "214px",
        maxWidth: "300px",
    },
    customIcons: {
        ...icons,
    },
});

const text = {
    Bender: {
        quotes: ["Kill all Humans!", "Yeah, well, I'm going to go build my own theme park... with blackjack and hookers. \n\nIn fact, forget the park."],
        background: "rgba(100,100,100,1)",
        color: "Khaki",
    },
    Fry: {
        quotes: ["Shut up and take my money!", "That's what separates people and robots from animals ... and animal robots."],
        background: "rgba(180,0,0,1)",
        color: "white",
    },
    Zoidberg: {
        quotes: ["Whoop-whoop-whoop-whoop!", "Hooray, people are paying attention to me."],
        background: "#ff5961",
        color: "#dff2ce",
    },
    Rick: {
        quotes: ["I'm sorry, but your opinion means very little to me.", "School is not a place for smart people."],
        background: "rgba(255,255,255,1)",
        color: "DodgerBlue",
    },
    Morty: {
        quotes: ["We're all going to die. \nCome watch TV.", "Open your mind!"],
        background: "rgba(255,255,0,1)",
        color: "SaddleBrown",
    },
    "Mr Poopybutthole": {
        quotes: ["Ooooowee!", "Ooo, wee, Rick. Whatever you want, we're here to help."],
        background: "rgba(100, 190, 179, 1)",
        color: "#f8f8a8",
    },
    Finn: {
        quotes: ["Mathematical!", "I'll slay anything that's evil. That's my deal!"],
        background: "rgba(0,178,255,1)",
        color: "white",
    },
    Jake: {
        quotes: ["You're at Tier 1, which is hugging. But pretty soon, you'll be at Tier 2, which is smooching. Then down the road you'll make it to Tier 5, where she'll let you discover all fifteen feet of her long, beautiful stomach.", "You stay away from that! Do not do Tier 15!"],
        background: "rgba(255,215,0,1)",
        color: "black",
    },
    "Ice King": {
        quotes: ["I'm going to make one marry me!", "I'll show you fun. Fun is my middle name!"],
        background: "rgb(0, 0, 116)",
        color: "#fdcd00",
    },
    Homer: {
        quotes: ["D'oh!", "Operator! Give me the number for 911!"],
        background: "rgb(57, 144, 215)",
        color: "#fed90f",
    },
    Ned: {
        quotes: ["Hi-diddly-ho, neighborino!", "Hey Homie, I can see your doodle!"],
        background: "rgba(60, 100, 30, 1)",
        color: "#fed90f",
    },
    Nelson: {
        quotes: ["Ha Ha!", "Shoplifting is a victimless crime, like punching someone in the dark."],
        background: "rgb(91, 143, 175)",
        color: "#ffffff",
    },
    Grim: {
        quotes: ["Why does the fate of humanity always end up in the hands of an idiot?", "I'm just goin' my job."],
        background: "#101010",
        color: "#ffffff",
    },
    Billy: {
        quotes: ["DESTROY US ALL! DESTROY US ALL! DESTROY US ALL! DESTROY US ALL! DESTROY US ALL! DESTROY US ALL!", "Mandy, you have to believe me! The clowns want to take over and become the dominant species!"],
        background: "#f4faf0",
        color: "#1283be",
    },
    Mandy: {
        quotes: ["If stupidity got us into this mess, why can't it get us out?", "When you change the channel, we start talking about you behind your back."],
        background: "rgb(208, 125, 155)",
        color: "#eedd67",
    },
};

function showRandomMessage() {
    const characters = Object.keys(text);
    const randomCharacter = characters[Math.floor(Math.random() * characters.length)];
    const messages = text[randomCharacter].quotes;
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];

    const background = text[randomCharacter].background;
    const titleColor = text[randomCharacter].color;
    const messageColor = text[randomCharacter].color;
    const icon = randomCharacter;

    quotes.push(randomMessage, { title: randomCharacter, background, icon, titleColor, messageColor });
}

var runQuotes = false;
var quotesInterval;

function showQuotes(e) {
    if (runQuotes) {
        e.currentTarget.classList.toggle("button-pressed");
        clearInterval(quotesInterval);
        runQuotes = false;
    } else {
        e.currentTarget.classList.toggle("button-pressed");
        showRandomMessage();
        quotesInterval = setInterval(showRandomMessage, 2000);
        runQuotes = true;
    }
}
