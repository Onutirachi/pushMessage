//Returns True or False randomly
const randomBoolean = Math.random() >= 0.5;

//Creating a simple promisse example
let promise = new Promise((resolve, reject) => {
    //Promisse will take 3 seconds to complete to simulate async requests
    setTimeout(() => {
        //Will resolve if randomBoolean is True and reject otherwise
        if (randomBoolean) {
            resolve("Promise Success");
        } else {
            reject("Promise Error");
        }
    }, 3000);
});

//Lets create a push to represent the promise call
//push() method returns push element, lets save it on a const to make a swap
const promisePush = message.push("Promise is pending", {
    title: "Promise",
    animationOut: "fade", //Defining fade out animation to simulate swap, totaly optional
    icon: "info",
    closeMode: "swap", //using closeMode swap, so push will expect to be swapped
});

//Using then() method to handle promise's resolve and reject
promise.then(
    (success) => {
        //Swaping push with success message if promise was resolved
        promisePush.swap(success, {
            title: "Promise",
            icon: "success",
            animation: "fade", //Defining fade in animation to match fade out animation from original push
            animationOut: "slideBottom",
        });
    },
    (error) => {
        //Swaping push with error message if promise was rejected
        promisePush.swap(error, {
            title: "Promise",
            icon: "error",
            animation: "fade", //Defining fade in animation to match fade out animation from original push
            animationOut: "slideBottom",
        });
    }
);

//Swap method works just like push() method, send message and custom object
